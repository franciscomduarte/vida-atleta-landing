# FILA DE IMPLEMENTAÇÃO

**Estado: EM EXECUÇÃO (protótipo interno, `INTERNAL_PREVIEW=true`), por decisão do responsável em 2026-09-25**, após 22 rodadas do juiz sobre `direcao-criativa.md` (0 críticos, notas 7,5 a 9; os 2 altos restantes eram decisões do responsável, agora tomadas). Depois disso, cada ciclo abaixo passa pelo juiz (`--focus design|copy|ux|tecnico` e, ao final, `--focus full`).

## Divergências entre este pedido e a direção criativa (resolver no início do Ciclo 1)

O pedido do responsável tem precedência nas suas próprias decisões. Os pontos abaixo já estão **aprovados pelo responsável** e foram incorporados à direção criativa: H1 editorial "Do evento ao centésimo." (fecha DP5), H2 do Problema e frase "Em dia de competição, isso pesa.", CTA default D (`presentation`), `TEMPO_MODE=ilustracao` como default, `Tempo por dentro` some do header em `ilustracao`.

Pontos que **conflitam** com achados do juiz e precisam de decisão explícita antes de codar:

| # | Pedido | Conflito | Proposta (a confirmar) |
|---|---|---|---|
| 1 | Meta description: "…resultados e **parciais oficiais** da natação brasileira." | Sugere que toda prova tem parciais; o app só as mostra quando publicadas (juiz: crítico) | "Consulte eventos, provas e resultados da natação brasileira, com dados da CBDA e parciais quando publicadas." |
| 2 | Title: "Vida Atleta: calendário, resultados e parciais da natação" | Mesmo problema, menor | "Vida Atleta: calendário de eventos e resultados da natação" |
| 3 | Ilustração do Ato 3 com `1:58.42` | Número de resultado específico não vem de fixture aprovada (juiz: crítico) | Usar `mm:ss.cc` e rótulos `parcial 1/2/3` |
| 4 | Diagrama "SGE · CBDA → API → Tela do app" | "API" e "Tela do app" imprecisos | "SGE da CBDA → API consumida pelo app → app Vida Atleta" |
| 5 | "Aviso de dados desatualizados" entre as 4 evidências | Só pode ir com captura real do estado; sem ela, texto e diagrama | Regra 3 em texto, imagem A9 opcional |
| 6 | Linhas do resultado "entram sequencialmente" na captura | Uma captura raster não tem linhas independentes | Camadas da mesma imagem recortadas por `clip-path` em faixas (sem recriar UI) |
| 7 | "Sempre preferir captura real; se não for possível, ilustração" | Telas do hero/Ato 2/Ato 5 não têm fallback publicável (regra da direção criativa) | Sem captura real: só protótipo interno com marca d'água `PLACEHOLDER — NÃO PUBLICAR`; build de produção falha |
| 9 | Subheadline do pedido: "…vê o tempo, e como ele foi feito." | Sugere que toda prova tem parciais | "Você abre o evento, escolhe a prova, vê o tempo e, quando publicadas, consulta as parciais." |
| 10 | Barra de progresso de 3 px no mobile | O juiz pediu M8 atrás de flag | Mantida no v1 só com CSS (`animation-timeline: scroll()`), custo ~0; o marcador do cordão no desktop fica em `MOTION_PLUS` |
| 8 | Nenhuma captura real existe hoje | Bloqueia publicação, não o desenvolvimento | Desenvolver com placeholders marcados; capturas reais entram depois |

## Pedido original (verbatim)

# IMPLEMENTAÇÃO DA LANDING — VIDA ATLETA

Agora a fase de direção criativa está concluída.

Você deve sair do planejamento e começar a implementação da landing page.

## 1. FONTES DE VERDADE

Antes de escrever código:

1. Leia todas as skills disponíveis em `.claude/skills/`.
2. Leia o resultado completo da direção criativa.
3. Leia `product-dna.md` / `facts.md`.
4. Inspecione o aplicativo Flutter real em: `C:\projetos\vida-atleta-natacao-app`
5. Inspecione as referências em `referencias.md`.
6. Inspecione `imagens-telas/telas.md`.
7. Não use `C:\projetos\vidaatleta` como fonte de verdade do produto caso ele diverja do Flutter.

O Flutter é a fonte de verdade funcional e visual.

## 2. OBJETIVO

Implementar uma landing page premium para o Vida Atleta. Ela deve parecer uma extensão editorial do próprio aplicativo, e não uma landing genérica de SaaS, IA ou aplicativo esportivo.

