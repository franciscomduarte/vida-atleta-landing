# DIREÇÃO CRIATIVA — LANDING DO VIDA ATLETA

Fase 2. Nenhum código de landing foi escrito. Fonte de verdade: app Flutter (`C:\projetos\vida-atleta-natacao-app`) > `product-dna.md` / `facts.md` > `referencias.md`.
Rótulos herdados: **[FATO]** · **[INFERÊNCIA]** · **[OPORTUNIDADE]** · **[NÃO CONFIRMADO]**. Novo: **[DECISÃO PENDENTE]** (não escolhi em silêncio; há opções e um default provisório).
**ESCOPO E STATUS DESTA FASE (declaração formal).** Nos defaults atuais, esta direção atende **apenas ao objetivo de apresentação/pré-lançamento**; **não atende ao objetivo de uso do app** até a DP3 ser resolvida (`stores` ou `web`). O que se constrói agora é um **protótipo interno, explicitamente não publicável (`INTERNAL_PREVIEW=true`)**, com placeholders marcados, porque as capturas reais com dados de demonstração dependem do ticket `TICKET-captura.md` (harness de captura não autorizado), de licença de fotos, de LEGAL-001 e da DP3. **Decisões do responsável (2026-09-25):** (1) **objetivo da primeira publicação = apresentação/pré-lançamento** (`CTA_MODE=presentation`; o critério do projeto deixa de cobrar utilização nesta fase e a **DP3 fica resolvida para esta fase**); (2) **harness de captura autorizado** no repositório do app (somente um arquivo de teste, sem tocar no código do app); (3) **H2 do Problema mantido** como o responsável escreveu; (4) implementação começa como protótipo interno. **v1 fechado:** `CTA_MODE=presentation`, `TEMPO_MODE=ilustracao`, `HERO_GRAPHIC=svg`, `CBDA_LOCKUP=false`, motion M1/M4/M7/M9 (M3, M5 e a barra mobile estáticos até `MOTION_QA_PASSED`), **sem `MOTION_PLUS`**; o restante é backlog técnico com critério de ativação. Publicar exige resolver esses bloqueios (§14).

O nome aparece como `{NOME}` nos textos. Default provisório: **Vida Atleta** (é o nome na interface do app **[FATO]**).

---

## 1. CONCEITO CRIATIVO

### 1.1 A história

O visitante precisa viver uma coisa só: **chegar do evento ao tempo de uma prova e, quando houver parciais publicadas, entender como esse tempo foi composto.** Tudo na página serve a esses dois movimentos. Não existe "jornada de evolução do atleta" (o app não a tem **[FATO]**).

### 1.2 Avaliação da narrativa proposta

Proposta do relatório: `problema → evento → prova → tempo por dentro → fonte dos dados → entrada`.

**Veredito: mantida na espinha, com três alterações.**

| Alteração | Por quê |
|---|---|
| "Evento" e "prova" viram **um único ato** (o fluxo Calendário → Evento → Prova → Resultado), não duas seções | Separados, parecem dois cards de funcionalidade. Juntos, mostram a redução de fricção, que é a proposta de valor. |
| Entra um bloco curto **"Depois da prova"** (medalhas, boletins, calculadora) entre "tempo por dentro" e "fonte dos dados" | Sem ele, o app parece ter só uma tela. Ele mostra amplitude sem virar grade de features. |
| "Fonte dos dados" **não é selo**: é um diagrama do caminho do dado (SGE → app) mais regras verificáveis | Selo é publicidade; caminho é evidência. |

Rejeitado: seção "Para quem" com personas. O app não tem fluxo de família, treinador ou vínculo **[FATO]**, e a prioridade entre públicos está aberta (PROD-001). O público entra **em cenários** na seção do problema (quem procura o quê), sem nomear personas.
Rejeitado: seção de números/prova social (bloqueados por PROD-010/TEC-014, e inventá-los é proibido).

### 1.3 Ideia central

**"A página é uma tabela de resultados."** Conceito **interno**: "súmula" não faz parte do vocabulário confirmado do app, então **não vai à copy pública** sem validação da CBDA/produto (na página usamos *resultados, prova, raia, tempo, parciais, boletins*). **[INFERÊNCIA]** A tabela de resultados é o objeto mais reconhecível da natação (julgamento editorial, sem pesquisa de usuário): posição, raia, atleta/clube, tempo em mm:ss.cc **[FATO — colunas do app]**. A landing herda a gramática dela:

- **Raia como estrutura.** Seções separadas por um **cordão de raia** (fio fino com segmentos alternados royal/lima/branco), não por sombras ou ondas.
- **Tempo como tipografia.** Números tabulares grandes são o "ornamento" da página, no lugar de ícones.
- **Chegada como pontuação.** O **friso lima** (assinatura do app) marca cada "chegada": fim de um raciocínio, ponto de ação.
- **Fricção é desbotada; app é saturado.** O mundo de "páginas, filtros e documentos" aparece em cinza-papel; quando o fluxo do app entra, a cor entra. É a única metáfora de cor da página, e é funcional.

Nome de trabalho do conceito (interno, não vai à página): **"Do evento ao centésimo."**

---

## 2. POSICIONAMENTO

**É:** consulta de informação da natação com dados da CBDA, pensada para o contexto de competição, para chegar ao evento, à prova e ao resultado com poucos passos **[FATO — `docs/produto/visao.md`]**. *("Rápida" seria [INFERÊNCIA]; não é usada como afirmação.)*
**Equação:** DADO OFICIAL + CAMINHO DIRETO ATÉ A PROVA + DETALHE DA PROVA + PARCIAIS QUANDO PUBLICADAS + GRÁFICO/TABELA QUANDO DISPONÍVEIS. *("Velocidade de consulta", do pedido, é **[INFERÊNCIA]**: não há métrica medida. Por isso a página fala em caminho direto e nunca em segundos ou toques.)*
**Não é:** app de treino, evolução, rede social, coach de IA, ranking, gamificação, SaaS de treinador. Nada disso aparece, nem como "em breve".

Frase-guia (interna): *"Achar o evento, abrir a prova, ver o tempo, entender o tempo."*

Fato e pendência separados: o app se descreve como **"Aplicativo oficial Vida Atleta"** **[FATO — pubspec]**, tem "VIDA ATLETA / CBDA" no cabeçalho, bundle `com.bigmidia.vidaatleta.cbda` e dados do SGE da CBDA **[FATO]**. **Não** está formalizada a frase exata "produto oficial da CBDA" **[INFERÊNCIA forte]**; o que fica pendente é o **uso do escudo/lockup CBDA** e a **redação jurídica** no rodapé.

Ressalvas de posicionamento **[DECISÃO PENDENTE]**:
- **Nome** (`Vida Atleta` / `VidaAtleta` / `Vida de Atleta` / `Vida Atleta CBDA`). Opções: (A) **Vida Atleta**: como o app se chama **[FATO]**. Recomendada. (B) **Vida Atleta CBDA**: como o Stitch e o cabeçalho ("VIDA ATLETA / CBDA") o apresentam; exige aprovação da CBDA para a marca. (C) `VidaAtleta` (grafia do pedido): não aparece no app. (D) `Vida de Atleta`: só no protótipo descartado.
- **Natureza** (institucional CBDA × produto). Opções: (A) *aplicativo Vida Atleta com dados da CBDA*: CBDA como **fonte**, sem escudo; (B) *aplicativo oficial da CBDA*: com escudo e redação de oficialidade institucional no eyebrow e no rodapé. O texto "Produto oficial da CBDA" só existe no protótipo descartado. Enquanto pendente, o wireframe usa (A), a mais conservadora. Ponto de troca: flag `CBDA_LOCKUP`.

---

## 3. DIREÇÃO DE ARTE

### 3.1 Anti-template

**10 coisas que uma IA faria nesta landing, e o que o Vida Atleta faz.**

| # | Reflexo de IA | Vida Atleta |
|---|---|---|
| 1 | Hero centralizado, headline enorme ("Transforme seus treinos"), botão dual | Hero **assimétrico**, alinhado à esquerda; o celular sangra para fora do quadro; a headline descreve o fluxo real |
| 2 | Gradiente azul→roxo | **Sem roxo.** Royal, navy e lima do app. Gradiente só onde o app usa (cabeçalho royal→deepBlue) |
| 3 | Glassmorphism, cards translúcidos flutuando | **Nenhum vidro.** Superfícies sólidas como no app (cards brancos, tabela navy) |
| 4 | Grade de 6 cards de funcionalidade com ícone | **Nenhuma grade.** Funcionalidades entram como cenas (fluxo, construção do tempo) e três "raias" de largura desigual |
| 5 | Ícones gigantes em círculos coloridos | Quase sem ícones. Onde há, são os Material Icons outlined que o app usa **[FATO — `brand_bottom_navigation.dart`]** |
| 6 | Tudo centralizado e simétrico | Eixo esquerdo forte; tabelas e telas quebram a simetria; cordão de raia horizontal como divisor |
| 7 | Foto stock de nadador sorrindo / subaquática genérica | Fotografia **vertical de cima** (raias), sem rosto, em duotone; no máximo 3 usos |
| 8 | Depoimentos, "4,9★", "+10 mil atletas" | **Nada disso.** A prova é o próprio fluxo do dado |
| 9 | Badges App Store/Google Play + "Baixe agora" | Bloco de entrada **[DECISÃO PENDENTE]**; nenhum badge até o canal existir |
| 10 | Números animados subindo ("10k+") | O único contador é o **tempo de uma prova sendo construído por parciais** (função real) |

Teste final da skill **[INFERÊNCIA, julgamento de direção de arte]**: **removidos logo e nome, a página ainda pareceria natação de competição?** Julgamos que sim: tabela de resultado com raia e pódio, cordão de raia, friso lima, tempo mm:ss.cc. Não é intercambiável com outro SaaS.

### 3.2 Personalidade visual (5 atributos)

**Preciso** (tabular, alinhado) · **oficial** (tabela de resultados, sem enfeite) · **atlético** (contraste forte, lima como "toque") · **denso com respiro** (dados reais, não vazio) · **aquático sem literalidade** (raia, água como textura, nunca ondas desenhadas).

### 3.3 Sistema visual (**cores, fontes, raios-base e linguagem de botões vêm do app** **[FATO — `design-system/tokens/vida-atleta.tokens.json`, registrados em `facts.md`]**; os únicos tokens novos são os "editoriais" listados abaixo)

**Cor**
| Papel | Token | Uso |
|---|---|---|
| Campo "app/prova" | navy `#18386c`, deepBlue `#0d3e90` | Seções onde o app está em ação (fluxo, tempo por dentro) |
| Campo "papel/fricção" | canvas `#f5f7fa`, borda `#e5e7eb`, gray `#636363` | Seção do problema e a base clara |
| Ação/ênfase | royal `#034fcf` | Links, botões secundários, títulos em fundo claro |
| **Lima** | `#caf51a` | **3 papéis visuais principais:** (1) friso; (2) botão primário; (3) o tempo/valor destacado em fundo escuro. **Nunca** como fundo de seção; **REGRA RÍGIDA DE PRODUÇÃO: componentes onde o lima pode aparecer (lista fechada e completa, auditável por revisão de CSS):** `.friso`, `.button-primary`, `.time-highlight` (valor/tempo em fundo escuro), `.lane-rope` (segmento lima do cordão), `.progress-bar` (barra de 3 px do mobile), `.section-marker` (marcador ativo do cordão, `MOTION_PLUS`) e `.focus-visible-dark` (anel de foco sobre fundo escuro); **qualquer outro uso reprova na revisão**. **HEURÍSTICAS VISUAIS (revisadas no QA visual; não bloqueiam o build):** texto lima só até 24 px (nunca em H1/H2 grande: é o padrão do DuoSwim); fundo nunca preto (só navy/royal); lima ≤ 5% da área visível |
| Estados | green `#009c49` (positivo/sucesso), amber `#f9af0d` (ouro), silver `#c0c0c0`, bronze `#cd7f32`, red `#f03636` (alerta) | Somente nas telas reais e em legendas que as expliquem. **Nenhum rótulo é atribuído a uma cor por esta direção**; os rótulos de situação de EVENTO confirmados são *Acontecendo agora, Próximo, Encerrado* |
| Nível escuro 3 | **Sem token novo:** navy `#18386c` com overlay preto a 35% (derivado) | Rodapé, seção de fonte dos dados e Ato 3. O tema escuro piloto do app (`#101b30`) **não** é usado: é autoria interna, não extraído do Figma |

Contraste (a conferir na implementação): lima sobre navy ok; **lima sobre branco não** (não usar texto lima em fundo claro); royal sobre canvas ok.

**Tipografia** (Rubik + Lato, licença OFL **[FATO]**)
- Display: Rubik **900** (H1) e **700** (H2), caixa de frase, tracking −1%. *(Pesos confirmados no app: 400/500/600/700/900; 800 não é usado.)* H1 de 56–72 px (desktop), 36–40 px (mobile).
- Rótulo/eyebrow: Rubik 600, **CAIXA ALTA**, tracking +12%, 12 px (como o app).
- Corpo: Lato 400, 17–18 px / 1,55. Botões: Lato 700, caixa alta, tracking +8%.
- **Tempos:** Rubik 700 com `font-variant-numeric: tabular-nums`. **Verificar** se Rubik tem `tnum`; se não, alinhar dígitos por container de largura fixa. Formato sempre `mm:ss.cc`.
- **Sem itálico condensado em caixa alta nos títulos** (padrão de Commit e Swimer); o itálico existe só no wordmark do app.
- Escala: 12 · 14 · 17 · 24 · 36 · 56 · 72 (base do app 10–24 ampliada para editorial).

