// Gera site/index.html a partir de site/src/index.template.html.
// Aplica os modos de site.config.json (CTA_MODE, TEMPO_MODE, INTERNAL_PREVIEW, H1_VARIANT, CBDA_LOCKUP)
// e injeta os dados de demonstração (demo-data.json) nas tabelas/listas acessíveis.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const cfg = JSON.parse(read('site.config.json'));
const demo = JSON.parse(read('demo-data.json'));
const faq = JSON.parse(read('faq.json'));
const dims = JSON.parse(read('site/assets/app/manifest.json'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---- travas de publicação (versão mínima)
const errors = [];
if (!cfg.internalPreview) {
  if (!cfg.links?.privacyUrl || !cfg.links?.termsUrl) errors.push('INTERNAL_PREVIEW=false exige privacyUrl e termsUrl (LEGAL-001).');
  if (cfg.ctaMode === 'stores' && (!cfg.links?.androidUrl || !cfg.links?.iosUrl)) errors.push('CTA_MODE=stores exige androidUrl e iosUrl reais.');
  if (cfg.ctaMode === 'web' && !cfg.webUrl) errors.push('CTA_MODE=web exige webUrl real.');
}
if (!['presentation', 'stores', 'web'].includes(cfg.ctaMode)) errors.push('ctaMode inválido (presentation | stores | web).');
if (!['captura', 'ilustracao'].includes(cfg.tempoMode)) errors.push('tempoMode inválido (captura | ilustracao).');
if (errors.length) { console.error('ERRO de configuração:\n- ' + errors.join('\n- ')); process.exit(1); }

const state = {
  cta: cfg.ctaMode,
  tempo: cfg.tempoMode,
  preview: String(cfg.internalPreview),
  h1: cfg.h1Variant,
  cbda: String(cfg.cbdaLockup),
};


const photos = JSON.parse(read('site/assets/photo/manifest.json'));
function photo(name, cls = '', mode = 'lazy') {
  const p = photos[name];
  if (!p) throw new Error('foto desconhecida: ' + name);
  const set = (fmt) => p.widths.map((w) => `assets/photo/${name}-${w}.${fmt} ${w}w`).join(', ');
  const big = p.widths[p.widths.length - 1];
  const load = mode === 'eager' ? ' fetchpriority="high"' : ' loading="lazy"';
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="(max-width:767px) 60vw, 100vw"><source type="image/webp" srcset="${set('webp')}" sizes="(max-width:767px) 60vw, 100vw"><img class="${cls}" src="assets/photo/${name}-${big}.webp" width="${p.width}" height="${p.height}" alt=""${load} decoding="async"></picture>`;
}
// ---- <picture>
function pic(name, alt, sizes = '100vw', cls = '', loading = 'lazy') {
  const d = dims[name];
  if (!d) throw new Error('imagem desconhecida: ' + name);
  const set = (fmt) => `assets/app/${name}-390.${fmt} 390w, assets/app/${name}-780.${fmt} 780w`;
  const fetchp = loading === 'eager' ? ' fetchpriority="high"' : ` loading="lazy"`;
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="${sizes}"><source type="image/webp" srcset="${set('webp')}" sizes="${sizes}"><img${cls ? ` class="${cls}"` : ''} src="assets/app/${name}-780.webp" width="${d.width}" height="${d.height}" alt="${esc(alt)}"${fetchp} decoding="async"></picture>`;
}

// ---- tabelas / listas acessíveis (mesma fonte dos dados das imagens)
const generators = {
  resultados: () => `<div class="sr-only"><table><caption>Resultados de uma prova (dados de demonstração)</caption><thead><tr><th>Colocação</th><th>Raia</th><th>Participante</th><th>Clube</th><th>Tempo</th></tr></thead><tbody>${demo.resultados.map((r) => `<tr><td>${r.pos}º</td><td>${r.raia}</td><td>${esc(r.atleta)}</td><td>${esc(r.clube)}</td><td>${r.tempo}</td></tr>`).join('')}</tbody></table></div>`,
  eventos: () => `<div class="sr-only"><ul>${demo.eventos.map((e) => `<li>${esc(e.nome)}, ${esc(e.periodo)}, ${esc(e.situacao)}, ${esc(e.local)}</li>`).join('')}</ul></div>`,
  programa: () => `<div class="sr-only"><ul>${demo.programa.map((p) => `<li>Prova ${p.n}: ${esc(p.prova)}, ${esc(p.info)}, ${esc(p.situacao)}</li>`).join('')}</ul></div>`,
  parciais: () => `<div class="sr-only"><table><caption>Parciais de uma prova (dados de demonstração)</caption><thead><tr><th>Trecho</th><th>Parcial</th><th>Acumulado</th></tr></thead><tbody>${demo.parciais.map((p) => `<tr><td>${p.trecho}</td><td>${p.parcial}</td><td>${p.acumulado}</td></tr>`).join('')}</tbody></table></div>`,
  medalhas: () => `<div class="sr-only"><table><caption>Quadro de medalhas (dados de demonstração)</caption><thead><tr><th>Posição</th><th>Clube</th><th>Ouro</th><th>Prata</th><th>Bronze</th><th>Total</th></tr></thead><tbody>${demo.medalhas.map((m) => `<tr><td>${m.pos}</td><td>${esc(m.clube)}</td><td>${m.ouro}</td><td>${m.prata}</td><td>${m.bronze}</td><td>${m.total}</td></tr>`).join('')}</tbody></table></div>`,
  boletins: () => `<div class="sr-only"><ul>${demo.boletins.map((b) => `<li>${esc(b.numero)}: ${esc(b.titulo)}, ${esc(b.data)}</li>`).join('')}</ul></div>`,
  calculadora: () => { const c = demo.calculadora; return `<p class="sr-only">Exemplo de dados de demonstração: piscina ${esc(c.piscina)}, sexo ${esc(c.sexo)}, prova ${esc(c.prova)}, tempo informado ${c.tempoInformado}, ${c.pontos} pontos, faixa ${esc(c.faixa)}.</p>`; },
  faq: () => faq.map((f, i) => `<details class="qa"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="qa__a"><p>${esc(f.a)}</p></div></details>`).join('\n'),
  faqld: () => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>`,
  strip: () => demo.parciais.map((p) => `<li class="seg" style="--w:${p.segundos}"><span class="seg__d">${p.trecho}</span><span class="seg__t">${p.parcial}</span></li>`).join(''),
};


const L = cfg.links || {};
const ico = {
  instagram: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M14 8.5V7c0-.8.3-1.2 1.3-1.2H17V3h-2.6C11.6 3 10.5 4.6 10.5 6.8v1.7H8V11.5h2.5V21H14v-9.5h2.6L17 8.5z" fill="currentColor"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9.2v5.6l5-2.8z" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 4l14 16M19 4L5 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
};
const social = (k, label) => L[k] ? `<li><a href="${esc(L[k])}" target="_blank" rel="noopener noreferrer">${ico[k]}<span>${label}</span></a></li>` : '';
const store = (url, name) => url ? `<li><a class="store" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><b>${name}</b></a></li>` : `<li><span class="store store--soon" aria-disabled="true"><b>${name}</b><i>Em breve</i></span></li>`;
generators.footer = () => `
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <a class="lockup lockup--footer" href="#inicio" aria-label="Vida Atleta, início"><img class="lockup__symbol" src="assets/img/symbol.svg" width="28" height="25" alt=""><span class="lockup__text">Vida Atleta</span><span class="lockup__org"><img src="assets/img/cbda-shield.svg" width="22" height="28" alt=""><img src="assets/img/cbda-wordmark.svg" width="56" height="14" alt=""></span></a>
        <p>O canal oficial da CBDA para acompanhar a natação, integrado ao Sistema de Gestão Esportiva (SGE).</p>
        <p class="pill">Disponível nas lojas</p>
      </div>
      <nav class="fcol" aria-label="Organização do site">
        <h2 class="fcol__t">Neste site</h2>
        <ul>
          <li><a href="#a-prova">Como funciona</a></li>
          ${cfg.tempoMode === 'captura' ? '<li><a href="#tempo-por-dentro">Parciais</a></li>' : ''}
          <li><a href="#fonte-dos-dados">Dados oficiais</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
          <li><a href="#nova-era">Nova era digital</a></li>
        </ul>
      </nav>
      <div class="fcol">
        <h2 class="fcol__t">Instalar o app</h2>
        <ul class="fcol__stores">${store(L.androidUrl, 'Google Play')}${store(L.iosUrl, 'App Store')}</ul>
        <p class="fcol__note">${L.androidUrl && L.iosUrl ? 'Login com Google, Apple (no iPhone) ou e-mail.' : 'Os links das lojas serão divulgados pela CBDA no lançamento.'}</p>
      </div>
      <div class="fcol">
        <h2 class="fcol__t">CBDA</h2>
        <ul>
          <li><a href="${esc(L.cbdaSite || '#')}" target="_blank" rel="noopener noreferrer">Site da CBDA</a></li>
        </ul>
        <h3 class="fcol__t fcol__t--sub">Redes sociais da CBDA</h3>
        <ul class="fcol__social">${social('instagram', 'Instagram')}${social('facebook', 'Facebook')}${social('youtube', 'YouTube')}${social('x', 'X (Twitter)')}</ul>
      </div>
      <div class="fcol">
        <h2 class="fcol__t">Tecnologia</h2>
        <ul>
          <li>${L.bigmidiaSite ? `<a href="${esc(L.bigmidiaSite)}" target="_blank" rel="noopener noreferrer">BigMídia</a>` : '<span>BigMídia</span>'}<span class="fcol__sub"> · responsável pelo SGE</span></li>
        </ul>
        <h3 class="fcol__t fcol__t--sub">Legal</h3>
        <ul>
          <li>${L.termsUrl ? `<a href="${esc(L.termsUrl)}">Termos de uso</a>` : '<span>Termos de uso</span><span class="fcol__sub"> · na tela de acesso do app</span>'}</li>
          <li>${L.privacyUrl ? `<a href="${esc(L.privacyUrl)}">Política de privacidade</a>` : '<span>Política de privacidade</span><span class="fcol__sub"> · na tela de acesso do app</span>'}</li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>© 2026 Vida Atleta.</p>
      <p>Fotos: Kindel Media, Juli Ane e Vijay Richhiya, via Pexels.</p>
    </div>`;

generators.launch = () => {
  const lis = ['instagram', 'youtube', 'facebook', 'x'].map((k) => social(k, { instagram: 'Instagram', youtube: 'YouTube', facebook: 'Facebook', x: 'X (Twitter)' }[k])).join('');
  return `
    <p class="eyebrow">Disponível agora</p>
    <h2 id="h-launch">${L.androidUrl && L.iosUrl ? 'Baixe o Vida Atleta.' : 'O Vida Atleta está chegando.'}</h2>
    <p class="launch__lead">${L.androidUrl && L.iosUrl ? 'O aplicativo oficial da CBDA está no Google Play e na App Store. Instale, ou atualize se você já tem o app, e acompanhe calendário, provas, raias e resultados no celular.' : 'O aplicativo da CBDA entra em fase de lançamento. Os links das lojas serão divulgados pelos canais oficiais da CBDA. Acompanhe por lá.'}</p>
    <div class="launch__actions">
      <ul class="launch__stores" aria-label="Lojas de aplicativos">${store(L.androidUrl, 'Google Play')}${store(L.iosUrl, 'App Store')}</ul>
      <a class="btn btn--ghost btn--lg" href="${esc(L.cbdaSite || '#')}" target="_blank" rel="noopener noreferrer">Ver o site da CBDA<svg class="btn__arrow" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
    <ul class="launch__social" aria-label="Redes sociais da CBDA">${lis}</ul>`;
};

generators.flow = () => {
  const r = demo.resultados[0];
  const ms = (() => { const [m, sc] = r.tempo.split(':'); return Math.round((Number(m) * 60 + Number(sc)) * 1000); })();
  return `
    <figure class="pipe" data-reveal="flow" aria-labelledby="pipe-t">
      <figcaption id="pipe-t" class="sr-only">Caminho do dado: a competição alimenta o Sistema de Gestão Esportiva da CBDA, o SGE, que alimenta o aplicativo Vida Atleta. Exemplo com dados de demonstração.</figcaption>
      <ol class="pipe__row">
        <li class="pipe__st">
          <span class="pipe__k">1 · A competição</span>
          <div class="pipe__card pipe__timer">
            <span class="pipe__lane">Raia ${r.raia}</span>
            <b class="pipe__clock" data-ms="${ms}">${esc(r.tempo)}</b>
            <small>Tempo oficial da prova</small>
          </div>
        </li>
        <li class="pipe__st">
          <span class="pipe__k">2 · SGE</span>
          <div class="pipe__card pipe__sge">
            <strong>Sistema de Gestão Esportiva da CBDA</strong>
            <ul class="pipe__chips"><li>Programa de provas</li><li>Raias</li><li>Tempos</li><li>Parciais</li><li>Resultados</li></ul>
          </div>
        </li>
        <li class="pipe__st">
          <span class="pipe__k">3 · Vida Atleta</span>
          <div class="pipe__card pipe__app">
            <span class="pipe__pos">${r.pos}º</span>
            <span class="pipe__who"><b>${esc(r.atleta)}</b><i>${esc(r.clube)} · Raia ${r.raia}</i></span>
            <b class="pipe__time">${esc(r.tempo)}</b>
          </div>
        </li>
      </ol>
    </figure>`;
};
let html = read('site/src/index.template.html');

// blocos condicionais (não aninhados): <!--#if k=v-->A<!--#else-->B<!--#endif-->
html = html.replace(/<!--#if (\w+)=(\w+)-->([\s\S]*?)(?:<!--#else-->([\s\S]*?))?<!--#endif-->/g, (_, k, v, a, b = '') => (state[k] === v ? a : b));
html = html.replace(/\{\{pic:([^}|]+)\|([^}|]*)\|?([^}|]*)\|?([^}|]*)\|?([^}|]*)\}\}/g, (_, n, alt, sizes, cls, loading) => pic(n.trim(), alt.trim(), sizes.trim() || '100vw', cls.trim(), loading.trim() || 'lazy'));
html = html.replace(/\{\{seo\}\}/g, () => cfg.siteUrl ? `<link rel="canonical" href="${esc(cfg.siteUrl)}">
<meta property="og:url" content="${esc(cfg.siteUrl)}">
<meta property="og:image" content="${esc(cfg.siteUrl.replace(/\/$/, ''))}/assets/img/og.jpg">
<meta name="twitter:card" content="summary_large_image">` : '<!-- canonical e og:image: definir siteUrl em site.config.json (URL final ainda pendente) -->');
html = html.replace(/\{\{photo:([\w-]+)\|?([\w -]*)\|?(\w*)\}\}/g, (_, n, cls, m) => photo(n, cls.trim(), m || 'lazy'));
html = html.replace(/\{\{gen:(\w+)\}\}/g, (_, k) => generators[k]());
html = html.replace(/\{\{cfg:(\w+)\}\}/g, (_, k) => esc(cfg[k] ?? cfg.links?.[k] ?? ''));
html = html.replace(/\{\{state:(\w+)\}\}/g, (_, k) => esc(state[k] ?? ''));

if (/\{\{|<!--#/.test(html)) { console.error('ERRO: diretivas não resolvidas no template'); process.exit(1); }
fs.writeFileSync(path.join(root, 'site', 'index.html'), html);
console.log('site/index.html gerado:', JSON.stringify(state));
