#!/usr/bin/env node
// Juiz independente (OpenAI) da landing VidaAtleta.
// Uso:
//   node tools/judge/judge.mjs --focus design|copy|full --facts facts.md \
//        [--images a.png,b.png] [--text arquivo.html|.md] [--label rodada-1]
// Saída: relatório em tools/judge/runs/<label>.json e código de saída 0 = APROVADO, 1 = REPROVADO.
// A chave vem de OPENAI_API_KEY (ambiente) ou de .env.local na raiz do projeto. Nunca vai para o site.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

function loadEnv() {
  const f = path.join(root, '.env.local');
  if (!fs.existsSync(f)) return;
  for (const line of fs.readFileSync(f, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && m[2] && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
loadEnv();

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]);
    return acc;
  }, []),
);

const key = process.env.OPENAI_API_KEY;
if (!key) { console.error('OPENAI_API_KEY ausente (.env.local).'); process.exitCode = 2; throw new Error("abortado"); }

const MODEL = process.env.JUDGE_MODEL || 'gpt-5.5';
const focus = args.focus || 'full';
const label = args.label || `${focus}-${new Date().toISOString().replace(/[:.]/g, '-')}`;
const MIN_SCORE = 9; // nota mínima (0-10) exigida em CADA critério

const read = (p) => fs.readFileSync(path.resolve(root, p), 'utf8');
const spec = read('especificacao.md');
const facts = args.facts && fs.existsSync(path.resolve(root, args.facts))
  ? read(args.facts)
  : '(facts.md ainda não existe: não há como confirmar funcionalidades; trate qualquer alegação de funcionalidade como NÃO VERIFICADA e reporte.)';

const CRITERIA = {
  design: ['identidade_do_app', 'hierarquia_e_composicao', 'tipografia_cor_espacamento', 'qualidade_dos_mockups_e_telas', 'personalidade_vs_template_ia', 'responsividade_mobile'],
  copy: ['clareza_e_especificidade', 'fidelidade_ao_produto', 'ausencia_de_claims_nao_comprovados', 'portugues_gramatica', 'forca_das_headlines_e_ctas'],
  ux: ['entendimento_em_5_segundos', 'fluxo_de_leitura', 'clareza_dos_ctas', 'navegacao', 'experiencia_mobile'],
  tecnico: ['acessibilidade', 'semantica_e_seo', 'performance_aparente', 'animacoes_com_proposito'],
  // Documento de direção criativa (antes de existir página).
  conceito: ['fidelidade_ao_produto_e_rotulos', 'especificidade_anti_template', 'narrativa_e_arquitetura', 'direcao_de_arte_e_fotografia', 'copy_especifica_sem_claims', 'motion_com_proposito', 'privacidade_riscos_e_pendencias', 'implementabilidade_para_frontend'],
};
const active = focus === 'full' ? Object.entries(CRITERIA) : [[focus, CRITERIA[focus] || []]];
const criteriaList = active.flatMap(([g, list]) => list.map((c) => `${g}.${c}`));

const system = `Você é um revisor sênior, cético e exigente (diretor de arte + UX + copywriter + QA de produto) avaliando a landing page do VidaAtleta, um app de natação da CBDA.
Você NÃO elogia por cortesia. Só nota alta (9-10) quando não há problema relevante a apontar. Uma página "bonita e funcionando" merece no máximo 7.
Regras de avaliação:
- FONTE DE VERDADE do produto é o bloco FATOS. Qualquer funcionalidade, número, público ou termo que não esteja em FATOS é alucinação: reporte como severidade "critica".
- Aplique o AI Smell Test: hero genérico, gradientes em excesso, glassmorphism gratuito, cards demais, tudo centralizado, copy clichê ("revolucione", "leve ao próximo nível", "tudo em um só lugar"), stock photo genérica, números/depoimentos inventados. A página poderia ser template para 500 startups? Se sim, nota baixa em personalidade.
- Se o foco for 'conceito', você avalia um DOCUMENTO de direção criativa (não existe página ainda): julgue se um frontend conseguiria construir sem decisões subjetivas em aberto, se respeita os rótulos [FATO]/[INFERÊNCIA]/[OPORTUNIDADE]/[NÃO CONFIRMADO], se deixa como [DECISÃO PENDENTE] o que não foi decidido em vez de escolher em silêncio, e se a proposta é reconhecível como Vida Atleta e não como template.
- Compare a página com a ESPECIFICAÇÃO e o critério "impecável" dela.
- Seja concreto: cada problema com local exato e correção acionável (nada de "melhorar o hero").
Responda APENAS com JSON válido neste formato:
{
 "scores": { "<grupo.criterio>": {"nota": 0-10, "justificativa": "..."} },
 "issues": [ {"id":"P1","severidade":"critica|alta|media|baixa","local":"...","problema":"...","impacto":"...","correcao":"..."} ],
 "resumo": "2-3 frases"
}
Critérios obrigatórios em "scores" (use exatamente estas chaves): ${criteriaList.join(', ')}.`;

