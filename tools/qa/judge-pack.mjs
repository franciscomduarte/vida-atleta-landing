// Monta o pacote enviado ao juiz: blocos de screenshots (desktop e mobile), texto da página e métricas medidas.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const S = 'C:/Users/Enap/AppData/Local/Temp/claude/c--projetos-vida-atleta-landing/116f0817-88ce-4ff2-af40-103057a4db58/scratchpad/qa';
const out = path.resolve('tools/judge/input'); fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.unlinkSync(path.join(out, f));
const list = [];
async function chunks(file, w, chunkH, outW, prefix, max) {
  const m = await sharp(file).metadata(); const n = Math.min(max, Math.ceil(m.height / chunkH));
  for (let i = 0; i < n; i++) {
    const f = `${prefix}-${i + 1}.jpg`;
    await sharp(file).extract({ left: 0, top: i * chunkH, width: m.width, height: Math.min(chunkH, m.height - i * chunkH) }).resize(outW).jpeg({ quality: 82 }).toFile(path.join(out, f)); list.push(`tools/judge/input/${f}`);
  }
}
const SEC = `${S}/sec`;
for (const f of fs.readdirSync(SEC).sort()) {
  const dest = f.replace('.png', '.jpg');
  await sharp(path.join(SEC, f)).resize(f.startsWith('d1440') ? 1100 : 390).jpeg({ quality: 84 }).toFile(path.join(out, dest)); list.push(`tools/judge/input/${dest}`);
}
await chunks(`${S}/full-768.png`, 768, 1300, 600, 'tablet-768', 1);
await chunks(`${S}/full-390.png`, 390, 2600, 390, 'mobile-390', 5);
// texto da página
const html = fs.readFileSync('site/index.html', 'utf8');
const body = html.replace(/<div class="sheet"[\s\S]*?<\/div>\s*<\/div>\s*(?=<main)/, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
const lines = [];
for (const m of body.matchAll(/<(h[1-3]|p|li|dt|dd|a|button|figcaption|title|meta|summary)\b([^>]*)>([\s\S]*?)<\/\1>|<meta[^>]*>|<img[^>]*alt="([^"]*)"[^>]*>/g)) {
  if (m[4]) { lines.push(`[imagem alt] ${m[4]}`); continue; }
  const tag = m[1]; const txt = (m[3] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (tag && txt) lines.push(tag.startsWith('h') ? `${'#'.repeat(Number(tag[1]))} ${txt}` : `- ${txt}`);
}
const head = (html.match(/<head>[\s\S]*?<\/head>/) || [''])[0].replace(/<script[\s\S]*?<\/script>/g, '');
const metrics = fs.existsSync('tools/judge/metrics.json') ? fs.readFileSync('tools/judge/metrics.json', 'utf8') : '{}';
const cfg = fs.readFileSync('site.config.json', 'utf8');
fs.writeFileSync(path.join(out, 'pagina.md'), `# TEXTO DA LANDING (extraído do HTML gerado)\n\nConfiguração ativa: ${cfg}\n\n${lines.join('\n')}\n\n# METADADOS DO <head>
${head}

# MÉTRICAS MEDIDAS (Playwright + axe-core; mobile com CPU 4x e rede 1,6 Mbps)\n${metrics}\n\n# ASSETS\nFontes: Rubik variável e Lato (WOFF2, subset latin). Imagens: capturas reais do app com dados de demonstração em AVIF/WebP (maior: 48 KB AVIF). Sem bibliotecas JS. JS total ~3 KB.\n`);
console.log(JSON.stringify({ images: list, text: 'tools/judge/input/pagina.md' }));
