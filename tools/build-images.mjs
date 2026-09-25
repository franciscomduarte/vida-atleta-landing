// Gera os recortes das capturas reais do app (imagens-telas/captura) em AVIF/WebP.
// Nunca inclui a barra inferior do app (ela traz itens fora do escopo, como Rankings).
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\//, '')), '..');
const src = path.join(root, 'imagens-telas', 'captura');
const out = path.join(root, 'site', 'assets', 'app');
fs.mkdirSync(out, { recursive: true });

// nome de saída: [arquivo de origem, top, altura, left, largura]
const CROPS = {
  'hero-resultados': ['A1b-hero-tabela.png', 0, 1520, 0, 780],
  'ato2-calendario': ['A2-calendario.png', 0, 1420, 0, 780],
  'ato2-evento': ['A3-detalhe-evento.png', 0, 1420, 0, 780],
  'ato2-resultados': ['A1-resultados-prova.png', 440, 1420, 0, 780],
  'ato3-parciais': ['A5g-parciais-grafico.png', 1628, 1950, 12, 756],
  'ato3-parciais-tabela': ['A5-parciais.png', 1628, 850, 12, 756],
  'ato5-medalhas': ['A6-medalhas.png', 0, 1380, 0, 780],
  'ato5-boletins': ['A7-boletins.png', 0, Number(process.env.BOLETINS_H || 760), 0, 780],
  'ato5-calculadora': ['A8-calculadora.png', 0, 1190, 0, 780],
};

const manifest = {};
for (const [name, [file, top, height, left, width]] of Object.entries(CROPS)) {
  const input = path.join(src, file);
  if (!fs.existsSync(input)) { console.warn('faltando', file); continue; }
  const base = sharp(input).extract({ left, top, width, height });
  const buf = await base.png().toBuffer();
  manifest[name] = { source: file, sha256: crypto.createHash('sha256').update(buf).digest('hex'), width, height, variants: {} };
  for (const w of [390, 780]) {
    const h = Math.round((height * w) / width);
    for (const fmt of ['avif', 'webp']) {
      const f = `${name}-${w}.${fmt}`;
      const pipeline = sharp(buf).resize(w, h);
      await (fmt === 'avif' ? pipeline.avif({ quality: 52, effort: 6 }) : pipeline.webp({ quality: 80 })).toFile(path.join(out, f));
      manifest[name].variants[f] = fs.statSync(path.join(out, f)).size;
    }
  }
  console.log(name, `${width}x${height}`, Object.entries(manifest[name].variants).map(([k, v]) => `${k}:${Math.round(v / 1024)}KB`).join(' '));
}
fs.writeFileSync(path.join(root, 'site', 'assets', 'app', 'manifest.json'), JSON.stringify(manifest, null, 2));
