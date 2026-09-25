// Recorta e otimiza as fotos do Pexels (licença Pexels: uso comercial livre, sem atribuição obrigatória; creditamos por cortesia).
// Recortes evitam rostos em destaque e marcas visíveis. Registro de licença/crédito em site/assets/photo/manifest.json.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('imagens-telas/pexels');
const out = path.resolve('site/assets/photo');
fs.mkdirSync(out, { recursive: true });

const PHOTOS = {
  'hero-agua': { file: '31049378.jpg', box: [0, 830, 1920, 1000], id: 31049378, credito: 'Juli Ane', perfil: 'https://www.pexels.com/pt-br/@juli-ane-351889530/', desc: 'Cordão de raia com boias em piscina, reflexos na água. Sem pessoas.', pessoas: false, widths: [800, 1600] },
  'aerea-raias': { file: '36018788.jpg', box: [490, 0, 1080, 1404], id: 36018788, credito: 'Vijay Richhiya', perfil: 'https://www.pexels.com/pt-br/@vijay-richhiya-2155208704/', desc: 'Piscina de 8 raias vista de cima; figuras pequenas e não identificáveis. Recorte exclui as lonas com marca.', pessoas: 'anônimas, em escala mínima', widths: [640, 1080] },
  'divisor-raia': { file: '8688165.jpg', box: [420, 700, 1000, 2000], id: 8688165, credito: 'Kindel Media', perfil: 'https://www.pexels.com/pt-br/@kindelmedia/', desc: 'Divisor de raias em piscina, close. Sem pessoas.', pessoas: false, widths: [500, 900] },
  'nadador-aereo': { file: '8688609.jpg', box: [0, 1450, 1920, 1150], id: 8688609, credito: 'Kindel Media', perfil: 'https://www.pexels.com/pt-br/@kindelmedia/', desc: 'Nadador adulto em vista aérea, sem rosto identificável na escala usada; sob sobreposição azul.', pessoas: 'uma pessoa, vista aérea, sem rosto identificável', widths: [800, 1600] },
};

const manifest = {};
for (const [name, p] of Object.entries(PHOTOS)) {
  const [left, top, width, height] = p.box;
  const buf = await sharp(path.join(src, p.file)).extract({ left, top, width, height }).toBuffer();
  manifest[name] = { origem: 'foto-licenciada', fonte: 'Pexels', licenca: 'Licença Pexels (uso comercial livre)', credito: p.credito, perfil: p.perfil, pexelsId: p.id, descricao: p.desc, pessoas: p.pessoas, semMenoresComprovado: false, aprovacaoUsoImagem: 'autorizada pelo responsável do projeto (2026-09-25); comprovação de idade não disponível, por isso só recortes sem rosto identificável', width, height, variants: {} };
  for (const w of p.widths) {
    const h = Math.round((height * w) / width);
    for (const fmt of ['avif', 'webp']) {
      const f = `${name}-${w}.${fmt}`;
      const pipe = sharp(buf).resize(w, h);
      await (fmt === 'avif' ? pipe.avif({ quality: 42, effort: 6 }) : pipe.webp({ quality: 66 })).toFile(path.join(out, f));
      manifest[name].variants[f] = fs.statSync(path.join(out, f)).size;
    }
  }
  manifest[name].widths = p.widths;
  console.log(name, Object.entries(manifest[name].variants).map(([k, v]) => `${k}:${Math.round(v / 1024)}KB`).join(' '));
}
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 2));
