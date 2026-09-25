import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('C:/projetos/vida-atleta-natacao-app/node_modules/playwright');
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const p = await ctx.newPage(); await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' }); await p.waitForTimeout(500);
console.log(await p.evaluate(() => ({
  heroClip: getComputedStyle(document.querySelector('.phone--hero')).clipPath,
  friso: getComputedStyle(document.querySelector('.friso')).transform,
  fragTransform: getComputedStyle(document.querySelector('.frag')).transform,
  segOpacity: getComputedStyle(document.querySelector('.seg')).opacity,
  segTransform: getComputedStyle(document.querySelector('.seg')).transform,
  flowLine: getComputedStyle(document.querySelector('.flow__line')).strokeDashoffset,
  flowOpacity: getComputedStyle(document.querySelector('.flow__nodes')).opacity,
  transitions: [...document.querySelectorAll('*')].filter(e => parseFloat(getComputedStyle(e).transitionDuration) > 0.01 && !e.matches('a,button,.btn,.btn__arrow')).length,
})));
await b.close();
