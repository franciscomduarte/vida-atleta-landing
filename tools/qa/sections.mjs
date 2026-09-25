// Screenshots de viewport por seção (o que o visitante vê ao rolar), incluindo os 3 estados do celular fixo.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const out = 'C:/Users/Enap/AppData/Local/Temp/claude/c--projetos-vida-atleta-landing/116f0817-88ce-4ff2-af40-103057a4db58/scratchpad/qa/sec';
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.unlinkSync(path.join(out, f));
const targets = [
  ['01-hero', '#inicio', 'start'], ['02-problema', '#problema', 'start'],
  ['03-passo1', '.prova__grid', 'start'], ['04-passo2', '.step[data-step="2"]', 'center'], ['05-passo3', '.step[data-step="3"]', 'center'],
  ['06-tempo', '#tempo-por-dentro', 'start'], ['07-alem', '#alem-do-resultado', 'start'], ['08-fonte', '#fonte-dos-dados', 'start'], ['09-cta', '#apresentacao', 'center'],
];
const b = await chromium.launch();
for (const [tag, vp] of [['d1440', { width: 1440, height: 900 }], ['m390', { width: 390, height: 844 }]]) {
  const p = await (await b.newContext({ viewport: vp })).newPage();
  await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
  for (const [name, sel, mode] of targets) {
    if (tag === 'm390' && !['01-hero', '03-passo1', '06-tempo', '08-fonte', '09-cta'].includes(name)) continue;
    await p.evaluate(({ sel, mode }) => { const e = document.querySelector(sel); const r = e.getBoundingClientRect(); const y = mode === 'center' ? r.top + scrollY - Math.max(90, (innerHeight - r.height) / 2) : r.top + scrollY - 84; window.scrollTo(0, Math.max(0, y)); }, { sel, mode });
    await p.waitForTimeout(3200);
    await p.screenshot({ path: path.join(out, `${tag}-${name}.png`) });
  }
}
await b.close();
console.log(fs.readdirSync(out).join('\n'));