Narrativa: **PROBLEMA → EVENTO → PROVA → TEMPO POR DENTRO → DEPOIS DA PROVA → FONTE DOS DADOS → ENTRADA**

O visitante deve entender rapidamente: *O Vida Atleta permite consultar eventos, provas e resultados da natação brasileira a partir dos dados da CBDA.*

## 3. CONCEITO VISUAL

Conceito interno: **"A página é uma tabela de resultados."** Não transformar literalmente em uma página cheia de tabelas. A ideia aparece por: raia; alinhamento; tempos; números; pódio; linhas; friso lima; densidade técnica; passagem horizontal; construção das parciais.

NÃO usar: roxo; glassmorphism; cards translúcidos; blobs; gradientes aleatórios; excesso de ícones; grid genérico de features; depoimentos; métricas de usuários; estrelas; pricing; "AI"; ranking; gamificação; imagens genéricas de nadador sorrindo; CTA falso de App Store/Google Play.

## 4. IDENTIDADE

Tokens reais do app: Royal `#034fcf`, Navy `#18386c`, Deep Blue `#0d3e90`, Lima `#caf51a`, Canvas `#f5f7fa`, Border `#e5e7eb`. Rubik para títulos, números e tempos; Lato para corpo e botões. Lima principalmente em: friso; CTA primário; destaque de tempo/valor sobre fundo escuro.

## 5. ARQUITETURA

**Header:** lockup Vida Atleta; links A prova · Tempo por dentro · Fonte dos dados (o link "Tempo por dentro" desaparece se `TEMPO_MODE=ilustracao`); CTA por `CTA_MODE` (default `D`: **Conhecer o Vida Atleta**); não inventar link de loja.

**HERO:** H1 **Do evento ao centésimo.** Sub: "Calendário de eventos, programa de provas, resultados e parciais da natação brasileira, com dados da CBDA. Você abre o evento, escolhe a prova e vê o tempo, e como ele foi feito." Visual: fundo navy; raias; celular grande à direita com a tela de Resultados da Prova, sangrando parcialmente para fora; trilha `Evento › Prova › Raia › Tempo`. Assimétrico; tabela da tela visualmente importante; linhas do resultado podem entrar sequencialmente.

## 6. PROBLEMA

Título: **O resultado existe. Chegar até ele é que dá trabalho.** Quatro fragmentos: Página do evento, Filtros, Boletim, Tabela de resultados; cinza/desaturado que, durante o scroll, se alinham e convergem para o fluxo do app. Texto: "A informação está distribuída entre páginas, filtros e documentos difíceis de consultar no celular. Em dia de competição, isso pesa." Depois: "Para quem acompanha eventos, provas e resultados da natação brasileira, o Vida Atleta organiza esse caminho: evento, prova, resultado." Não afirmar quantidade de toques ou segundos.

## 7. A PROVA

Título: **Do calendário ao resultado.** Três etapas: 01 Comece pelo calendário de eventos. 02 Abra o evento. 03 Escolha a prova. Screenshots reais do Flutter. Desktop: texto à esquerda, celular sticky à direita alternando Calendário → Detalhe do evento → Resultados, sem scroll hijacking, troca por IntersectionObserver. Mobile: sem sticky, três blocos sequenciais.

## 8. TEMPO POR DENTRO

`TEMPO_MODE`, default `ilustracao`: não fingir screenshot real; visualização abstrata parcial → parcial → parcial → tempo final (exemplo do pedido: `▓▓▓▓░░ → ▓▓▓▓▓░ → ▓▓▓▓▓▓ → 1:58.42`), sem contador correndo, com a legenda "Ilustração com dados de demonstração; não é uma captura do app." Com `TEMPO_MODE=captura`: screenshot real, revelação por clip-path, legenda "Dados de demonstração", link para simulação somente se a captura existir.

## 9. DEPOIS DA PROVA

Título: **Do pódio ao boletim.** Sem grade convencional: três "raias" de tamanhos diferentes: Quadro de Medalhas, Boletins, Calculadora; cada uma com screenshot; composição editorial e assimétrica.

## 10. FONTE DOS DADOS

Fundo navy. Título: **O dado não nasce no app.** `SGE · CBDA → API → Tela do app` com a linha sendo desenhada. Quatro evidências: tempo em `mm:ss.cc`; recordes oficiais aplicáveis; aviso de dados desatualizados; nome público, sem CPF, nascimento ou foto. Não escrever "mais confiável"; não virar selo publicitário; evidência, não propaganda.