**Tokens editoriais da landing** *(decisão nova, **não** são tokens do app; tudo o que não estiver aqui vem do app). Os valores editoriais deste documento (lima ≤ 5%, texto lima ≤ 24 px, cordão 5:5:1, overlays 70%/35%, sombras) são **heurísticas visuais** (status único: revisadas no QA visual, não bloqueiam o build); o aceite é por: contraste AA, hierarquia preservada, telas legíveis e lima sem competir com o conteúdo.*

| Token | Valor | Origem |
|---|---|---|
| `--container-max` | 1240 px | nova |
| `--gutter` | 24 px (mobile 16 px) | nova |
| `--section-y` | 128 px (mobile 80 px) | nova |
| `--space-unit` | 8 px (múltiplos) | nova |
| `--shadow-button` | `0 4px 4px rgba(3,79,207,.10)` | **app** |
| `--shadow-phone` | `0 24px 48px rgba(24,56,108,.28)` | nova (derivada do navy) |
| `--radius-card` | 12 px | app (raio 12) |
| `--radius-phone` | 20 px | app (raio 20) |
| `--radius-pill` | 100 px | app |
| `--photo-overlay` | navy `#18386c` a 70% (texto) / 35% (bordas) | nova (derivada) |
| `--hero-lanes-opacity` | 22% | nova |
| `--rope` | 8 px de altura, segmentos 24 px, proporção royal:branco:lima = 5:5:1 | nova |
| `--friso` | 4 px, cor lima | **app** (friso) com espessura nova |

**Grid e espaçamento:** 12 colunas, máx. 1240 px, gutters 24 px (mobile 16). Ritmo vertical em múltiplos de 8; seções 120–160 px (mobile 72–96). Raios do app: 8/12/16/20/pílula; **cards da página usam 12**, molduras de celular usam raio 20 (o maior do app) para não introduzir valor novo.

**Sombras:** apenas a do app (`0 4px 4px rgba(3,79,207,.10)`) em botões; molduras de celular com **sombra de landing** (não é token do app): difusa, derivada do navy, uma só profundidade, a validar contra o app.

**Cordão de raia (divisor)** *[PRECISA PRODUZIR]*: SVG de 8 px de altura; segmentos de 24 px alternando royal, branco e lima em proporção 5:5:1. **Variação por fundo:** sobre navy, segmentos royal/branco/lima; sobre **canvas claro**, o segmento branco é trocado por `canvas` com contorno `borderSubtle` de 1 px e o royal ganha 100% de opacidade (contraste do lima verificado em 360, 768 e 1440 px). **Matriz de uso do cordão (fechada; vale para 360, 768 e 1440 px):**

| Transição | Uso |
|---|---|
| Header | **friso simples** (nunca cordão) |
| Hero → Problema | **cordão** (navy → canvas) |
| Problema → A prova | **cordão** (canvas → navy) |
| A prova → Parciais (Versão B) | **friso simples** (navy → canvas) |
| A prova → Tempo por dentro (Versão A) | **nenhum** (ambos navy) |
| Parciais/Tempo → Depois da prova | **cordão** |
| Depois da prova → Fonte dos dados | **cordão** (canvas → navy) |
| Fonte dos dados → Apresentação/Entrada | **nenhum** (ambos navy; usa o friso lima do bloco) |

**Bloqueante (reprova no QA):** contraste AA; lima nunca em H1/H2 grande nem como fundo de seção; cordão apenas como divisor entre seções. **Heurísticas (avaliadas no QA visual, não reprovam sozinhas):** lima ≤ 5% da área, proporção 5:5:1, distância de 48 px, ≤ 1 cordão por viewport.

**Regra determinística do cordão:** só nas **transições entre blocos navy e canvas**; **oculto** (substituído por friso simples) se a distância até o próximo cordão for menor que a altura do viewport; o header usa **friso simples** no v1 e o progresso do cordão é `MOTION_PLUS`. **Demais regras:** opacidade 100% sobre navy e 100% sobre canvas (com o contorno `borderSubtle`); **distância mínima de 48 px** de qualquer tela ou moldura de celular; **proibido** como padrão decorativo repetido ou como textura de fundo. **Primeiro entregável do frontend:** um SVG de referência com exemplos sobre navy e sobre canvas, aprovado visualmente antes do uso.

**Precedência:** se qualquer regra do cordão conflitar com legibilidade ou espaçamento (seções curtas, mobile, Ato 3 em versão B), **legibilidade e espaçamento vencem** e o cordão é **substituído por um friso simples**. Exemplos de uso são validados em 360, 768 e 1440 px no SVG de referência **antes** de exigir o cordão em todas as transições.

**Uso restrito:** apenas como **divisor entre seções** e, opcionalmente, como progresso sob o header **somente com `MOTION_PLUS`**. **Proibido** dentro de cards, telas, molduras de celular ou mockups. Deve ser comparado com o app real em revisão visual (é elemento editorial, não componente do app). Substitui `<hr>` (ver Motion).

**Friso lima:** 4 px, largura da coluna de texto, sob cada H2 e sob o header ao rolar; espelha o friso do cabeçalho e da barra inferior do app.

**Botões:** primário = lima com texto deepBlue, raio pílula, 56 px de altura, seta →; secundário = contorno branco/royal. Foco visível: 3 px lima (fundo escuro) ou royal (fundo claro) com offset 2 px.

**`SCREEN_MODE`:** `captura` (app real com dados de demonstração) → legenda `Telas do app com dados de demonstração`, **único modo publicável**; `placeholder` (re-render do Stitch) → marca d'água diagonal `PLACEHOLDER — NÃO PUBLICAR`, **somente revisão interna**. **Regra fechada por seção (não há fallback de publicação para telas):** a **captura real é BLOQUEANTE** para *Hero (A1)*, *Ato 2 (A2, A3, A4)* e *Ato 5 (A6, A8)*. São **opcionais**: *A7 (Boletins)*: se a fixture aprovada não permitir captura segura, a raia 2 do Ato 5 vira **bloco de texto** (título `Boletins` + `Boletins oficiais, com busca e filtros.`), com a mesma largura e posição da raia, sem imagem; o HTML equivalente é o próprio texto; *A9 (aviso de dado desatualizado)*: se faltar, a seção Fonte dos dados publica só com diagrama e as 4 regras, sem imagem; *A5 (Ato 3)*: se faltar, vale a Versão B (§5.6); *P1 (foto)*: se faltar, vale o hero gráfico (§6.1). A legenda aparece junto ao hero e em cada bloco com tela.

**Molduras de tela:** celular minimalista (borda navy 10 px, sem notch/marca), proporção das capturas (780 × altura). Sem reflexo, sem 3D.

**Densidade:** alta nas telas e tabelas (é o produto), generosa em torno. **A página não deve ser "limpa demais"**: o diferencial visual é a densidade técnica.

### 3.4 Evolução editorial do app, e não substituição

O app é institucional-esportivo, em caixa alta e com friso. A landing **amplia a escala** (tipos de 56–72 px), **quebra a simetria** e **usa a fotografia como textura**, sem trocar o vocabulário: mesmas cores, mesmas fontes, mesmo friso, mesma linguagem de estado de evento ("ACONTECENDO AGORA", "PRÓXIMO", "ENCERRADO").

---

## 4. DIREÇÃO FOTOGRÁFICA

**Regra:** fotografia só onde reforça "raia, prova, tempo". Máximo **3 aplicações** e nenhuma delas com **rosto identificável**.

Avaliação de cada opção:

| Tipo | Veredito | Motivo |
|---|---|---|
| **Vista de cima, raias, SEM pessoas** | **ADOTAR como melhoria, só depois da licença validada** (default: raias em SVG, §6.1) | Mostra a raia como estrutura e casa com o cordão, sem expor ninguém |
| **Vista de cima com nadadores** (como `event-hero.png` do app, nadadores pequenos) | **SÓ COM COMPROVAÇÃO:** exige comprovação de que todos são adultos **e** autorização de uso de imagem; "sem rosto identificável" **não basta**, porque a base é majoritariamente de menores | Sem essa comprovação, usar raias sem pessoas ou o `HERO_GRAPHIC` |
| Detalhe de água / cordão de raia em macro | **ADOTAR (textura)** | Fundo de seção navy em duotone, sem competir com telas |
| Placar eletrônico / placa de toque / cronômetro | **ADOTAR se houver licença** | É a fotografia do "tempo oficial"; melhor símbolo do produto |
| Atleta em competição, close (como `login-swimmer.png`) | **REJEITAR** | Rosto e nome legíveis na touca (atleta real); marca de fabricante; risco de direito de imagem |
| Pódio com medalhistas (como `event-card-1.png`) | **REJEITAR** | Pessoas identificáveis e marcas de terceiros (FINA/World Aquatics) visíveis |
| Largada/chegada com atleta em destaque | **REJEITAR** por padrão | Identificação; só se for silhueta/contra-luz sem identificação |
| Subaquática genérica ("nadador sob a água") | **REJEITAR** | Clichê de stock; a referência swimer.app já faz isso |
| Piscina vazia | **USO LIMITADO** | Só no bloco do calendário/evento (o app já usa em cards de evento) |
| Ambiente de competição com público | **REJEITAR** | Rostos, marcas de patrocinadores |

**Tratamento:** duotone navy `#18386c` → royal `#034fcf`, contraste alto, grão zero; máscara de gradiente para navy nas bordas; opacidade 100% só na foto principal (hero), 12–20% como textura. **Proporção:** 16:9 (hero, faixa), 3:2 (textura). **Relação com a UI:** a foto fica **atrás e abaixo** do celular; nunca cobre a tela.
Origem: **[PRECISA VALIDAR DIREITO DE USO]** (ver §10). Se não houver imagem licenciada, o plano B é **gráfico**: as raias desenhadas em SVG (linhas + cordão), sem foto.

---

## 5. ARQUITETURA UX

### 5.1 Sequência de telas: análise (o pedido dizia "não é decisão definitiva")

| Tela | Papel proposto | Decisão | Justificativa |
|---|---|---|---|
| **Início** | Hero | **Rebaixada para o Ato 2 (passo 1)** | É a "home" de qualquer app: foto + cards + notícias. Além disso, o chip "AO VIVO" sugere tempo real, o que não é comprovado. Use "ACONTECENDO AGORA" (vocabulário do app) |
| **Resultados da Prova** | Demonstração | **Promovida a Hero** | Mostra num quadro só o que o produto é: prova, raia, pódio, tempo mm:ss.cc. **[INFERÊNCIA]** Tabela com raia, pódio e tempo é o tipo de tela que menos se parece com apps genéricos |
| Calendário → Detalhe do Evento → Resultados | Storytelling | **Mantida** (Ato 2, celular fixo com 3 passos) | É o fluxo real **[FATO]** |
| Gráfico de parciais / simulação | (ausente no Stitch) | **Protagonista do Ato 3**, mas **[PRECISA CAPTURAR]** | É o diferencial. Sem captura real, a seção não pode existir como "tela real" (regra do projeto) |
| Quadro de Medalhas | Dados | Mantida (Ato 4) | Leitura instantânea, visual forte |
| Calculadora | Ferramenta | Mantida, **estática** (Ato 4) | Interatividade real exigiria os tempos-base da API. **[NÃO CONFIRMADO]**; não inventar tabela |
| Boletins | (não previsto) | **Adicionada** (Ato 4 e 5) | Prova da fonte: documentos publicados |
| Rankings, Módulo Pro, Duelo, Perfil | — | **Fora** | Bloqueados/não confirmados |

### 5.2 Estrutura da página (7 blocos, todos com função narrativa)

**Cortadas por não terem função:** logos de parceiros, depoimentos, planos, FAQ, blog, "para quem", "diferenciais em grade", newsletter.

| Nº | Nome | Objetivo | Mensagem | Visual / Screenshot | Interação | CTA |
|---|---|---|---|---|---|---|
| 0 | **Header** | Orientar e ancorar | — | Lockup {NOME}; links de âncora conforme `navItems` (ver §5.6): **A prova · Fonte dos dados** e, **somente em `TEMPO_MODE=captura`, Tempo por dentro**; botão de entrada | Compacta ao rolar, friso lima | Entrada [DP] |
| 1 | **Hero** | Dizer o que é e para que serve em 5 s | Do evento ao tempo oficial da prova | Foto de raias (duotone) + celular com **Resultados da Prova** (dados de demonstração) sangrando à direita; trilha `Evento › Prova › Raia › Tempo` | Linhas da tabela "chegam" em ordem | Primário [DP] + secundário "Ver como funciona" |
| 2 | **Problema** | Tornar concreto o atrito | A informação existe, mas está espalhada | Cinza-papel: 4 fragmentos genéricos (página, filtro, documento, tabela) que **convergem** num só fluxo e ganham cor | Convergência ao rolar | — |
| 3 | **A prova** (Ato 2) | Mostrar o caminho evento → resultado | O caminho fica direto | Celular fixo (sticky) alternando **Calendário → Detalhe do Evento → Resultados**; coluna de texto com 3 passos | Troca de tela por passo; trilha destaca o passo | — |
| 4 | **Versão A (`TEMPO_MODE=captura`): O tempo por dentro** · **Versão B (`ilustracao`, DEFAULT): "Parciais, quando publicadas"**, nota curta, fundo claro, sem item no header (ver §5.6 e o wireframe da §6.3) | Provar o diferencial | Um tempo é feito de parciais | Captura real do gráfico de parciais + tabela; faixa horizontal de segmentos que se acumulam até o tempo final | Construção do tempo | Link "Ver a prova em simulação" (só se houver captura) |
| 5 | **Depois da prova** | Amplitude sem grade (**apenas 3 itens**; o restante vai a uma nota funcional acima do rodapé) | Além do resultado, o app reúne quadro de medalhas, boletins e calculadora (áreas distintas do app, sem fluxo único implícito) | Três "raias" de larguras diferentes: Quadro de Medalhas · Boletins · Calculadora (recortes de tela) | Recortes deslizam levemente com o scroll (desktop) | — |
| 6 | **Fonte dos dados** | Fundamentar a confiança com evidência | O dado vem do SGE da CBDA | Diagrama `SGE da CBDA → API consumida pelo app → app {NOME}` + 4 regras verificáveis + captura do aviso "Dados desatualizados" (real) | Fluxo desenha da esquerda p/ direita | — |
| 7 | **Apresentação (`presentation`, default) ou Entrada (`stores`/`web`) + Rodapé** | Fechar sem promessa falsa | Abra o evento, ache a prova | Bloco navy com friso lima; nota de login **só em `stores` e `web`** (ver §5.7) | — | `presentation`: `Conhecer o {NOME}` → `#a-prova`; `stores`/`web`: por modo |

