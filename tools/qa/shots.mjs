// QA visual: screenshots por breakpoint + erros de console + overflow horizontal + imagens quebradas.
// Uso: node tools/qa/shots.mjs [url] [saida]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');

const url = process.argv[2] || 'http://localhost:4173/';
const out = process.argv[3] || path.resolve('C:/Users/Enap/AppData/Local/Temp/claude/c--projetos-vida-atleta-landing/116f0817-88ce-4ff2-af40-103057a4db58/scratchpad/qa');
fs.mkdirSync(out, { recursive: true });
const sizes = { 360: [360, 780], 390: [390, 844], 768: [768, 1024], 1024: [1024, 768], 1440: [1440, 900] };
const only = (process.env.SIZES || Object.keys(sizes).join(',')).split(',');

const browser = await chromium.launch();
const report = [];
for (const key of only) {
  const [width, height] = sizes[key];
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const problems = [];
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) problems.push(`console.${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message));
  page.on('requestfailed', (r) => problems.push('requestfailed: ' + r.url()));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  // rolar tudo para disparar IntersectionObserver e imagens lazy
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += Math.round(height * 0.6)) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(220); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);
  const info = await page.evaluate(() => {
    const doc = document.documentElement;
    const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && getComputedStyle(i).display !== 'none').map((i) => i.currentSrc || i.src);
    const wide = [...document.querySelectorAll('body *')].filter((el) => { const r = el.getBoundingClientRect(); return r.right > doc.clientWidth + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed'; }).slice(0, 5).map((el) => el.tagName + '.' + el.className);
    return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, height: doc.scrollHeight, broken, wide };
  });
  if (info.scrollWidth > info.clientWidth) problems.push(`overflow horizontal: ${info.scrollWidth} > ${info.clientWidth}`);
  if (info.broken.length) problems.push('imagens quebradas: ' + info.broken.join(', '));
  await page.screenshot({ path: path.join(out, `full-${key}.png`), fullPage: true });
  await page.screenshot({ path: path.join(out, `top-${key}.png`) });
  report.push({ width, height: info.height, problems, wide: info.wide });
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