## 11. ENTRADA

Título: **Abra o evento. Encontre a prova.** Respeitar `CTA_MODE` (default `D`: **Conhecer o Vida Atleta**; sem menção a login no modo D). Estrutura pronta para trocar futuramente para lojas, teste/homologação ou web, sem reescrever o layout.

## 12. MOTION

Só as animações especificadas na direção criativa. MARCAR (friso lima), ACUMULAR (parciais), ALINHAR (fragmentos convergindo). Evitar: fade genérico em todas as seções, slide-up em tudo, texto letra por letra, ondas infinitas, partículas, scroll hijacking, contadores de marketing. CSS + IntersectionObserver; sem biblioteca se não for necessária. `prefers-reduced-motion`: todo conteúdo visível e no estado final.

## 13. RESPONSIVIDADE

Testar 360, 390, 768, 1024 e 1440 px. Mobile: texto antes da tela; hero com screenshot em corte; sem sticky; sem parallax; Ato 3 em largura total; tabela com overflow horizontal controlado; targets ≥ 48 px; menu em folha; barra de progresso de 3 px no topo.

## 14. TELAS DO APP

Prioridade: 1 Resultados da Prova · 2 Calendário · 3 Detalhe do Evento · 4 Quadro de Medalhas · 5 Boletins · 6 Calculadora · 7 Aviso de dados desatualizados. Não usar: Rankings, Pro, Assinatura, Duelo, Balizamento não confirmado, dados pessoais, nomes reais, fotos de atletas identificáveis. Preferir captura real do Flutter; se não for possível, ilustração claramente identificada.

## 15. DADOS DE DEMONSTRAÇÃO

Nunca nomes reais de atletas. Preferir os fixtures do app (`Atleta demonstração 01`, `Clube demonstração 01`…). Não associar clubes reais a resultados fictícios. Checklist por captura: sem CPF; sem nascimento; sem foto de atleta; sem nomes reais; sem patrocinadores visíveis; sem "AO VIVO"; sem datas que pareçam resultados reais; legenda de dados de demonstração.

## 16. PERFORMANCE

HTML semântico; AVIF/WebP; srcset; width/height; lazy loading; hero preload; SVG leve; nada de biblioteca pesada sem necessidade. **LCP ≤ 2,5 s.** Evitar JS para o que CSS resolve.

## 17. ACESSIBILIDADE

Contraste AA; foco visível; teclado; alt descritivo; ordem semântica; landmarks; headings; tabelas semânticas quando houver dados HTML; reduced motion. A informação essencial de cada screenshot também em texto quando necessário.

## 18. SEO

Title: `Vida Atleta: calendário, resultados e parciais da natação`. Description: `Consulte eventos, provas, resultados e parciais oficiais da natação brasileira.` Favicon, OG image, canonical, viewport, metadata básica.

## 19. ESTRATÉGIA

Ciclos: **1** estrutura, header, hero, problema, A prova (parar, build, verificar, corrigir) · **2** Tempo por dentro, Depois da prova, Fonte dos dados, Entrada, Footer (build, verificar, corrigir) · **3** Motion · **4** Responsive · **5** Performance · **6** Acessibilidade + SEO · **7** QA visual completo.

## 20. REGRA CRÍTICA

Não aceitar a primeira versão como final. Revisão crítica: aparência de template; excesso de cards; excesso de azul; lima demais; composição previsível; screenshots pequenos; hero sem impacto; texto genérico; espaçamento excessivo; densidade insuficiente; animação gratuita; inconsistência com o app; qualquer elemento que exista só porque "landings normalmente têm isso". Corrigir o que achar.

## 21. ANTI-IA

Teste: removido o logo, ainda parece uma página de natação de competição? Deve-se reconhecer **raia + resultado + tempo + prova + parciais + dado oficial**, e não "landing bonita de um SaaS azul".

## 22. ENTREGA

1 Listar arquivos criados/alterados · 2 como executar · 3 `CTA_MODE` atual · 4 `TEMPO_MODE` atual · 5 assets faltantes · 6 decisões pendentes · 7 rodar build · 8 lint/testes · 9 inspeção em 360/768/1440 · 10 corrigir. Não dizer "pronto" só porque compila: o critério é visual + narrativa + fidelidade ao produto + responsive + acessibilidade + performance, e só concluir a primeira implementação quando estiver em condição de passar por uma revisão adversarial do Codex.