### 5.3 Problema → solução: a seção 2 em detalhe

Não é um parágrafo. É uma cena:
1. Fundo canvas; **quatro fragmentos cinza** com rótulos neutros: `Página do evento`, `Filtros`, `Boletim`, `Tabela de resultados`. Eles ficam levemente desalinhados (rotação ≤ 2°). *Rótulos genéricos; nada copia o site da CBDA nem cita nomes de terceiros.*
2. Ao rolar, os fragmentos **se alinham numa raia horizontal** e o último vira a moldura do celular; o celular mostra o fluxo e **ganha saturação**.
3. Legenda: `Antes: procurar em vários lugares.` / `Agora: evento → prova → resultado.`

Problema usado: *informação distribuída entre páginas, filtros e documentos difíceis de consultar no celular* **[FATO — `docs/produto/visao.md`, registrado em `facts.md`]**; a ênfase em "dia de competição" vem do mesmo documento ("chegar ao evento, à prova e ao resultado com poucos passos") **[FATO]**, mas o quanto isso é pior hoje é **[INFERÊNCIA]**.
**Não** afirmar "X toques" nem "Y segundos" (não medido **[NÃO CONFIRMADO]**).

### 5.4 O centro emocional: "A prova"

Sim, o centro é `EVENTO → PROVA → RAIA → TEMPO → PARCIAIS → RECORDES`, **dividido em dois atos com dois sentimentos**:
- **Ato 2 (chegar):** "eu sigo um caminho único até o resultado, sem alternar entre páginas, filtros e documentos" → Calendário → Evento → Prova → Resultado.
- **Ato 3 (entender):** "eu entendo como o tempo foi feito, quando há parciais publicadas" → Parciais → gráfico/tabela → recordes. *Opcionalmente*, e **somente** com captura real aprovada, a simulação visual de uma **prova individual concluída**. Em `TEMPO_MODE=ilustracao` (default) **não há menção a simulação**.

**Decisão:** A5 permanece opcional; em `ilustracao` o bloco **não tem status de ato narrativo independente** (é a nota subordinada "Parciais, quando publicadas", na mesma sequência de rolagem do Ato 2). **Só na Versão A** (`TEMPO_MODE=captura`) o Ato 3 é o clímax da página; **na Versão B o clímax é o Ato 2**: é onde o produto se distingue de uma simples tabela de resultados. Em **`ilustracao`**, ele é **rebaixado** (§5.6): a prova principal do produto passa a ser o hero e o Ato 2, com telas reais.

### 5.5 Fonte dos dados (seção 6). Nome de componente e classe CSS: `fonte-dos-dados`, **nunca** `oficial*`

Em vez de selo: **o caminho do dado.** `SGE da CBDA` → `API consumida pelo app` → `app {NOME}`. Sob o diagrama, quatro regras que o produto cumpre **[FATO]**, cada uma com uma linha:
1. Tempo no formato oficial (`mm:ss.cc`).
2. Recordes oficiais aplicáveis aparecem junto do resultado.
3. Se o calendário está desatualizado, o app mostra "Dados desatualizados · data"; se a carga falha, mostra uma mensagem de erro e permite tentar de novo. **[FATO — `landing_page.dart`: `_StaleNotice`, `failure.userMessage`]**
4. Atletas aparecem com nome público e clube, sem CPF, nascimento ou foto.

A regra 3 pode ser **ilustrada com a captura real do aviso "Dados desatualizados"** (estado real do app). O "Atualizado há 5 minutos" do Stitch **não** é usado (não confirmado). Sem "app mais confiável".

### 5.6 Ato 3: especificação condicional (`TEMPO_MODE`)

| | `TEMPO_MODE=captura` (Versão A) | `TEMPO_MODE=ilustracao` (Versão B, **default até chegar a captura**) |
|---|---|---|
| Visual | Captura real do gráfico de ritmo de parciais e da tabela, em moldura de celular | **Diagrama abstrato** "construção do tempo" (faixa de segmentos + soma), **sem moldura de celular, sem UI do app** |
| Rótulo obrigatório | `Dados de demonstração` | **`Ilustração do funcionamento das parciais. Não é uma captura do app. Não é cronometragem ao vivo.`** |
| Link de simulação | Só se houver captura da simulação | **Removido** |
| Texto | Como em §8.4 | Como em §8.4, sem a frase "veja no gráfico"; troca por "As parciais oficiais de cada prova, quando publicadas, aparecem no app em gráfico de ritmo e em tabela." |
| Animação M5 | Revela o gráfico real por `clip-path` | Constrói a faixa de segmentos (SVG) com rótulos estáticos, **sem contador** |
| Estado de publicação | Pode publicar | Pode publicar **apenas** com o rótulo; a seção não pode ser chamada de "demonstração do app" |
| **Peso visual** | Palco navy de altura cheia, animação M5 completa, item "Tempo por dentro" no header | **Nota explicativa curta:** altura ≤ 40% da versão A, fundo claro (canvas), sem sticky, **sem item no header** (o link some), sem link de simulação, sem chamada "demonstração"; o protagonismo fica com hero e Ato 2 |
| **Regra de publicação** | Publicável | Publicável **somente como nota**; se o time quiser o Ato 3 como protagonista, a **captura real é bloqueante** |
| Legenda da faixa de segmentos (M5) | `Dados de demonstração` | **Persistente, junto à faixa:** `Ilustração do funcionamento das parciais. Não é uma captura do app. Não é cronometragem ao vivo.` |

### 5.7 Bloco de entrada por `CTA_MODE` (layout de cada cenário; enum de produção: `presentation`, `stores`, `web`)

| Modo | Header (desktop / mobile) | Bloco 7 | Microcopy | Formulário | Observação |
|---|---|---|---|---|---|
| **D = `CTA_MODE=presentation`** | Botão pílula lima `Conhecer o {NOME}` (**rola para `A prova`**, âncora `#a-prova`, não para o hero) / no mobile, o menu usa **exclusivamente** a tabela "Menu mobile por `CTA_MODE`" abaixo (não há link "Como funciona" fora dos `navItems`) | H2 + botão lima `Conhecer o {NOME}` (também para `#a-prova`, o começo do fluxo demonstrado) e, ao lado, link de texto `Fonte dos dados` (âncora `#fonte-dos-dados`) | **Omitida**: sem canal confirmado, não se descreve o login | Não | Nenhuma promessa de acesso. **Regra única:** o modo `presentation` publica sem canal de uso: CTA apenas de âncora (`Conhecer o {NOME}`, `Ver como funciona`) e rodapé `Página de apresentação`. Qualquer publicação **com objetivo de uso** exige DP3 resolvida em A ou C (B não implementável) |
| **A = `CTA_MODE=stores`** | Botão lima `Baixar` que abre a folha com duas opções / mesmo botão fixo no rodapé mobile (56 px) | Dois botões lado a lado (desktop, 280 px cada) ou empilhados (mobile, largura total): `Baixar para Android` · `Baixar para iPhone`; **sem badge oficial** até a marca ser aprovada | `Login com Google, Apple (no iPhone) ou e-mail.` | Não | Só após lojas confirmadas |
| **C = `CTA_MODE=web`** | Botão lima `Abrir o {NOME}` (nova aba) / idem | Um botão grande `Abrir o {NOME}` (320 px; mobile 100%) | `Login com Google, Apple (no iPhone) ou e-mail.` | Não | Só se houver URL pública do app web |

**Rótulo do bloco 7 (ID, comentário, wireframe):** em `presentation` é **`apresentacao`** (âncora `#apresentacao`); **`entrada`**, "Abrir" e "Baixar" só existem em `stores` ou `web` com URL real. **Publicação com objetivo de uso não pode usar `presentation`** (critério de aceite).

**Apêndice de oportunidade (fora do enum, não construir): `waitlist`.** Botão `Quero testar` + campo de e-mail exigiriam payload, destino do dado, retenção, double opt-in, texto legal e estados de erro/sucesso, todos indefinidos; depende de decisão jurídica (LEGAL-001) e técnica. Fica registrado apenas como opção futura.

Em todos os modos: o botão do header nunca some no desktop; no mobile o header mostra apenas lockup + menu (o CTA fica na folha do menu e no bloco 7), evitando barra pesada.

**Menu mobile (folha inferior) por `CTA_MODE`** *(fonte única; substitui qualquer descrição anterior)*:

| Modo | Itens, em ordem | Destino | CTA |
|---|---|---|---|
| `presentation` (default) | `A prova` · (`Tempo por dentro`, só com `TEMPO_MODE=captura`) · `Fonte dos dados` | `#a-prova` · `#tempo-por-dentro` · `#fonte-dos-dados` | **Botão** lima `Conhecer o {NOME}` → `#a-prova` (**não** existe o link "Como funciona") |
| `stores` | Os mesmos três itens | idem | **Botão** lima `Baixar` (abre as duas opções de loja) |
| `web` | Os mesmos três itens | idem | **Botão** lima `Abrir o {NOME}` (nova aba) |

### 5.8 Responsividade (projetada separadamente)

**Desktop (≥1200):** duas colunas assimétricas (5/7), celular à direita com sangria; Ato 2 com celular sticky à direita e passos à esquerda; recortes do Ato 5 com deslocamento vertical.
**Tablet (768–1199):** celular menor (62%) alinhado à direita; passos do Ato 2 empilhados com celular sticky por trás dos textos apenas se couber; senão, empilha.
**Mobile (<768):** coluna única, texto sempre **antes** da tela; hero mostra celular em **corte** (metade superior) para preservar legibilidade; Ato 2 vira **três blocos** (texto + recorte de tela) sem sticky; Ato 3: em `TEMPO_MODE=captura`, gráfico em largura total e tabela com rolagem horizontal; em `TEMPO_MODE=ilustracao` (default), **apenas a faixa SVG rotulada**, sem tabela, sem moldura e sem sticky; Ato 5 vira lista de três linhas com miniatura; no **v1** o cordão fica só como **divisor estático**, e o mobile ganha uma **barra de progresso de 3 px no topo** como **enhancement progressivo**: estado base **estático** (uma barra parada), `animation-timeline: scroll()` onde houver suporte; **sem JS**, então navegadores sem suporte veem a barra estática (aceito explicitamente; **pedido do responsável**, Anexo A); o marcador do cordão no desktop (M8) fica em `MOTION_PLUS`; alvos de toque ≥ 48 px; menu em folha inferior com **exatamente os mesmos `navItems` do desktop** (dois ou três links conforme `TEMPO_MODE`) + o CTA.

Acessibilidade desde o design: contraste ≥ 4,5:1 no texto; foco visível; tabelas semânticas para dados reproduzidos (as telas são imagens: cada uma tem `alt` descritivo e o Ato 2/3 traz a informação também em texto); `prefers-reduced-motion`; ordem de leitura = ordem visual.

---

