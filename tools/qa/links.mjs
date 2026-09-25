import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, locale: 'pt-BR' });
for (const url of process.argv.slice(2)) {
  const p = await ctx.newPage();
  try {
    const r = await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }); await p.waitForTimeout(2500);
    const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.href).filter((h) => /instagram|facebook|youtube|linkedin|twitter|x\.com|tiktok|whatsapp|mailto|privacidade|politica|termos/i.test(h)));
    console.log(url, r.status(), await p.title(), '\n', [...new Set(links)].slice(0, 15).join('\n '));
  } catch (e) { console.log(url, 'ERR', e.message.slice(0, 100)); }
  await p.close();
}
await b.close();
