import { createRequire } from 'node:module';
import path from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const b = await chromium.launch(); const p = await (await b.newContext({ viewport: { width: 1200, height: 630 } })).newPage();
await p.goto('file:///' + path.resolve('tools/og.html').replace(/\/g, '/')); await p.waitForTimeout(800);
await p.screenshot({ path: 'site/assets/img/og.png' }); await b.close();