## 6. WIREFRAME DESKTOP (1440 px)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ HEADER  [Vida Atleta ▸ lockup]   A prova · (Tempo por dentro só na versão A) · Fonte dos dados  [CTA por CTA_MODE] │
│ ═══════════════════════ friso lima 4px (aparece ao rolar) ═══════════════════ │
├──────────────────────────────────────────────────────────────────────────────┤
│ 1 HERO   (navy + raias em SVG por padrão; foto duotone quando licenciada)     │
│                                                                              │
│  NATAÇÃO · DADOS DA CBDA          ┌─────────────┐                             │
│                                   │ [celular]   │  ◄ sangra p/ fora à direita │
│  Do evento                        │ Resultados  │                             │
│  ao centésimo.                    │ da Prova    │                             │
│  ▔▔▔▔▔▔▔▔ (friso lima)            │ POS RAIA    │                             │
│                                   │ 1  ·· mm:ss.cc│                          │
│  Calendário de eventos, provas e  │ 2  ·· mm:ss.cc│                          │
│  resultados da natação brasileira,│ 3  ·· mm:ss.cc│                          │
│  com dados da CBDA.               └─────────────┘                             │
│  [ CTA por CTA_MODE → ]  Ver como funciona ↓                                       │
│  Evento › Prova › Raia › Tempo   (trilha, 4 marcadores)                       │
│  [legenda: 'Telas do app com dados de demonstração'] │
├───────────── cordão de raia ─────────────────────────────────────────────────┤
│ 2 PROBLEMA  (canvas cinza-papel; cor desbotada)                               │
│                                                                              │
│  O resultado existe.                 ┌Página do evento┐ ┌Filtros┐              │
│  Chegar até ele é que                │  (cinza)      │ └───────┘              │
│  dá trabalho.                        └───────────────┘ ┌Boletim┐          │
│  ▔▔▔▔                                ┌Tabela┐           └───────────┘          │
│  Em dia de competição…               └──────┘   ──► convergem ──► [celular ✦]  │
├───────────── cordão de raia ─────────────────────────────────────────────────┤
│ 3 A PROVA (navy; celular STICKY à direita, 3 passos à esquerda)               │
│                                                                              │
│ ① Comece pelo calendário.        ┌──────────┐                                 │
│    texto curto                   │ celular  │   trilha: [Calendário] Evento… │
│ ② Abra o evento.                 │ (troca   │                                 │
│    texto curto                   │  de tela)│                                 │
│ ③ Escolha a prova.               │          │                                 │
│    texto curto                   └──────────┘                                 │
├───────────── friso simples (Versão B; na Versão A: nenhum, ambos navy) ─────────┤
│ 4 PARCIAIS, QUANDO PUBLICADAS  (VERSÃO B, DEFAULT: canvas claro, nota curta,   │
│   sem palco, sem moldura, sem sticky, sem item no header; a Versão A, só com  │
│   captura A5 aprovada, está na §6.2)                                          │
│  Parciais, quando publicadas.  texto curto + faixa SVG rotulada               │
│  ▔▔▔▔                          ▓▓▓▓░░░░ ▓▓▓▓▓░░░ ▓▓▓▓▓░░ (parcial 1 · 2 · 3)   │
├───────────── cordão de raia ─────────────────────────────────────────────────┤
│ 5 DEPOIS DA PROVA (canvas claro)                                              │
│                                                                              │
│  Do pódio ao boletim.                                                         │
│  ┌ MEDALHAS ───────────────┐ (raia larga)   ┌──────────┐                      │
│  │ recorte Quadro de Med.  │                │ BOLETINS │ (raia média)         │
│  └─────────────────────────┘                └──────────┘                      │
│                       ┌ CALCULADORA ┐ (raia estreita, deslocada p/ direita)    │
│                       └─────────────┘                                          │
├───────────── cordão de raia ─────────────────────────────────────────────────┤
│ 6 FONTE DOS DADOS (navy + 35% preto)                                                 │
│  O dado não nasce no app.                                                     │
│  [SGE da CBDA] ─► [API consumida pelo app] ─► [app {NOME}]      (linha se desenha)                   │
│  1 Tempo em mm:ss.cc   2 Recordes oficiais   3 Aviso de dado desatualizado  4 Nome público, sem CPF/foto │
├──────────────────────────────────────────────────────────────────────────────┤
│ 7 APRESENTAÇÃO (`presentation`, default) ou ENTRADA (`stores`/`web`) (navy, friso lima em cima) │
│  Abra o evento.                                                               │
│  Encontre a prova.        [ CTA por CTA_MODE → ]   (nota de login só em stores ou web) │
├──────────────────────────────────────────────────────────────────────────────┤
│ RODAPÉ: lockup · descrição · [links: só os que existirem] · © · créditos      │
│ Créditos de fotos (só se houver foto) · Privacidade e Termos (obrigatórios em produção) │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 6.1 Hero: dois layouts equivalentes (`HERO_PHOTO` e `HERO_GRAPHIC`)

Mesma grade, mesmo texto, mesmo celular e **mesmo contraste**; só muda a camada de fundo. Nenhum dos dois é "plano B" improvisado.

| | `HERO_PHOTO=licensed` | `HERO_GRAPHIC=svg` (**default até a licença**) |
|---|---|---|
| Fundo | Foto de raias vista de cima, duotone navy→royal, máscara de gradiente para navy à esquerda (texto) | Campo navy `#18386c` com **8 raias em SVG**: linhas horizontais de 2 px e cordão de raia (royal/branco/lima 5:5:1) a cada raia; opacidade 22% |
| Relação com a UI | Textura atrás do celular; **sem exigência de alinhamento** com a tabela da tela | Textura atrás do celular; linhas espaçadas a **56 px (1440), 48 px (768), 40 px (360)**; **sem exigência de alinhamento exato** com a tabela |
| Moldura do celular | 340 px de largura (1440), 300 px (768), 280 px com corte da metade superior (360) | idem |
| Contraste do texto | Overlay navy ≥ 70% sob o texto (AA verificado) | Fundo sólido navy (AA por construção) |
| Peso | Foto AVIF/WebP ≤ 180 KB no mobile, com `preload` | ~2 KB de SVG, sem risco de LCP |
| Parallax M10 | Sim (desktop) | Não (estático) |

### 6.2 Ato 3, Versão A (`TEMPO_MODE=captura`): protagonista

```
┌───────────────────────────────────────────────────────────────────────┐
│ 4 O TEMPO POR DENTRO  (navy + 35% preto; altura cheia; item no header) │
│  Um tempo                 ┌──────────────────────────────┐             │
│  é feito de parciais.     │ [captura real: gráfico de    │             │
│  ▔▔▔▔ friso               │  ritmo das parciais + tabela]│             │
│  Quando as parciais…      └──────────────────────────────┘             │
│  Nem toda prova tem parciais publicadas.                              │
│  Faixa de segmentos rotulados (M5) + legenda 'Dados de demonstração'  │
│  Ver a simulação desta prova individual concluída → (só com captura)  │
└───────────────────────────────────────────────────────────────────────┘
```

### 6.3 Ato 3, Versão B (`TEMPO_MODE=ilustracao`, **default**): nota

```
┌───────────────────────────────────────────────────────────────────────┐
│ 4 PARCIAIS, QUANDO PUBLICADAS (canvas claro; altura ≤ 40% da versão A; SEM item no header)│
│  Um tempo é feito de parciais.                                         │
│  ▔▔▔▔                                                                  │
│  Quando as parciais oficiais de uma prova são publicadas, o app as    │
│  mostra no gráfico de ritmo ou na tabela. Nem toda prova tem parciais. │
│  [faixa SVG de segmentos rotulados, SEM moldura de celular]            │
│  Ilustração do funcionamento das parciais. Não é uma captura do app.  │
│  Não é cronometragem ao vivo. (legenda ÚNICA, acima ou ao lado)       │
│  (sem link de simulação, sem palco navy, sem sticky, sem "demonstração")│
└───────────────────────────────────────────────────────────────────────┘
```

Na Versão B, o **clímax narrativo passa a ser o Ato 2** (o fluxo com telas reais), e a hierarquia da página é: hero → problema → **A prova (clímax)** → parciais (nota) → depois da prova → fonte dos dados → entrada.

## 7. ESTRATÉGIA MOBILE (resumo)

Ver §5.8. Pontos críticos: (1) hero com celular em corte + texto primeiro; (2) sem sticky/parallax; (3) Ato 3: em `TEMPO_MODE=captura`, gráfico em largura total e tabela com rolagem horizontal; em `TEMPO_MODE=ilustracao` (default), **somente a faixa SVG rotulada**, sem tabela, sem moldura e sem sticky (regra repetida no checklist de aceite); (4) cordão vira barra de progresso; (5) animações simplificadas a **reveal único por bloco**, exceto a "construção do tempo", que roda **uma vez** ao entrar.

---

## 8. COPY COMPLETA

**Regras:** português do Brasil; frases curtas; nenhum número inventado; nenhum "ao vivo/tempo real"; nenhuma promessa de evolução, treino, ranking, IA.
**Vocabulário permitido agora:** Evento, Calendário de eventos, Prova, Série, Pódio, Raia, Parciais, Recorde, Boletins, Quadro de medalhas, Acontecendo agora, Próximo, Encerrado, tempo oficial (mm:ss.cc), "dados da CBDA".
**Vocabulário bloqueado até DP2:** "calendário oficial", "app oficial da CBDA", "produto oficial", "oficial" como adjetivo geral do app. **Lista de permissão do adjetivo "oficial":** `tempo oficial`, `recordes oficiais`, `boletins oficiais` (descrevem dados e conteúdos que constam no app). Qualquer outro uso reprova.

### 8.1 Hero — 7 alternativas e teste de troca

Teste: *trocando "Vida Atleta" por outro app esportivo, a frase funciona?*

| # | Headline | Teste | Justificativa |
|---|---|---|---|
| H1 | **Do evento ao centésimo.** | **ESPECÍFICA** | Só faz sentido onde há evento, prova e tempo em centésimos (natação). Descreve o fluxo real. *Nota:* "centésimo" é conceito e não o slogan do protótipo; **[DP]** confirmar que a marca aceita a ideia. **Recomendada** |
| H2 | Cada prova, da raia às parciais. | **ESPECÍFICA (condicional)** | "Raia" e "parciais" existem no app **[FATO]**, mas nem toda prova tem parciais publicadas; por isso é variante e exigiria a nota "quando publicadas" no subtítulo |
| H3 | O resultado oficial da prova, no seu celular. | **REVISAR** | Serve para atletismo, ciclismo, etc. Correta, porém intercambiável |
| H4 | Calendário, prova e tempo. Tudo com a fonte da CBDA. | **ESPECÍFICA (com risco)** | Depende da decisão de natureza **[DP]**; "com a fonte" evita "oficial" cru |
| H5 | Achou o evento. Abriu a prova. Viu o tempo. | **ESPECÍFICA** | Espelha o fluxo. Ritmo curto, mas ambígua sobre "achou" (promessa de rapidez, sem número) |
| H6 | A final acabou. O tempo oficial está aqui. | **REVISAR/REJEITAR** | Sugere publicação imediata (tempo real) **[NÃO CONFIRMADO]** |
| H7 | ~~Toda a súmula, no bolso.~~ | **DESCARTADA** | Específica, mas "súmula" não é vocabulário confirmado do app; só voltaria com validação |

**Escolha de trabalho (editorial): H1**, com H2 como variante para A/B futuro.

**Decisão do responsável (Anexo A):** o H1 aprovado é **"Do evento ao centésimo."**, o que **fecha DP5**. Regra: `H1_VARIANT=editorial` (**default**, "Do evento ao centésimo.") e `H1_VARIANT=literal` ("Eventos, provas e resultados da natação brasileira.": só vocabulário confirmado; teste de troca **REVISAR**) como fallback **somente se o responsável ou a CBDA vetarem a frase**. **Regra objetiva:** a definição do responsável (Anexo A) basta para `editorial`; não há outra aprovação exigida. Se alguém vetar, muda-se a flag, sem mexer no layout. O texto muda sem afetar o layout (ambas cabem em 2 linhas).

### 8.2 Subheadline
> Calendário de eventos, programa de provas e resultados da natação brasileira, com dados da CBDA. Você abre o evento, escolhe a prova, vê o tempo e, quando publicadas, consulta as parciais.

Teste: **ESPECÍFICA** (programa de provas, parciais).

### 8.3 CTAs, com a disponibilidade em loja **[NÃO CONFIRMADA]**

O CTA depende do **canal de entrada [DECISÃO PENDENTE]**. Opções:

| Cenário | CTA primário | Secundário | Observação |
|---|---|---|---|
| **A. Lojas abertas** | "Baixar para Android" / "Baixar para iPhone" | "Ver como funciona" | Só depois de confirmar as lojas |
| **C. Web/PWA** | "Abrir o Vida Atleta" | idem | Existe build Web para QA, **não** como produto público **[NÃO CONFIRMADO]** |
| **D. Sem canal** | "Conhecer o Vida Atleta" (âncora ↓) | "Ver como funciona" | Nada de conversão; página institucional apenas |

**Default provisório do wireframe: D (`CTA_MODE=presentation`)**, para não prometer o que não existe. **`presentation` só é aceitável para pré-lançamento ou página de apresentação (objetivo documentado: *apresentar*, não *utilizar*)**; publicar com objetivo de uso exige `stores` ou `web`, com URLs reais e microcopy de login validada. Proibidos até decisão: "Baixe agora", "Disponível na App Store", "Disponível no Google Play".
Microcopy sob o CTA **apenas em `stores` (A) e `web` (C)**: `Login com Google, Apple (no iPhone) ou e-mail.` **[FATO]** (o app exige conta e pede um perfil mínimo e o aceite dos termos; não há visitante). **Em `presentation` (D) nenhuma menção a login; `waitlist` (B) não é construído.**

### 8.4 Textos por seção

**Header (`navItems`, igual em desktop e mobile):** `TEMPO_MODE=ilustracao` → `A prova` · `Fonte dos dados` · [CTA]; `TEMPO_MODE=captura` → `A prova` · `Tempo por dentro` · `Fonte dos dados` · [CTA]

**1 Hero**
- Eyebrow: `NATAÇÃO · DADOS DA CBDA` *(varia com [DP] natureza)*
- H1: **Do evento ao centésimo.**
- Sub: (ver 8.2)
- Faixa de tarefas (uma linha, abaixo do CTA): `Para quem precisa consultar o calendário de eventos, abrir provas e acompanhar resultados, boletins e medalhas da natação brasileira.` *(descreve **tarefas**, não personas; atleta, família, técnico e clube ficam de fora até PROD-001)*
- Trilha: `Evento › Prova › Raia › Tempo`
- Nota (legenda por `SCREEN_MODE`, ver §3.3).

**2 Problema** *(teste: ESPECÍFICA, cita página, filtro, documento e prova)*
- H2 (**definido pelo responsável, Anexo A; default**): **O resultado existe. Chegar até ele é que dá trabalho.**
- *(Sujeito à revisão institucional: se a CBDA/produto pedir, troca-se pela variante neutra sem alterar o layout: "A informação existe. O caminho no celular pode ser mais direto.")*
- Texto: `A informação está distribuída entre páginas, filtros e documentos difíceis de consultar no celular. Em dia de competição, isso pesa.` *(1ª frase: problema declarado em `docs/produto/visao.md` **[FATO]**; "Em dia de competição, isso pesa." é copy **definida pelo responsável (Anexo A)**, leitura editorial **[INFERÊNCIA]** sem número nem promessa mensurável)*
- Rótulos dos fragmentos: `Página do evento` · `Filtros` · `Boletim` · `Tabela de resultados`
- **Situações de uso** (microbloco de uma linha, sem personas, só tarefas confirmadas nos FATOS): `Quando você precisa achar um evento · abrir uma prova · conferir medalhas ou boletins.`
- Legenda final: `Para quem acompanha eventos, provas e resultados da natação brasileira, o {NOME} organiza esse caminho: evento, prova, resultado.` *(Quem se beneficia, se atleta, família ou técnico, fica **[DECISÃO PENDENTE — PROD-001]**; a frase descreve o **uso**, não uma persona.)*

