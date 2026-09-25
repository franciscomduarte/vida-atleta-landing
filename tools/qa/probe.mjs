import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
p.on('console', m => console.log('console', m.type(), m.text())); p.on('pageerror', e => console.log('pageerror', e.message));
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
console.log(await p.evaluate(() => { const f = document.querySelector('.phone--hero'); const r = f.getBoundingClientRect(); const cs = getComputedStyle(f); return { cls: f.className, rect: [r.x, r.y, r.width, r.height], clip: cs.clipPath, vis: cs.visibility, op: cs.opacity, img: f.querySelector('img').currentSrc, nat: f.querySelector('img').naturalWidth, js: document.documentElement.className }; }));
await b.close();
