import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const out = 'C:/Users/Enap/AppData/Local/Temp/claude/c--projetos-vida-atleta-landing/116f0817-88ce-4ff2-af40-103057a4db58/scratchpad/qa';
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
const scene = p.locator('.scene');
const y = await scene.evaluate((e) => e.getBoundingClientRect().top + scrollY);
await p.evaluate((v) => window.scrollTo(0, v - 1200), y); await p.waitForTimeout(400);
// estado inicial: força remover is-in para fotografar o "antes"
await scene.evaluate((e) => e.classList.remove('is-in')); await p.waitForTimeout(900);
await p.evaluate((v) => window.scrollTo(0, v - 140), y); await p.waitForTimeout(80);
await scene.evaluate((e) => e.classList.remove('is-in'));
await p.waitForTimeout(900);
await p.screenshot({ path: out + '/m3-before.png' });
await scene.evaluate((e) => e.classList.add('is-in')); await p.waitForTimeout(1000);
await p.screenshot({ path: out + '/m3-after.png' });
await b.close();
