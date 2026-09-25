// QA de desempenho e acessibilidade: LCP, CLS, peso transferido, long tasks, axe-core.
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const axeSrc = fs.readFileSync(new URL('../../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');
const url = process.argv[2] || 'http://localhost:4173/';
const b = await chromium.launch();
const results = {};
for (const [name, vp, mobile] of [['mobile-390', { width: 390, height: 844 }, true], ['desktop-1440', { width: 1440, height: 900 }, false]]) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  if (mobile) { await cdp.send('Network.enable'); await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 }); await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 }); }
  let bytes = 0; page.on('response', async (r) => { try { const l = r.headers()['content-length']; bytes += l ? Number(l) : (await r.body()).length; } catch {} });
  await page.addInitScript(() => {
    window.__m = { lcp: 0, cls: 0, longTasks: 0, longMs: 0 };
    new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__m.lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__m.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__m.longTasks++; window.__m.longMs += e.duration; } }).observe({ type: 'longtask', buffered: true });
  });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(3000);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 500) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(120); }
  await page.waitForTimeout(800);
  const m = await page.evaluate(() => window.__m);
  await page.addScriptTag({ content: axeSrc });
  const ax = await page.evaluate(async () => { const r = await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'] }); return r.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, help: v.help, sample: v.nodes[0]?.html.slice(0, 120) })); });
  results[name] = { lcpMs: Math.round(m.lcp), cls: +m.cls.toFixed(4), longTasks: m.longTasks, longMs: Math.round(m.longMs), transferKB: Math.round(bytes / 1024), axe: ax };
  await ctx.close();
}
await b.close();
fs.mkdirSync('tools/judge',{recursive:true}); fs.writeFileSync('tools/judge/metrics.json', JSON.stringify(results));
console.log(JSON.stringify(results, null, 1));
