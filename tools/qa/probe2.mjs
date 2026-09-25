import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
console.log(await p.evaluate(async () => { const s = document.querySelector('.scene'); s.classList.remove('is-in'); await new Promise(r => setTimeout(r, 1000)); const i = s.querySelector('.phone--mini .phone__img'); return { attr: document.documentElement.dataset.motionQa, cls: document.documentElement.className, f: getComputedStyle(i).filter, tag: i.tagName, rules: [...document.styleSheets[0].cssRules].filter(r => r.cssText.includes('phone--mini')).map(r => r.cssText.slice(0, 160)) }; }));
await b.close();