**3 A prova**
- Eyebrow: `EVENTO → PROVA → RESULTADO`
- H2: **Do calendário ao resultado.** *("Três telas até o tempo" fica descartada até o fluxo capturado provar a contagem **[INFERÊNCIA]**.)*
- Passo 1 · `Comece pelo calendário de eventos.` → `Escolha a temporada, busque pelo nome do evento e filtre. Os eventos aparecem com a situação: Acontecendo agora, Próximo ou Encerrado.`
- Passo 2 · `Abra o evento.` → `Local com mapa, organização e tipo de piscina. O programa lista as provas do evento.` *(Situação por prova e documentos em PDF são só desenho do Stitch **[NÃO CONFIRMADO]**: fora da copy.)*
- Passo 3 · `Escolha a prova.` → `Fases, séries, pódio e classificação, com o tempo no formato oficial: minutos, segundos e centésimos.`

**4 O tempo por dentro**
- Eyebrow: `PARCIAIS`
- H2 (Versão A, `TEMPO_MODE=captura`): **Um tempo é feito de parciais.**
- H2 (**Versão B, `TEMPO_MODE=ilustracao`, default**): **Parciais, quando publicadas.** *(bloco obrigatoriamente subordinado ao Ato 2: **sem palco, sem moldura, sem CTA**, sem composição que lembre a UI do app; a legenda `Ilustração com dados de demonstração; não é uma captura do app.` fica **acima** da ilustração, não abaixo. Se o time quiser protagonismo visual, **A5 (captura real) passa a ser bloqueante**.)*
- Texto: `Quando as parciais oficiais de uma prova são publicadas, o app as mostra no gráfico de ritmo ou na tabela. Os recordes oficiais aplicáveis aparecem junto do resultado.`
- Aviso de disponibilidade, **visível no corpo da seção (não em nota secundária)**: `Nem toda prova tem parciais publicadas.` *(**[FATO]**: a ação fica desabilitada quando a API não as publica)*
- Link: `Ver a simulação desta prova individual concluída →` *(**só** em `TEMPO_MODE=captura`, **só** junto de uma captura que mostre uma prova individual concluída com parciais publicadas; **nunca** em capturas de revezamento nem sem captura da simulação; **[FATO]**: a simulação não cobre revezamentos)*
- Legenda da ilustração (**texto único em todos os locais**, acima ou ao lado da faixa em todos os breakpoints): `Ilustração do funcionamento das parciais. Não é uma captura do app. Não é cronometragem ao vivo.`

**5 Depois da prova**
- H2: **Do pódio ao boletim.**
- Medalhas: `Quadro de medalhas por clube, clubes inscritos e atletas inscritos em cada evento.`
- Boletins: `Boletins oficiais, com busca e filtros.` *(a menção institucional "publicados pela CBDA e pelas federações" fica **apenas** na seção Fonte dos dados, se a allowlist for ampliada)* *(PDF e "baixar" **[NÃO CONFIRMADOS]**: a ficha F017 registra `arquivo` sempre nulo.)*
- Calculadora: `Calculadora de pontuação pela fórmula da World Aquatics: informe piscina, sexo, prova e o seu tempo.` *(campos **[FATO]** em `calculator_page.dart`; os tempos-base vêm da API)*
- **Faixa editorial `TAMBÉM NO APP`** (fora da seção, acima do rodapé; rótulo em Rubik caps 12 px + uma linha de 14 px; sem ícones, sem cards): `notícias · federações · favoritos de evento · notificações públicas opcionais · tema claro ou escuro`. *(Não há aviso por atleta; nada de "resultado do meu atleta".)*
- ***Fora de texto:*** rankings, "Pro", "seguir atleta", carteirinha.

**6 Fonte dos dados**
- H2: **O dado não nasce no app.**
- Texto: `Os resultados vêm do Sistema de Gestão Esportiva da CBDA. O app mostra o que foi publicado.`
- Diagrama: `SGE da CBDA` → `API consumida pelo app` → `app {NOME}` *(nome interno da API, `restvanatacao`, não aparece na página)*
- Regras: `Tempo em mm:ss.cc, o formato oficial.` · `Recordes oficiais aplicáveis junto do resultado.` · `Se o calendário está desatualizado, o app avisa, com a data.` · `Atletas com nome público e clube. Sem CPF, nascimento ou foto.`
- *Teste:* **ESPECÍFICA** (SGE, formato, política de nomes).

**7 Entrada**
- H2 por modo: `stores`/`web`: **Abra o evento. Encontre a prova.** (título do responsável, Anexo A) · `presentation` (default): **Veja como o app organiza evento, prova e resultado.** *(linguagem demonstrativa; "Abra/Abrir/Consulte" só em `stores` ou `web`)*
- CTA: por cenário (§5.7). Nota de login: `Login com Google, Apple (no iPhone) ou e-mail.` **somente em `stores` e `web`**; em `presentation`, sem nota; `waitlist` não é construído.

**Rodapé:** lockup · `Aplicativo de natação com dados da CBDA.` *(varia com [DP] natureza)* · links **só os que existirem**, com **Privacidade e Termos obrigatórios em produção** (em `INTERNAL_PREVIEW` ficam ocultos ou desabilitados, com trava de build em produção) · `© {ano}` · `Créditos das fotografias.` · Privacidade e Termos: **bloqueante para produção pública** (o app tem termos e política, então a landing os referencia): **requisito de produção:** exige (a) URL web aprovada **ou** (b) deep link para o app, e o link é renderizado. **Omitir é uma exceção fora do padrão**, só com justificativa jurídica assinada e registrada; **não** é uma opção equivalente. **Em produção nunca aparece colchete, `TODO` ou texto de pendência.**

**Metadados (SEO, não indexar promessa):** title `{NOME}: calendário de eventos e resultados da natação`; description por modo: `presentation`: `Conheça o {NOME}, app de natação com calendário de eventos e resultados, com dados da CBDA e parciais quando publicadas.` · `stores`/`web`: `Consulte eventos, provas e resultados da natação brasileira, com dados da CBDA e parciais quando publicadas.`

### 8.5 Proibições de copy
"ao vivo/tempo real/sem atraso", "melhor/mais completo/nº 1", "baixe agora/disponível na…", "evolução/performance/potencial/jornada/superação/transformação" (sem contexto concreto), "seu filho/seus resultados" (não há vínculo pessoal), "ranking" como feature, "IA/Pro/assinatura/duelo", qualquer número de usuários/atletas/resultados/toques/segundos, depoimentos, nomes ou fotos de atletas reais.

---

## 9. DIREÇÃO DE MOTION

### 9.1 Linguagem: **"Passagem"**
Movimento é **passagem pela raia**: sempre horizontal (esquerda → direita, como a prova), curto, com desaceleração no final (toque na placa). Nada de "subir e aparecer" em todo bloco. Três verbos, e só eles: **marcar** (friso), **acumular** (parciais), **alinhar** (fragmentos → fluxo).

**Fallback técnico:** para M3, M4, M5 e M7, onde não houver `clip-path` animável, tudo roda por IntersectionObserver com autoplay único; sem JS, o estado final já vem renderizado. **A barra de progresso mobile não usa IntersectionObserver**: sem `animation-timeline`, fica estática.
Easing: `cubic-bezier(.22,1,.36,1)` (ease-out-quint) para entradas; `cubic-bezier(.4,0,.2,1)` para trocas. Duração base 320 ms; máximo 900 ms (exceto "construção do tempo", 2,4 s, uma vez). Só `transform`, `opacity` e `clip-path`. **Sem bibliotecas**: CSS (`animation-timeline: view()` como melhoria progressiva) + IntersectionObserver.

### 9.2 Especificação

| # | Elemento | Gatilho | Movimento | Duração | Objetivo | Desktop | Mobile | Reduced motion |
|---|---|---|---|---|---|---|---|---|
| M1 | **Friso lima** sob H2 e header | Entrar no viewport (uma vez) | `scaleX 0→1`, origem esquerda | 480 ms | Marcar a "chegada" de um raciocínio; ecoar o app | Sim | Sim | Já desenhado, sem animação |
| M2 | **Linhas da tabela do hero** | Carga da página | **v1 (padrão):** uma **única máscara horizontal** (`clip-path`) revela a captura inteira da esquerda para a direita, ≤ 600 ms. **Enhancement `MOTION_PLUS`:** faixas por linha da tabela (mesma imagem, sem recriar a UI nem novo download), **condicionadas a um arquivo de metadados por asset e breakpoint** (`hero-mask.json`, coordenadas aprovadas junto com o crop); se o arquivo faltar ou a calibração falhar, cai **automaticamente** na máscara única | 600 ms | Orientar a leitura pela ordem de chegada e mostrar a raia como estrutura. **Não** depende de coluna de diferença (a "+delta" do Stitch é **[NÃO CONFIRMADA]**) | Sim | Sim (só as 4 primeiras linhas) | Todas visíveis, sem atraso |
| M3 | **Fragmentos → fluxo** (Problema) | **v1:** IntersectionObserver, **uma vez** ao entrar. *`MOTION_PLUS`: scrub vinculado ao scroll* | Fragmentos cinza (rot ≤ 2°) **alinham** numa raia e o celular final ganha cor (`grayscale 1→0`) | 700 ms (v1) | Passar de fricção a um só fluxo | v1: uma vez | v1: uma vez | **Layout estático próprio (não depende do movimento):** lado a lado `Antes: página · filtro · boletim · tabela` e `Agora: evento → prova → resultado` |
| M4 | **Celular do Ato 2** | Mudança de passo (IntersectionObserver, sem scroll-hijacking) | Tela atual sai `translateX −12 px + opacity 0`, nova entra `+12 px → 0`; trilha destaca o passo | 320 ms | Mostrar continuidade evento → prova → resultado | Sticky | Sem sticky: 3 blocos com recorte fixo | Troca instantânea, sem deslocamento |
| M5 | **Construção do tempo** (Ato 3; a legenda `Ilustração do funcionamento das parciais. Não é uma captura do app. Não é cronometragem ao vivo.` (ou `Dados de demonstração` na versão A) fica **colada à faixa de segmentos em todos os breakpoints, durante e depois da animação**) | **v1:** IntersectionObserver, **uma vez** ao entrar (sem scrub em nenhum breakpoint) | Faixa horizontal: segmentos (parciais) preenchem um a um da esquerda; cada segmento recebe seu **rótulo estático** de parcial; **não há contador correndo** (nada que pareça cronometragem); na versão A o gráfico real é revelado por `clip-path` na mesma cadência | 2,4 s | **Explicar como um tempo é composto**. Função central; **sem loop** | Uma vez, 2,4 s | Uma vez, 1,8 s | **Layout estático próprio:** faixa final com os rótulos de parcial e uma frase explicativa sempre visível (`Parciais, quando publicadas: cada trecho da prova.`) |
| M6 | **Recortes do Ato 5** | Scroll | Deslocamento vertical ≤ 24 px e variação de largura das "raias" | ligado ao scroll | Dar sensação de raias paralelas, sem cards iguais | Sim | Não (empilha) | Sem deslocamento |
| M7 | **Diagrama do caminho do dado** | Entrar no viewport | Linha `SGE da CBDA → API consumida pelo app → app` se desenha (`stroke-dashoffset`), nós acendem em sequência | 700 ms | Mostrar o caminho do dado | Sim | Sim | Desenhado |
| M8 | **Cordão de raia / progresso** | Scroll | Um marcador (lima) percorre o cordão e marca cada seção | ligado ao scroll | Orientação e progresso | Faixa sob o header | Barra de 3 px no topo | Marcador estático na seção atual (por âncora) |
| M9 | **Botão primário** | Hover/foco/press | Friso lima desliza sob o rótulo; seta desloca 4 px | 180 ms | Feedback | Sim | Só press | Sem deslocamento; estado por cor |
| M10 | **Foto de raias (hero e textura)** | Scroll | Parallax `translateY ≤ 24 px` | ligado ao scroll | Profundidade sutil | Sim | **Não** | Estático |

**Pacote v1 (obrigatório) × enhancements (atrás de flag):**

| Pacote | Itens | Regra |
|---|---|---|
| **v1 obrigatório** | M1 friso · M4 troca de telas (`position: sticky` em CSS + IntersectionObserver, **sem scrub**) · M7 diagrama do caminho do dado · M9 botão | Cada um roda **uma vez por seção**; sem regra de concorrência global |
| **v1 condicionado a QA (estático por padrão; a animação só liga com a flag `MOTION_QA_PASSED=true`, depois de passar em 360, 768 e 1440 px com LCP/CLS medidos)** | M3 fragmentos→fluxo (**uma vez ao entrar, sem scrub**; **exigido pelo responsável, Anexo A**) · M5 construção do tempo (**uma vez ao entrar**) · barra de progresso mobile de 3 px (estática onde não houver suporte) | Passar em LCP ≤ 2,5 s, CLS = 0 e legibilidade mobile; senão, estado final estático |
| **Pós-aceite (`MOTION_PLUS`: tickets separados, **nenhum entra no primeiro build**, cada um exige métrica de performance)** | **M2 linhas do hero** (o pedido diz "podem entrar sequencialmente") · M3 **com scrub** · M6 recortes do Ato 5 · M8 marcador do cordão (desktop) · M10 parallax · a regra de concorrência abaixo | Só ativam depois de **aceite explícito de performance** (sem long tasks > 50 ms, CLS = 0, LCP ≤ 2,5 s) em 360, 768 e 1440 px. Sem a flag, M6/M10 ficam estáticos e M8 vira âncora simples |

