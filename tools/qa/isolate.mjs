import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const variants = {
  baseline: {},
  'sem-agua': { css: '.water{display:none!important}' },
  'sem-fotos': { css: '.sbg__photo{display:none!important}' },
  'sem-animacoes-css': { css: '*{animation:none!important}' },
  'sem-js-main': { block: 'main.js' },
  'sem-sbg': { css: '.sbg{display:none!important}' },
};
const b = await chromium.launch();
for (const [name, v] of Object.entries(variants)) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage(); const cdp = await ctx.newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  if (v.block) await page.route('**/' + v.block, (r) => r.abort());
  await page.addInitScript(() => { window.__m = { n: 0, ms: 0 }; new PerformanceObserver((l) => { for (const e of l.getEntries()) { window.__m.n++; window.__m.ms += e.duration; } }).observe({ type: 'longtask', buffered: true }); });
  await page.goto('http://localhost:4173/', { waitUntil: 'load' });
  if (v.css) await page.addStyleTag({ content: v.css });
  await page.waitForTimeout(1500);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 500) { await page.evaluate((s) => window.scrollTo(0, s), y); await page.waitForTimeout(120); }
  await page.waitForTimeout(600);
  const m = await page.evaluate(() => window.__m);
  console.log(name.padEnd(20), 'longTasks', m.n, 'ms', Math.round(m.ms));
  await ctx.close();
}
await b.close();