const content = [
  { type: 'input_text', text: `# ESPECIFICAÇÃO DO PROJETO\n${spec}\n\n# FATOS CONFIRMADOS DO PRODUTO (fonte de verdade)\n${facts}\n\n# FOCO DESTA AVALIAÇÃO: ${focus}` },
];
if (args.text) content.push({ type: 'input_text', text: `# CONTEÚDO DA PÁGINA (${args.text})\n${read(args.text)}` });
for (const img of (args.images || '').split(',').filter(Boolean)) {
  const p = path.resolve(root, img);
  const ext = path.extname(p).slice(1).toLowerCase().replace('jpg', 'jpeg');
  content.push({ type: 'input_text', text: `Imagem: ${path.basename(p)}` });
  content.push({ type: 'input_image', image_url: `data:image/${ext};base64,${fs.readFileSync(p).toString('base64')}`, detail: 'high' });
}

const res = await fetch('https://api.openai.com/v1/responses', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
  body: JSON.stringify({
    model: MODEL,
    reasoning: { effort: 'high' },
    text: { format: { type: 'json_object' } },
    input: [{ role: 'system', content: [{ type: 'input_text', text: system }] }, { role: 'user', content }],
  }),
});
const body = await res.json();
if (!res.ok) { console.error('Erro da API:', JSON.stringify(body.error || body)); process.exitCode = 2; throw new Error("abortado"); }

const raw = body.output_text ?? body.output?.flatMap((o) => o.content || []).find((c) => c.type === 'output_text')?.text;
let report;
try { report = JSON.parse(raw); } catch { console.error('Resposta não-JSON:', raw); process.exitCode = 2; throw new Error("abortado"); }

// Veredito decidido pelo código, não pelo modelo.
const failures = [];
for (const k of criteriaList) {
  const n = report.scores?.[k]?.nota;
  if (typeof n !== 'number') failures.push(`${k}: sem nota`);
  else if (n < MIN_SCORE) failures.push(`${k}: ${n} < ${MIN_SCORE}`);
}
const blocking = (report.issues || []).filter((i) => ['critica', 'alta'].includes(i.severidade));
if (blocking.length) failures.push(`${blocking.length} problema(s) crítico(s)/alto(s) em aberto`);
report.veredito = failures.length ? 'REPROVADO' : 'APROVADO';
report.motivos = failures;
report.modelo = MODEL;

fs.mkdirSync(path.join(root, 'tools/judge/runs'), { recursive: true });
fs.writeFileSync(path.join(root, 'tools/judge/runs', `${label}.json`), JSON.stringify(report, null, 2));

console.log(`\n=== ${report.veredito} (${MODEL}, foco: ${focus}) ===`);
for (const k of criteriaList) console.log(`${String(report.scores?.[k]?.nota ?? '?').padStart(2)}  ${k}  — ${report.scores?.[k]?.justificativa ?? ''}`);
console.log('\nProblemas:');
for (const i of report.issues || []) console.log(`[${i.severidade.toUpperCase()}] ${i.id} @ ${i.local}\n  ${i.problema}\n  → ${i.correcao}`);
console.log(`\n${report.resumo}\nRelatório: tools/judge/runs/${label}.json`);
process.exitCode = report.veredito === 'APROVADO' ? 0 : 1;