**Critério de corte:** se LCP, CLS ou a legibilidade mobile falharem por causa de uma animação, **ela é removida** (volta ao estado final estático), **não ajustada indefinidamente**.

**Não fazer:** movimento contínuo (ondas, ripple em loop), scroll-hijack, texto que aparece letra a letra, parallax em texto, contadores de "números de marketing", animações de ícones.
**Orçamento e prioridade:** nenhuma animação > 900 ms além de M5; LCP ≤ 2,5 s (a foto principal, se houver, precisa de `preload` + dimensões).
**Política mínima do v1:** no máximo **uma animação principal ativa por viewport**; **M3 e M5 nunca simultâneos** (seções diferentes); enquanto o Ato 2 estiver com o celular sticky ativo, qualquer outro movimento entra **direto no estado final**.
**Concorrência estendida (vale só com `MOTION_PLUS`):** (1) **M8** (progresso) é contínuo e **não conta** no orçamento; (2) **um movimento principal por vez** entre M2, M3, M4, M5, M7; (3) **M10 desliga** enquanto M3 ou M5 estiver ativo; (4) **M1** só roda se nenhum movimento principal estiver em curso, senão entra já desenhado; (5) **mobile: sem parallax (M10) e sem scrub**; M3 e M5 rodam uma vez ao entrar.
**Reduced motion:** obrigatório `@media (prefers-reduced-motion: reduce)` mantendo **todo o conteúdo e todos os estados finais**, sem esconder nada.

---

## 10. INVENTÁRIO DE ASSETS

Legenda: **JÁ EXISTE** · **CAPTURAR** · **PRODUZIR** · **VALIDAR** (direito de uso).

| Categoria | Item | Estado | Notas |
|---|---|---|---|
| Marca | `vida-atleta-symbol.svg`, `header-wordmark.svg` (repo do app, `assets/brand/`, caminhos verificados) | **JÁ EXISTE**; **VALIDAR** permissão de uso web | Símbolo e wordmark do Vida Atleta |
| Lockup (matriz) | **Default fechado (DP2-A, `CBDA_LOCKUP=false`):** `vida-atleta-symbol.svg` + o texto `Vida Atleta` em Rubik 700 (o `header-wordmark.svg` **não** é usado no default, para evitar qualquer "CBDA" embutido) · **Com aprovação (DP2-B, `CBDA_LOCKUP=true`):** o mesmo + `cbda-shield.svg` (rodapé) e o texto `por CBDA`; `cbda.svg` só se a CBDA fornecer a regra de uso | **Regra + trava de build** | Com `CBDA_LOCKUP=false`, "CBDA" é **proibido apenas em lockups, SVGs de marca e textos de endosso institucional** (ex.: "por CBDA", "app oficial da CBDA"). A **copy editorial**, incluindo o rodapé, pode conter **exatamente** as expressões da lista de permissão do item 7 do manifesto (`dados da CBDA`, `SGE da CBDA`, `Sistema de Gestão Esportiva da CBDA`, `natação brasileira, com dados da CBDA`), como em `Aplicativo de natação com dados da CBDA.` |
| Marca | `cbda-shield.svg`, `cbda.svg` | **JÁ EXISTE**; **VALIDAR** direito de uso | **Ocultos por padrão**: só atrás de `CBDA_LOCKUP` (DP2) |
| Marca | Favicon / ícone OG | **PRODUZIR** | Derivar do símbolo; OG 1200×630 com hero |
| Fontes | Rubik (variável) e Lato 400/700/900, OFL | **JÁ EXISTE** | Auto-hospedar (WOFF2, subset latin); verificar `tnum` em Rubik |
| Telas | Resultados da Prova (hero) | **CAPTURAR** | Do app real **com dados de demonstração** (§11); Stitch atual tem nomes de aparência real |
| Telas | Início / Acontecendo agora | **CAPTURAR** | Passo opcional do Ato 2; evitar chip "AO VIVO" |
| Telas | Calendário | **CAPTURAR** | Confirmar filtros existentes (Estado/Tipo/Situação existem no código, mas a ficha não os declara "oficiais") |
| Telas | Detalhe do Evento | **CAPTURAR** | Sem botão "Balizamento" (não confirmado) |
| Telas | **Gráfico de parciais + tabela** | **CAPTURAR (bloqueante do Ato 3)** | Não existe no Stitch |
| Telas | **Simulação da prova** | **CAPTURAR (opcional; frame único ou vídeo curto)** | Só se o dev entregar; senão, cortar o link |
| Telas | Quadro de Medalhas | **CAPTURAR** | Stitch usa clubes reais (Flamengo, Corinthians…); trocar por clubes de demonstração |
| Telas | Boletins Oficiais | **CAPTURAR** | Stitch traz títulos plausíveis; usar boletins de demonstração |
| Telas | Calculadora | **CAPTURAR** | Valores base: usar os da API ou os do app; conferir |
| Telas | Aviso "Dados desatualizados · data" (estado real) | **CAPTURAR** | Alimenta a seção 6; forçar o estado no ambiente de demonstração |
| Fotos | Vista de cima, raias (principal) | **VALIDAR** | Candidata: `event-hero.png` do app (4080×2724); origem/licença desconhecidas |
| Fotos | Textura de água/cordão | **PRODUZIR/VALIDAR** | Recorte macro da foto acima ou banco licenciado |
| Fotos | Placar / placa de toque | **VALIDAR** | Procurar banco licenciado ou registro próprio da CBDA |
| Fotos | `login-swimmer.png`, `event-card-1.png` | **NÃO USAR** | Atleta e medalhistas identificáveis; marcas de terceiros |
| Gráficos | Cordão de raia (SVG) | **PRODUZIR** | Padrão repetível |
| Gráficos | Fragmentos cinza do Problema (4) | **PRODUZIR** | Abstratos; não copiar sites reais |
| Gráficos | Diagrama SGE da CBDA → API consumida pelo app → app | **PRODUZIR** | SVG com texto real |
| Gráficos | Molduras de celular (SVG) | **PRODUZIR** | Minimalistas, sem marca de fabricante |
| Ícones | Setas e mapa | **JÁ EXISTE** (Material Icons outlined, do app) | Só os necessários |
| Animação | Faixa de parciais (M5) | **PRODUZIR** | CSS/SVG; dados de demonstração; sem contador |
| Vídeo | (nenhum) | — | Fora do escopo v1 |
| Texto legal | Privacidade, termos | **VALIDAR** | LEGAL-001 aberto |
| Métrica | Números da landing | **NÃO EXISTE** | Bloqueado (PROD-010/TEC-014) |

---

**Regra de dados nas ilustrações e wireframes:** nenhum tempo, nome ou posição específico é escrito neste documento nem nos SVGs. Onde há valor, o placeholder é `mm:ss.cc` ou `parcial N`. Os valores reais das capturas vêm **somente** da tabela de dados de demonstração aprovada (extraída das fixtures `fake_*` do app), que é a **mesma lista de permissão** usada no OCR (§11) e nos SVGs.

### 10.1 Matriz de assets (o que o frontend consome)

Todas as capturas: modo `captura` (app real com dados de demonstração, **único publicável**) ou `placeholder` (re-render Stitch, só interno, ver §11), legenda por `SCREEN_MODE`, **checklist de privacidade (§11) aprovado antes de entrar no repositório**. Formatos: AVIF + WebP com `srcset` (1x/2x), `width`/`height` definidos, `loading="lazy"` exceto o hero.

| ID | Seção | Arquivo esperado | Origem / dimensões-fonte | Crop | Peso máx. (mobile / desktop) | Texto alternativo (base) | Breakpoint |
|---|---|---|---|---|---|---|---|
| A1 | 1 Hero | `hero-resultados.{avif,webp}` | Resultados da Prova, 780 px de largura | Do cabeçalho até a 6ª linha da tabela | 70 KB / 130 KB | "Tela de resultados de uma prova no app: colocação, raia, atleta e tempo. Dados de demonstração." | todos (mobile: corte na metade superior) |
| A2 | 3 Passo 1 | `ato2-calendario.*` | Calendário | Cabeçalho + 2 cards | 60 / 110 KB | "Calendário de eventos com seleção de temporada, busca e filtros." | todos |
| A3 | 3 Passo 2 | `ato2-evento.*` | Detalhe do Evento | Cabeçalho + bloco de local + início do programa; **sem botão Balizamento nem documentos PDF** | 70 / 120 KB | "Detalhe de um evento: local, organização, tipo de piscina e programa de provas." | todos |
| A4 | 3 Passo 3 | `ato2-resultados.*` | Resultados da Prova | Igual a A1, com seleção de prova visível | 70 / 130 KB | "Resultados de uma prova, com fases, séries, pódio e classificação." | todos |
| A5 | 4 Ato 3 (A) | `ato3-parciais.*` | **Captura do gráfico de parciais** (não existe ainda) | **Somente o estado real visível no app**, sem composição artificial: se o app não mostra gráfico e tabela juntos, são **dois assets** (`ato3-parciais-grafico.*` e `ato3-parciais-tabela.*`) | 80 / 140 KB cada | "Gráfico de ritmo das parciais de uma prova." e "Tabela das parciais de uma prova." | todos |
| A5b | 4 Ato 3 (B) | `ato3-ilustracao.svg` | Produzida (SVG) | Faixa de segmentos rotulados, sem UI do app | 6 KB | "Ilustração do funcionamento das parciais. Não é uma captura do app." | todos |
| A6 | 5 Raia 1 | `ato5-medalhas.*` | Quadro de Medalhas | Título + 4 linhas; clubes de demonstração; **sem "Atualizado há…"** | 45 / 80 KB | "Quadro de medalhas por clube." | todos |
| A7 | 5 Raia 2 | `ato5-boletins.*` | Boletins (**se a fixture aprovada não permitir uma captura segura, não se publica screenshot de boletins: a raia 2 do Ato 5 vira texto**) | Cabeçalho + filtros + itens da fixture; **sem botões Visualizar/Baixar e sem "PDF"** | 55 / 100 KB | "Lista de boletins com busca e filtros." | todos |
| A8 | 5 Raia 3 | `ato5-calculadora.*` | Calculadora | Card de resultado + campos Piscina, Sexo, Prova e Seu tempo; **sem "Salvar no meu histórico"** | 55 / 100 KB | "Calculadora de pontuação pela fórmula da World Aquatics." | todos |
| A9 | 6 Fonte | `fonte-desatualizado.*` | Estado real "Dados desatualizados · data" (forçado no ambiente de demonstração) | Faixa do aviso + 1 card | 40 / 70 KB | "Aviso de dados desatualizados exibido pelo app, com a data da última atualização." | todos |
| G1 | Todas | `cordao-raia.svg`, `bg-raias.svg` (hero gráfico), `diagrama-fonte.svg`, `moldura-celular.svg`, `friso.svg` | Produzidos | — | ≤ 4 KB cada | `alt=""` (decorativos) exceto o diagrama: "SGE da CBDA, API do app, tela do app" | todos |
| P1 | 1 Hero (opcional) | `hero-foto.avif` | Foto de raias **sem pessoas**, ou com pessoas só com `semMenores` + `releaseImagem` + licença | 16:9, mascarada | 180 KB | `alt=""` (decorativa) | ≥ 768 |
| M1 | Marca | `logo-vida-atleta.svg` | **Default (`CBDA_LOCKUP=false`):** `vida-atleta-symbol.svg` + texto renderizado `Vida Atleta` em Rubik 700. `header-wordmark.svg`, `cbda-shield.svg`, `cbda.svg` e qualquer arte ou texto com CBDA só entram com `CBDA_LOCKUP=true` e aprovação registrada | — | 8 KB | "{NOME}" | todos |
| S1 | SEO | `og-image.jpg` 1200×630 | Produzida (hero gráfico + título) | — | 120 KB | — | — |

### 10.1.1 Roteiro de captura (uma linha por asset)

Ambiente: app Flutter (Web ou emulador) em **repositórios `fake_*`** (fixtures aprovadas, extraídas do commit registrado no manifesto), viewport **390×844 CSS px** com `deviceScaleFactor` 2 (imagem-fonte de **780 px** de largura). Responsável: **dev do app Flutter [a definir]**; revisor de privacidade: **[a definir]**. Status inicial de todos: **PENDENTE** (até lá, só placeholders internos com marca d'água).

| Asset | Rota no app (`app_routes.dart`) | Fixture / estado necessário | Texto permitido | Proibido na imagem | Crop desktop | Crop mobile | Status |
|---|---|---|---|---|---|---|---|
| A1, A4 | `/events/:eventId/races/:stageId` | Prova concluída de um evento de demonstração, fase final; **usar a quantidade de participantes que a fixture aprovada já tem**; se for preciso mais, criar um dataset de demonstração **aprovado e registrado na lista de permissão antes da captura** | Nomes `Atleta demonstração NN`, clubes `Clube demonstração NN`, tempos das fixtures | Nomes/clubes reais, `Nasc.`, foto, patrocinador | Cabeçalho até a 6ª linha | **Cabeçalho da tabela + 3 linhas** (não a tela inteira) | PENDENTE |
| A2 | `/events` | Temporada e 2–3 eventos de demonstração, sem "AO VIVO" | Nomes de eventos das fixtures | Fotos de eventos reais, logos | Cabeçalho + 2 cards | Cabeçalho + 1 card e filtros | PENDENTE |
| A3 | `/events/:eventId` | Evento de demonstração com local, organização, piscina e programa | Provas **extraídas da fixture aprovada** (commit registrado no manifesto) | Botão Balizamento, documentos PDF | Cabeçalho + local + início do programa | Local + 3 provas | PENDENTE |
| A6 | `/events/:eventId/roster` (aba Medalhas) | Quadro com os clubes **da fixture aprovada** | Números de medalhas das fixtures | "Atualizado há…", clubes reais | Título + 4 linhas | Título + 3 linhas | PENDENTE |
| A7 | `/bulletins` | Boletins de `FakeBulletinRepository` (fixtures manifestamente fictícias, **quantidade conforme a fixture aprovada**) | Títulos **da fixture aprovada** | Botões Visualizar/Baixar, "PDF" | Cabeçalho + filtros + 2 itens | Filtros + 1 item | PENDENTE |
| A8 | `/calculator` | Piscina, sexo e prova preenchidos com valores das fixtures | Rótulos do app | "Salvar no meu histórico" | Card de resultado + campos | Card de resultado | PENDENTE |
| A9 (opcional) | `/landing` com catálogo desatualizado | Forçar `isStale` no repositório fake | `Dados desatualizados · <data de demonstração>` | Datas que pareçam reais | Faixa + 1 card | Faixa | PENDENTE |
| A5 (opcional) | `/events/:eventId/races/:stageId` (parciais abertas) | Prova individual concluída com parciais publicadas nas fixtures | Rótulos do app | Nomes reais | Gráfico + tabela | Gráfico em largura total | PENDENTE |

**Origem única dos dados de demonstração (`demo-data.json`, versionado):** gerado do **mesmo pacote de fixtures aprovadas** usado nas capturas; **o componente da imagem (alt, legenda) e o HTML equivalente consomem esse único arquivo**, e a lista de permissão do OCR também é derivada dele. Formato: `{ "fixtureCommit": "<hash>", "eventos": [...], "provas": [...], "resultados": [...], "clubes": [...], "boletins": [...], "medalhas": [...] }`; nenhum valor fora dele entra na landing.

**Conteúdo HTML obrigatório ao lado de cada captura bloqueante** (com **os dados da fixture aprovada**, nunca inventados):

| Asset | HTML equivalente |
|---|---|
| A1, A4 | Tabela semântica (`<table>`): colunas `colocação`, `raia`, `participante`, `clube`, `tempo` (mm:ss.cc) |
| A2 | Lista dos eventos exibidos: `nome`, `período`, `situação` (Acontecendo agora, Próximo ou Encerrado) |
| A3 | Lista descritiva: `local`, `organização`, `piscina`, provas listadas |
| A6 | Tabela: `clube`, `ouro`, `prata`, `bronze`, `total` |
| A7 | Lista dos boletins exibidos: `número`, `título`, `data` |
| A8 | Lista descritiva: `piscina`, `sexo`, `prova`, `tempo informado`, `pontos` |

**Legibilidade mobile (regra):** a moldura do celular tem **largura mínima de 280 px** (a imagem-fonte de 780 px é exibida a ≥ 36%, deixando o texto de 14 px do app com ≥ 10 px); abaixo disso, usar o crop mobile (cabeçalho + 3 linhas) em largura total do container (≥ 320 px), nunca a tela inteira reduzida. **Todo screenshot tem, ao lado, o conteúdo essencial em HTML** (lista ou tabela semântica curta), para que a leitura não dependa da imagem.

### 10.1.2 Pacote de captura (o que já está definido e o que depende de terceiros)

**Já definido:**
- **Ambiente:** app Flutter Web ou emulador, viewport 390×844 CSS px, `deviceScaleFactor` 2 (fonte de 780 px de largura), tema claro, idioma pt-BR.
- **Pasta de saída:** `imagens-telas/captura/<ID>.png` (originais, **não publicados**) → geração para `public/assets/app/<ID>.{avif,webp}` (publicados).
- **Geração de AVIF/WebP (a escrever na implementação):** `tools/build-images.mjs` com `sharp`, larguras 390, 780 e 1170 px (1x, 2x, 3x do crop), qualidade AVIF 55 e WebP 78, pesos máximos da §10.1.
- **Lista de permissão de textos** (`tools/allowlist.txt`): gerada **a partir das fixtures aprovadas** (lista inicial confirmada: `Atleta demonstração 01…05`, `Clube demonstração 01…03`; eventos, provas, boletins e datas **apenas os das fixtures**), mais os rótulos fixos da interface do app. **Qualquer outro nome próprio reprova a captura.**
- **Modelo de `assets-manifest.json`:** `{ "id": "A1", "arquivo": "hero-resultados", "modo": "captura", "origem": "captura do app", "rota": "/events/:eventId/races/:stageId", "fixture": "fake_race_results_repository", "sha256": "<hash>", "aprovacaoPrivacidade": "privacidade-aprovacao.md#A1", "legenda": "Telas do app com dados de demonstração", "licenca": null, "credito": null }`.
- **Schema de `privacidade-aprovacao.md`** (uma seção por asset): `ID` · `sha256` · `data` · `responsável` · `ambiente de origem (app, commit, dispositivo/viewport, repositório fake usado)` · `termos lidos por OCR` (lista completa) · `confirmação de ausência de nome real, nascimento, foto e marca de terceiros` (marcada item a item) · `licença e crédito` (se houver foto) · `semMenores` e `releaseImagem` (se houver pessoa) · `assinatura de aprovação` (nome e data).

**Achado verificado (2026-09-24):** o app **não liga os repositórios `fake_*` em execução**: `lib/main.dart` só tem `VISUAL_TEST_MODE`, que apenas mantém a splash, e o `README`/F001 dizem que ausência de configuração **não** aciona fallback fake. Os fakes existem **somente nos testes**. Logo, capturar com dados de demonstração exige um **harness de captura**: por exemplo, um teste de widget no repositório do app que monta as páginas reais com os repositórios `fake_*`, carrega as fontes Lato e Rubik e exporta PNG (golden) por tela. O Flutter SDK do projeto existe em `.flutter-sdks/flutter-3.47.2`. **Decisão necessária (do dono do app):** autorizar/criar esse harness no repositório do app (alterar o app é vedado sem autorização) ou definir outro caminho.

**Ticket operacional de captura (abrir antes do primeiro build visual; conteúdo em `TICKET-captura.md`):** responsável pela captura · responsável pela privacidade · comando do harness · commit do app · IDs de evento, prova e boletim das fixtures · `demo-data.json` aprovado · data de entrega.

**Pré-requisito operacional antes do primeiro build visual de produção** (ficha a preencher pelo dono do projeto; **por contrato, enquanto estiver incompleta, `INTERNAL_PREVIEW=true`**): responsável pela captura · responsável pela privacidade · comando do harness · commit do app usado · mapa fixture→A1–A8 · data de entrega.

**Depende de terceiros [DECISÃO PENDENTE, fora do controle do documento]:** (1) **nome do responsável pela captura** e **do revisor de privacidade**; (2) **autorização e autoria do harness de captura** acima (comando resultante: `flutter test <arquivo do harness> --update-goldens`, a definir); (3) **os IDs de evento, prova e boletim** das fixtures escolhidas (as fixtures existentes são genéricas e ainda precisam ser mapeadas às telas A1–A8). Até esses três itens existirem, **as telas bloqueantes ficam PENDENTES** e a landing só roda em `INTERNAL_PREVIEW=true` com placeholders marcados. Isso **bloqueia a publicação, não o desenvolvimento**.

**Crops por breakpoint (proporções da captura de 780 px de largura; recalibrar na captura real e validar em 360 px antes de aprovar):** *A1/A4* desktop: do topo até o fim da 6ª linha (≈ 0–70% da altura); mobile: título da prova + cabeçalho da tabela + 3 linhas (≈ 15–55% da altura), largura do container ≥ 320 px.

### 10.2 Manifesto de assets e travas de build

**Dois níveis.** **v1 (obrigatório para publicar):** `assets-manifest.json` + `privacidade-aprovacao.md` + **checagem humana** de cada item da lista abaixo, com um responsável assinando antes do deploy. **v2 (automação de CI):** cada item vira um ticket técnico próprio (OCR, `sha256`, detecção de marca d'água, varredura de SVG/texto). Enquanto a v2 não existir, a v1 é o controle; a v2 não é pré-requisito do desenvolvimento.

Um arquivo `assets-manifest.json` lista **cada imagem publicável**: `id`, `arquivo`, `modo` (`captura`|`ilustracao-svg`), `origem`, `sha256`, `aprovacaoPrivacidade` (linha em `privacidade-aprovacao.md`), `legenda`, `ocrArquivo`, `ocrSha256`, `revisorPrivacidade`. **Script mínimo obrigatório já na v1** (`tools/check-assets.mjs`, a ser escrito na implementação): o **build de produção falha** se faltar entrada no manifesto, se o `sha256` divergir, se `INTERNAL_PREVIEW=true`, se `SCREEN_MODE=placeholder`, ou se o log de OCR do asset (`ocrArquivo`) **não existir ou o seu `ocrSha256` não bater**, ou se a seção do asset em `privacidade-aprovacao.md` **não existir ou tiver algum campo vazio** (inclusive `revisorPrivacidade`): `termos lidos` (lista não vazia), `responsável`, `data`, `commit do app`, `ambiente de origem` e **todos os itens do checklist marcados** (itens 1, 2, 3 e 5 abaixo). O script não lê a imagem; garante que a evidência humana foi **preenchida**. **Linter textual de copy (`tools/check-copy.mjs`, também obrigatório na v1), escopado a: conteúdo público renderizado, metadados SEO e texto alternativo (nomes de arquivo, rotas, comentários e documentação não publicada ficam fora, com allowlist explícita), com a denylist completa da §8.5:** `ao vivo`, `tempo real`, `sem atraso`, `nº 1`, `número 1`, `melhor app`, `mais completo`, `baixe agora`, `disponível na`, `evolução`, `performance`, `potencial`, `jornada`, `superação`, `transformação`, `IA`, `inteligência artificial`, `Pro`, `assinatura`, `duelo`, `ranking` (fora de contexto interno), `seguir atleta`, números de marketing (`\d+\s?(mil|k|\+)` em copy) e depoimentos. Allowlist contextual para usos técnicos exatos. Além disso: com `CBDA_LOCKUP=false`, o build **falha** se a copy contiver, fora da lista de permissão exata do item 7: `produto oficial`, `app oficial`, `aplicativo oficial da CBDA`, `oficial da CBDA`, `por CBDA`; e, fora de `CTA_MODE=stores`, `App Store`, `Google Play`, `Baixar`, `Baixe`. **Checklist humano obrigatório de release, na v1** (o script não verifica): OCR/revisão visual de cada imagem, licença e créditos, `semMenores`/`releaseImagem`, aprovação da CBDA (itens 4, 6 e 7). **v2:** automatizar esses itens. Na v1, o deploy **não pode ocorrer** se qualquer condição abaixo for verdadeira:

1. `SCREEN_MODE=placeholder` em qualquer imagem, ou marca d'água `PLACEHOLDER` detectada.
2. Imagem publicável **sem** entrada no manifesto, ou com `sha256` diferente do registrado.
3. `privacidade-aprovacao.md` ausente ou sem linha aprovada para a imagem.
4. Imagem com `origem` fora de: `captura do app` (telas), `SVG produzido` (ilustrações) ou `foto-licenciada`; esta última segue a regra 6 (com pessoas: `semMenores=true` + `releaseImagem=true` + `responsavelValidacao`).
5. `INTERNAL_PREVIEW=true`.
6. Foto no manifesto sem `licenca`, `credito`, `semMenores=true` (comprovação de que não há menores), `releaseImagem=true` (autorização de uso) e `responsavelValidacao` preenchidos. Foto **com pessoas** sem esses campos reprova; foto **sem pessoas** exige só `licenca` e `credito`.
7. `CBDA_LOCKUP=true` sem `aprovacaoCBDA` registrada, ou `CBDA_LOCKUP=false` com "CBDA" em **assets e componentes de marca** (lockup do header e do rodapé, SVGs de marca). **A copy editorial não é varrida** e usa uma **lista de permissão fechada**: `dados da CBDA`, `SGE da CBDA`, `Sistema de Gestão Esportiva da CBDA`, `natação brasileira, com dados da CBDA`.

Sem as capturas **bloqueantes** (A1–A4, A6, A8) aprovadas no manifesto, o script mínimo da v1 **falha o build de produção**: não existe variante publicável sem elas. As **opcionais** (A5, A7, A9, P1) têm fallback fechado, descrito na §3.3.

## 11. PRIVACIDADE E TELAS: ESTRATÉGIA

O fato: as capturas do Stitch trazem nomes de aparência real e anos de nascimento; a regra do produto exclui CPF, nascimento, foto e nome real (PRIV-001). Nenhuma delas entra na landing como está.

**Ordem de preferência:**

1. **(Recomendada) Recaptura do app real com dados de demonstração.** O repositório do app já tem repositórios `fake_*` com fixtures manifestamente fictícias (`Atleta demonstração 01…05`, `Clube demonstração 01…03`, eventos e provas genéricos) **[FATO — verificado em `fake_race_results_repository.dart`, `fake_event_roster_repository.dart`, `fake_event_repository.dart`]**. Falta confirmar com o dev que dá para rodar a UI real sobre esses fakes fora dos testes. Rodar o app (Web/emulador) apontando para os fakes e capturar. Ganho: **UI real, zero dado pessoal**. Custo: precisa do dev do app e do ambiente Flutter.
2. **(Último recurso) Re-renderizar o HTML do Stitch** com texto substituído por dados de demonstração. O Stitch contém itens **não confirmados** (botão Baixar, coluna +delta, Balizamento, situação por prova, "Atualizado há…", chip AO VIVO). **Uso condicionado a checklist por tela:** remover todo elemento que não exista no app Flutter (conferir contra o código), trocar nomes, clubes e datas, e **rotular internamente como "layout de referência, não captura real"**. **Proibido publicar** o resultado desta opção: as telas bloqueantes (A1–A4, A6, A8) só vão a produção com captura real do app, sem exceção.
3. **Nunca:** borrar/pixelar (parece defeito), reaproveitar nomes reais, inventar nomes que possam ser de atletas reais.

**Dados de demonstração [DECISÃO PENDENTE]:** (A) usar o padrão do app (`Atleta demonstração 01`, `Clube demonstração 01`): 100% seguro, visualmente seco. (B) nomes fictícios plausíveis (ex.: `Nome Sobrenome` compostos), o que exige checagem contra bases públicas e marca risco residual. **Recomendação: A nas telas fixas + rótulo `Telas com dados de demonstração`**, e deixar a força visual para tipografia, foto e cordão. Clubes reais não entram associados a resultados fictícios (enganoso).

**Bloqueio formal de privacidade, por imagem, antes de qualquer commit no repositório da landing** (todos os itens são obrigatórios, nesta ordem):
1. **Origem:** a captura sai de um ambiente que usa **somente fixtures na lista de permissão**, gerada **automaticamente a partir das fixtures aprovadas** (commit, responsável e aprovação registrados no manifesto; a lista inicial confirmada é `Atleta demonstração 01…05` e `Clube demonstração 01…03`; qualquer expansão exige commit, responsável e aprovação explícita); qualquer outro nome no ambiente reprova a captura.
2. **OCR:** rodar OCR (ex.: Tesseract) sobre o arquivo **final** (PNG e também AVIF/WebP gerados) e comparar todo o texto lido com a lista de permissão; **qualquer** nome próprio, ano de nascimento (`Nasc.`), CPF ou sigla de clube real reprova.
3. **Revisão visual manual em 100% das imagens**, por uma pessoa, registrada em um arquivo `privacidade-aprovacao.md` (imagem, data, responsável, resultado).
4. Sem logotipos de patrocinadores ou terceiros, sem "AO VIVO", **datas somente as que vêm da fixture aprovada** (registradas em `tools/allowlist.txt` e no manifesto; se for preciso criar datas fictícias, isso é **decisão formal de produto/jurídico** antes de entrar na lista; nada que pareça o calendário real da CBDA), legenda `dados de demonstração` presente.
5. Só então a imagem pode ser commitada; a pipeline **bloqueia** imagens sem registro de aprovação.

---

## 12. DECISÕES PENDENTES

| # | Tema | Opções | Impacto | Default provisório |
|---|---|---|---|---|
| DP1 | **Nome / grafia** | Vida Atleta · Vida Atleta CBDA · VidaAtleta · Vida de Atleta | Logo, título, copy, SEO | **Vida Atleta** |
| DP2 | **Natureza** | (A) produto com dados da CBDA · (B) produto oficial da CBDA | Uso de escudo, "oficial", eyebrow, rodapé | (A) |
| DP3 | **CTA / canal de entrada** | A. lojas · B. teste/homologação · C. web · D. sem canal | Botões, formulário, LGPD | **D** |
| DP4 | **Dados de demonstração** | A. padrão do app · B. fictícios plausíveis | Aparência das telas | A |
| DP5 | **Slogan "centésimo"** | manter H1 · usar H2 · outro | Marca | **RESOLVIDA pelo responsável: H1 "Do evento ao centésimo."** (fallback `H1_VARIANT=literal`) |
| DP6 | **Fotografia** | usar `event-hero.png` (validar) · banco licenciado · sem foto (raias em SVG) | Hero e texturas | Plano B gráfico até validar |
| DP7 | **Ato 3 sem captura** | **Versão A:** captura real do gráfico de parciais (e, se houver, da simulação) · **Versão B:** seção mantida com **diagrama abstrato** "construção do tempo" (SVG, rotulado "Ilustração", **sem** imitar a tela do app e **sem** link de simulação) · cortar o Ato 3 | A seção mais importante | **Versão B** até a captura chegar; a troca por A não muda o layout. Ponto de troca: `TEMPO_MODE=captura ou ilustracao` |
| DP8 | **Rankings** | fora · incluir quando liberado | Escopo | Fora |
| DP9 | **Modalidades** (águas abertas, polo) | só natação · mencionar boletins de outras modalidades | Mensagem | Só natação |
| DP10 | **Privacidade/Termos no rodapé** | **Requisito:** (a) URL web aprovada ou (b) deep link para o app. *Exceção fora do padrão:* omitir, só com justificativa jurídica assinada | Legal; **bloqueante para produção pública** | Aguardar LEGAL-001 (só `INTERNAL_PREVIEW`) |

---

## 13. RISCOS

| Risco | Severidade | Mitigação |
|---|---|---|
| Faltam capturas reais do gráfico de parciais e da simulação (Ato 3) | **Alta** | DP7; pedir ao dev; plano B com aviso explícito |
| Dados pessoais/nomes reais nas telas | **Alta** | §11: origem só de fixtures em lista de permissão + OCR do arquivo final + revisão manual em 100% + registro de aprovação; `grep` **não** audita imagem e não conta como controle |
| Direito de imagem e marcas nas fotos (`event-hero`, `login-swimmer`, pódio) | **Alta** | Só fotografia validada; sem rosto; plano B em SVG |
| CTA prometer o que não existe (loja) | **Alta** | Default D; sem badges |
| Claims implícitos de tempo real ("AO VIVO", "acabou, o tempo está aqui") | **Média/Alta** | Usar "Acontecendo agora"; proibições §8.5 |
| Nome/natureza incertos gerando retrabalho | Média | `{NOME}` como token; DP1/DP2 |
| Fluxo real ter etapa a mais que "três telas" | Média | H2 do Ato 2 marcado [INFERÊNCIA]; validar na captura |
| App ainda em homologação; landing anuncia produto instável | Média | Nota de estado só se DP2/DP3 exigirem; não prometer data |
| Densidade técnica assustar leigos | Média | Texto antes da tela; hero explica em 5 s |
| Animações pesarem no mobile | Média | Orçamento §9; sem libs; parallax só no desktop |
| Contraste do lima | Média | Lima nunca em texto sobre fundo claro |
| Referências vistas em navegador (desktop e mobile); animações e rolagem completa só por captura estática | Baixa | Adendo registra o que mudou (regras de lima e de tipografia); revisão de motion das referências fica dispensada porque não são modelo |
| Rubik sem `tnum` | Baixa | Verificar; fallback por largura fixa |

---

### Adendo: referências (`referencias.md` lido integralmente: 3 URLs)

**Confirmado no HTML bruto (2026-09-24):** swimer.app (título "Swim Results, AI Coach & Community"; textos "AI Coach", "Top 8%", "World Aquatics", "Get Full Access", "Pricing", fonte Space Grotesk); duoswim.com ("Train Smarter", "100,000", App Store e Google Play, Strava); commitswimming.com ("Book a demo", "Pricing"). **Revisão visual em navegador (Playwright/Chromium, 1440 e 390 px, 2026-09-24), registrada abaixo.**
**O que a revisão visual mostrou:**
- **swimer.app:** fundo quase preto com ciano neon, **globo 3D** com contadores de nadadores, headline em caixa alta condensada, selo "Get Full Access Now for Free! (limited spots)", botão com "282 spots left" (escassez), faixa de logos de federações, celular preto com texto animado. É o oposto do tom institucional e sóbrio; a faixa de logos mostra que o CBDA aparece como fonte de dados de terceiros.
- **duoswim.com:** fundo quase preto, **headline gigante em verde-limão neon** ("Train Smarter. Swim Faster."), selo "100,000+ swimmers", badges App Store/Google Play, fileira de celulares sobrepostos, **toast de prova social** ("Violet swam 1.3k · 2h ago"). **Risco direto para nós:** lima sobre fundo escuro em título grande é a assinatura visual do DuoSwim, daí as regras de lima (texto ≤ 24 px, fundo nunca preto, ≤ 5% da área).
- **commitswimming.com:** fundo claro, corte diagonal com laptop e listras azuis inclinadas, **títulos em itálico condensado em caixa alta**, banner de consentimento de cookies. Aproveitável: screenshot grande com propósito, hero claro; evitar: itálico condensado e diagonais.
- **Nenhuma** das três é sobre dado oficial de competição; todas em inglês, crescimento e assinatura. Confirma o uso das referências por negação.

**Decisões que dependem das referências:** nenhuma é estrutural. Elas foram usadas **por negação** (o que não fazer: IA, social, planos, lojas, depoimentos) e por nível de acabamento (screenshots grandes, fotografia de água). Se a revisão visual contradisser isso, o que pode mudar é o **tratamento do hero**, não a narrativa. O swimer.app **exibe resultados** (World Aquatics) além do coach de IA; isso reforça que a diferença do Vida Atleta é o recorte de dado oficial e de competição, sem coach, social ou ranking.

## 14. CRITÉRIOS DE ACEITAÇÃO

**Dois objetivos de publicação, separados formalmente.** (1) **Apresentação / pré-lançamento:** `CTA_MODE=presentation`, objetivo *apresentar* o produto; é o que esta direção entrega por padrão. (2) **Uso:** objetivo *incentivar a utilização*; **bloqueia `CTA_MODE=presentation`** e exige `stores` ou `web` com URL real e microcopy de login validada. Toda publicação declara qual dos dois objetivos cumpre.

O frontend **pode começar já com os defaults provisórios**, e cada decisão pendente tem um **ponto de troca** que não altera o layout: DP1 → token `{NOME}`; DP2 → flag `CBDA_LOCKUP`; DP3 → `CTA_MODE` ∈ {`presentation` (default), `stores`, `web`} (**`waitlist` fora do enum**: oportunidade não implementável), sem badge de loja; e uma flag **separada** `INTERNAL_PREVIEW=true|false` (default `true` no desenvolvimento; **o build de produção falha com `true`**); DP7 → `TEMPO_MODE` (default ilustração). O que **bloqueia a publicação** (não o início do frontend): (1) **todas** as telas usadas (**bloqueantes:** hero *Resultados da Prova*, Ato 2 *Calendário/Evento/Resultados*, Ato 5 *Quadro de Medalhas/Calculadora*; **são opcionais: *Boletins* (A7, vira bloco de texto) e o aviso *Dados desatualizados* (A9)**: só exige aprovação se a imagem for usada, e sem ela a seção Fonte dos dados publica apenas com diagrama e as quatro regras) em **captura real do app** (re-render do Stitch não é publicável), **todas com dados de demonstração e checklist de privacidade (§11) aprovado**; (2) validação de direito de uso de qualquer foto e dos logos CBDA; (3) `CTA_MODE` de produção definido: `presentation` (página de apresentação) **ou** DP3 resolvida em `stores`/`web`; e `INTERNAL_PREVIEW=false`; (4) LEGAL-001 resolvida com a forma (a) ou (b) da DP10 (ou a exceção jurídica assinada).

**Produto:** toda funcionalidade citada consta em `facts.md` como CONFIRMADA; nenhuma de "NÃO CONFIRMADO".
**Fidelidade:** *Revisão interna:* re-render do Stitch permitido **somente** com marca d'água `PLACEHOLDER — NÃO PUBLICAR`. *Produção:* **apenas captura real do app** com dados de demonstração, com o bloqueio de privacidade da §11 aprovado; nenhum dado pessoal.
**Identidade:** cores, fontes, raios-base e linguagem de botões vêm do app; tokens editoriais de layout, sombra de mockup e SVGs só os da lista da §3.3; lima só em friso, botão primário e valor em destaque; sem roxo, sem vidro, sem grade de cards.
**Narrativa:** o visitante entende em 5 s "consulta de resultados e provas da natação" e percorre `problema → evento → prova → tempo por dentro → fonte dos dados → entrada`.
**Copy:** passa no teste de troca; nenhuma palavra da lista de proibições; sem números inventados; CTA coerente com o canal real.
**Motion:** cada animação tem propósito declarado; reduced-motion preserva todo o conteúdo; nada acima do orçamento.
**Técnico:** sem erros de console, imagens quebradas ou overflow em 360/768/1440 px; contraste AA; foco visível; LCP ≤ 2,5 s; SEO básico; nenhum badge de loja sem canal.
**Juiz (OpenAI):** notas ≥ 9 em todos os critérios e nenhum problema crítico/alto, em `--focus conceito` (este documento) e depois em `--focus full` (a página).


---

## ANEXO A: decisões do responsável (trechos literais do pedido de implementação, arquivado em `fila-implementacao.md`)

- "Headline: **Do evento ao centésimo.**" e "Subheadline: Calendário de eventos, programa de provas, resultados e parciais da natação brasileira, com dados da CBDA. Você abre o evento, escolhe a prova e vê o tempo, e como ele foi feito." *(a subheadline foi ajustada nesta direção para não sugerir que toda prova tem parciais; ver a tabela de divergências em `fila-implementacao.md`)*
- "Título: **O resultado existe. Chegar até ele é que dá trabalho.**" e "Texto: A informação está distribuída entre páginas, filtros e documentos difíceis de consultar no celular. Em dia de competição, isso pesa."
- "`CTA_MODE` Default: `D`. Ou seja: **Conhecer o Vida Atleta**. Não inventar link de loja." e "Não mencionar login no modo D."
- "`TEMPO_MODE` … Default `ilustracao`." e "O link 'Tempo por dentro' deve desaparecer se `TEMPO_MODE=ilustracao`."
- "Mobile: … barra de progresso de 3px no topo."
- Narrativa: "PROBLEMA → EVENTO → PROVA → TEMPO POR DENTRO → DEPOIS DA PROVA → FONTE DOS DADOS → ENTRADA".
