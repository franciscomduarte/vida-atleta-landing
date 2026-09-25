# FATOS CONFIRMADOS — Vida Atleta (fonte de verdade para o juiz)

Fonte primária: app Flutter `C:\projetos\vida-atleta-natacao-app` (docs/, CHANGELOG 2.0.0 de 10/09/2026, código em lib/) e telas do Stitch "Vida Atleta CBDA". O protótipo web `C:\projetos\vidaatleta` (Next.js) NÃO é fonte de funcionalidades: usa dados de exemplo e copy de marketing sem lastro.

## Identidade
- Produto: "Aplicativo oficial Vida Atleta para acompanhar a natação brasileira" (descrição do pubspec). Nome na interface: "Vida Atleta", com cabeçalho "VIDA ATLETA / CBDA". Bundle `com.bigmidia.vidaatleta.cbda`, projeto Firebase `vidaatleta-cbda`, desenvolvido pela Bigmidia sobre dados da CBDA (SGE). A frase exata da relação institucional ("produto oficial da CBDA" × "produto com dados da CBDA") NÃO está formalizada na documentação: é INFERÊNCIA forte, decisão pendente (uso do escudo/lockup CBDA e redação jurídica). Grafia do pedido: "VidaAtleta" (pendente).
- Dados oficiais vêm do sistema de gestão esportiva (SGE) da CBDA via API `restvanatacao`. Cada dado mostra origem/atualização quando disponível.
- Estado: versão 2.0.0, Flutter (Android e iOS, mais Web para QA). Nenhuma versão publicada em loja ainda no registro do repositório; "beta de homologação" em 10/09/2026. NÃO afirmar disponibilidade em App Store/Google Play.
- Substitui o app já publicado (mesmo `com.bigmidia.vidaatleta.cbda`), como atualização.

## Funcionalidades CONFIRMADAS (existem no código/CHANGELOG 2.0.0)
- Acesso: login com Google, Apple (iOS) ou e-mail e senha (Firebase); perfil mínimo obrigatório; termos e privacidade acessíveis; biometria local opcional. NÃO existe modo visitante nem login com Facebook.
- Início (landing do app): "Acontecendo agora" (eventos em andamento), "Próximos eventos", "Últimos boletins", "Últimas notícias".
- Calendário de eventos: seleção de temporada, busca por nome, filtros (estado, tipo, situação, só favoritos) em folha inferior, com o último recorte salvo no aparelho; cards de evento; situação do EVENTO (acontecendo agora / próximo / encerrado). A ficha F004 proíbe afirmar que estado, tipo e "acontecendo agora" sejam filtros "oficiais" (taxonomia pendente: PROD-011/TEC-014). Situação POR PROVA no programa NÃO CONFIRMADA.
- Detalhe do evento: nome, período, situação, local (com abertura no mapa), organização, tipo de piscina, programa de provas, documentos/resultados publicados, compartilhar, favoritar.
- Prova e resultados: tabela com colocação, raia, participante, entidade/clube, tempo oficial e (por rolagem horizontal) índice, tempo de balizamento e pontos; fases, séries, classificação, pódio com três atletas, melhores tempos, parciais oficiais carregadas sob demanda (ação desabilitada quando a API não publica parciais), gráfico interativo de ritmo das parciais (com tabela como alternativa), recordes oficiais aplicáveis, colocação geral e por série, tempo no formato oficial (mm:ss.cc), reprodução visual ("simulação") de provas individuais concluídas a partir dos resultados e parciais oficiais. Revezamento: composição exibida; simulação de revezamento NÃO existe.
- Quadro de medalhas por clube, clubes inscritos e atletas inscritos do evento (nomes públicos: primeiro nome + último sobrenome).
- Perfil esportivo do atleta: resumo oficial minimizado (nome público, clube, totais e marca oficial selecionada). Sem foto, sem nascimento completo.
- Rankings nacional e internacional (World Aquatics) existem como PRÉVIA INTERNA, fora do corte de 10/09 e bloqueados para liberação (PRIV-001/TEC-017). NÃO apresentar como funcionalidade liberada sem confirmação.
- Boletins oficiais (publicados pela CBDA e federações): lista ordenada do mais recente, com número, título, data e esporte, busca e filtros; leitura do texto. PDF/anexo e botão de baixar NÃO CONFIRMADOS (F017: o campo `arquivo` veio sempre nulo; depende do backend). O botão "Baixar" do Stitch é só desenho.
- Notícias dos esportes aquáticos: lista e leitura.
- Calculadora de pontuação (fórmula World Aquatics P = 1000 × (B ÷ T)³, tempos-base vindos da API): campos Piscina, Sexo (Misto desabilitado), Prova e Seu tempo (T); mostra pontos, tempo base, diferença e % do tempo-base; faixas: Desenvolvimento, Intermediário, Muito bom, Alto nível, Elite Mundial, Recorde Mundial. (Verificado em calculator_page.dart e score_calculator.dart.)
- Federações: diretório de federações.
- Favoritos de EVENTO (persistência local). Favorito de atleta NÃO liberado.
- Preferências de conteúdo (UFs e categorias), opcionais.
- Notificações push públicas (eventos, boletins, comunicados) no Android e iPhone, com opt-in e preferências por categoria. Push pessoal (resultado do meu atleta) NÃO liberado.
- Meu perfil (conta): nome e gênero editáveis. Tema claro/escuro (entregue).
- Navegação: barra inferior + menu lateral (drawer) com Início, Eventos, Resultados, Atletas, Notícias, Perfil, Notificações, Preferências de conteúdo, Boletins, Federações, Calculadora, Rankings.

## Estados honestos (verificado no código)
- Se o calendário está desatualizado, o app mostra o aviso "Dados desatualizados · <data de atualização>" (landing_page.dart `_StaleNotice`; `catalog.isStale`). Se uma fonte falha, mostra mensagem de erro com nova tentativa; falha em notícias/boletins não impede ver eventos.
- Fixtures de teste manifestamente fictícias existem nos repositórios `fake_*` do app: "Atleta demonstração 01…05", "Clube demonstração 01…03", eventos e provas com nomes genéricos (fake_race_results_repository.dart, fake_event_roster_repository.dart, fake_event_repository.dart).

## NÃO CONFIRMADO / NÃO EXISTE (não usar como funcionalidade)
- Coluna "+delta" (diferença para o 1º colocado) na tabela de resultados; situação por prova (Concluída/Em andamento) no programa; documentos oficiais (PDF) no detalhe do evento; botão Balizamento: aparecem só no Stitch.
- "Módulo Pro", "Desempenho Pro", "Assinatura CBDA Pro", projeção de índices, gap olímpico, exportar PDF de parciais (apenas desenhos no Stitch; F016/F-ATL-03 em descoberta).
- Duelo histórico / "Na esteira das lendas" (apenas Stitch).
- Balizamento como tela/botão dedicado, "Salvar no meu histórico CBDA", "Atletas que sigo" (F031, descoberta), idioma (F032, ideia), Central de ajuda / Fale com a CBDA (F025, descoberta), carteirinha, comparador de trajetórias (F009), gamificação "A Travessia" (F010), retrospectiva (F011), "A Prova Inteira" ao vivo (F012), módulo do treinador (F016), vínculo pai/treinador/atleta (F014), modo visitante.
- Resultado ao vivo minuto a minuto, "sem atraso", avisos por favorito, evolução/curva do atleta, comparação direta entre atletas: NÃO confirmados no app real (aparecem só no protótipo web).
- Números agregados (nº de atletas, provas, eventos): bloqueados (PROD-010/TEC-014). Não inventar números.
- Depoimentos, usuários, avaliações de loja, parcerias comerciais: inexistentes.

## Restrições de privacidade (regra do produto)
- Base majoritariamente de atletas menores. Em qualquer superfície pública: nome público (primeiro + último sobrenome) e clube; NÃO exibir CPF, nascimento completo, contato, foto de atleta. A landing não deve mostrar nomes reais de atletas nem imagens de menores; usar dados manifestamente fictícios ou recortes sem identificação.
- As telas do Stitch contêm nomes que parecem reais e anos de nascimento (ex.: tela de ranking): não reutilizar sem tratar.

## Identidade visual real (tokens do app)
- Primária royal `#034fcf`; navy `#18386c`; deepBlue `#0d3e90`; lima `#caf51a` (ação/friso); azure `#0084ca`; cyan `#28a2dc`; green `#009c49`; amber `#f9af0d`; red `#f03636`; canvas `#f5f7fa`; ouro/prata/bronze para pódio (`#f9af0d`/`#c0c0c0`/`#cd7f32`).
- Gradiente de cabeçalho royal → deepBlue (135°); friso lima sob o cabeçalho e sobre a barra inferior navy.
- Tipografia: Rubik (títulos, tabela numérica) e Lato (corpo/botões); predominância de CAIXA ALTA em rótulos e botões.
- Raios 8/12/16/20/100 (pílula); sombra sutil azul; cards brancos sobre canvas claro.

## Vocabulário do produto
Evento, Temporada, Acontecendo agora, Próximos eventos, Calendário, Prova, Fase, Série, Final, Eliminatórias, Pódio, Raia, Parciais, Recorde, Índice, Quadro de medalhas, Clubes, Atletas inscritos, Boletins oficiais, Notícias, Federação, Ranking nacional/internacional, Calculadora de pontuação (World Aquatics), Piscina 25m (curta) / 50m (longa), tempo oficial mm:ss.cc, Preferências de conteúdo, Favoritos.

## Problema documentado e vocabulário (fontes no repositório do app)
- Problema que o produto se propõe a resolver (docs/produto/visao.md, "Problemas que queremos resolver"): "A informação está distribuída entre páginas, filtros e documentos difíceis de consultar no celular." e "Durante uma competição, o usuário precisa chegar ao evento, à prova e ao resultado com poucos passos". Ambos são a motivação declarada do produto, não medição de desempenho.
- Vocabulário literal do app: a tela Início usa "Acontecendo agora", "Próximos eventos" (subtítulo "Competições do calendário oficial"), "Últimos boletins" ("Comunicados oficiais mais recentes"), "Últimas notícias" ("Novidades dos esportes aquáticos"). A ficha F004 fala em "calendário oficial de Eventos CBDA". Mesmo assim, a copy pública da landing prefere "calendário de eventos" até a decisão sobre a natureza institucional (DP2).
- Navegação real no código (brand_bottom_navigation.dart): Início, Eventos, Perfil, Rankings, Menu. No design system e no Stitch: Início, Eventos, Resultados, Atletas, Perfil. Divergência não resolvida.

## Assets existentes no repositório do app (C:\projetos\vida-atleta-natacao-app\assets)
- brand/: atleta.svg, cbda-shield.svg, cbda.svg, header-wordmark.svg, nav-center.svg, splash-welcome.svg, vida-atleta-symbol.svg, vida.svg.
- images/: event-card-1.png (1500×1000; medalhistas identificáveis, marcas FINA), event-card-2.png (1333×1000), event-hero.png (4080×2724; vista de cima, raias, nadadores pequenos), login-swimmer.png (2414×1610; atleta identificável, nome e marca visíveis na touca).
- fonts/: Lato Regular/Bold/Black e Rubik variável, com licença OFL.
- Licença e permissão de uso dessas imagens e do escudo/logo CBDA na landing: NÃO verificadas.

## Ícones e estados visuais (verificado no código)
- Ícones do app: Material Icons em variante outlined (ex.: `Icons.home_outlined`, `Icons.event_outlined`, `Icons.leaderboard_outlined` em brand_bottom_navigation.dart).
- Situações confirmadas do EVENTO: acontecendo agora, próximo, encerrado (`EventSituation`). Não há situação confirmada por prova. Cores de estado (verde = sucesso, âmbar = ouro etc.) vêm dos tokens; o mapeamento de cada rótulo para cada cor NÃO está confirmado além do que as telas reais mostrarem.

## Tokens completos do design system (fonte: C:\projetos\vida-atleta-natacao-app\design-system\README.md e tokens\vida-atleta.tokens.json, extraídos do Figma "APP CBDA / K9" em 31/08/2026)
- Cores: royalBlue #034fcf · navy #18386c · deepBlue #0d3e90 · lime #caf51a · azure #0084ca · cyan #28a2dc · green #009c49 · amber #f9af0d · steelBlue #165faa · gray #636363 (texto secundário e bordas leves) · red #f03636 · canvas #f5f7fa · borderSubtle #e5e7eb · muted #9ca3af · silver #c0c0c0 · bronze #cd7f32 · white #ffffff · black #000000 (só scrims). Tema escuro piloto (autoria interna, não extraído do Figma): canvasDark #101b30, surfaceDark #1a2740.
- Gradientes: cabeçalho royalBlue → deepBlue a 135°; ação lima → royal a 172,6°. Sombra do botão: 0 4px 4px rgba(3,79,207,0.10).
- Raios (px): 2, 8 (chips), 12 (campos), 16 (botões/cards), 20 (destaques), 100 (pílula). Bordas: 0,5 / 1 / 1,5 px.
- Tipografia: Lato (corpo, botões) e Rubik (títulos); pesos 400/500/600/700/900; escala 10/12/14/16/20/24; caixa alta em botões e rótulos.
- Barra inferior navy com friso lima; cabeçalho com gradiente.

## Rotas e telas do app (verificado em lib/app/app_routes.dart e lib/app/app.dart)
- Início: `/landing` · Calendário de eventos: `/events` · Detalhe do evento: `/events/:eventId` · Elenco do evento (medalhas, clubes, atletas): `/events/:eventId/roster` · Clube: `/events/:eventId/clubs/:clubId` · Prova e resultados: `/events/:eventId/races/:stageId` · Atleta: `/athletes/:athleteId` · Rankings: `/rankings` (prévia) · Notícias: `/news` · Boletins: `/bulletins` · Calculadora: `/calculator` · Notificações: `/notifications` · Federações: `/federations` · Perfil: `/profile` · Login: `/login`.
- A quantidade de linhas das fixtures de demonstração varia por repositório fake; o número de participantes de uma captura vem da fixture aprovada, não é fixado por este documento.

## Repositórios fake existentes no app (verificado em lib/features/*/data/fake_*.dart)
- `FakeBulletinRepository` ("sintético para testes determinísticos e demonstração local... os textos são manifestamente fictícios"; lista `_sample`, `pageSize` 3; opções de federação CBDA, Federação do Rio de Janeiro e Federação de São Paulo). Também existem `fake_event_repository`, `fake_race_results_repository`, `fake_event_roster_repository`, `fake_news_repository`, `fake_base_time_repository`, `fake_athlete_repository` e `fake_federation_repository`.
- As federações listadas são instituições, não pessoas; ainda assim, nenhum resultado fictício pode ser atribuído a elas na landing.

## Verificado por captura do app real (harness de captura, 2026-09-25; test/capture/landing_capture_test.dart no repositório do app, com fixtures fictícias)
- Resultados da prova (tela real): cabeçalho com nome da prova, selo de situação (ex.: CONCLUÍDA), data, categoria, chips (nº de atletas, nº de séries, FONTE OFICIAL); "Pódio dos melhores tempos" (3 cartões); "Quadro de Recordes" (ex.: Mundial); "Fases da competição" (Finais/Eliminatórias); "Séries da Prova"; tabela com colunas POS./RAIA, ATLETA/ENTIDADE, TEMPO (com tempo de balizamento entre parênteses) e IT (rolagem horizontal para mais colunas); rodapé de fonte ("Demonstração local · dados sintéticos · Atualizado em…" nas fixtures).
- Parciais (tela real): "Análise de Parciais", "Splits Oficiais da Raia N", alternância Gráfico | Tabela; gráfico "Parciais da prova" (parciais a cada 25 m nas fixtures), "Melhor parcial", "Média das parciais", "Oscilação", nota de que a primeira parcial inclui a largada; "Ritmo vs Mundial"; cartão "Simular esta série · Assistir" (simulação). O gráfico só habilita com `distanceMeters` nas parciais.
- Detalhe do evento (tela real): situação (ACONTECENDO AGORA), período, nome, "Piscina 50m", Local (com abertura de mapa), Organização, "Programa de Provas" com a situação de cada prova (ex.: CONCLUÍDA, ELIMINATÓRIAS), nº de séries e de atletas; botões compartilhar e favoritar. (Corrige o item anterior: situação por prova EXISTE no app real.)
- Calendário de eventos (tela real): "Competições oficiais em um só lugar", seleção de temporada, busca ("Buscar pelo nome, local ou organização"), chips "Eventos CBDA", "Filtros" e favoritos, alternância de visualização, "Acontecendo agora", card de evento com situação e link "Ver balizamento". Vocabulário do próprio app inclui "Competições oficiais".
- Quadro de medalhas (tela real): abas MEDALHAS / CLUBES / ATLETAS, pódio de clubes (Campeão, 2º e 3º lugar) e lista com ouro, prata, bronze e total, "Líder geral".
- Boletins (tela real): cabeçalho "Boletins cadastrados", busca por número ou título, filtros de federação e esporte, lista com número, título, data e esporte.
- Calculadora (tela real): "Calculadora de Pontuação", fórmula World Aquatics, campos Piscina, Sexo, Prova e Seu tempo; resultado com pontos, faixa (ex.: Muito bom), Tempo base (B), Seu tempo (T), Diferença e % do recorde.
- A barra de navegação inferior real contém Início, Eventos, Rankings e Menu (Rankings está na prévia interna); a landing recorta essa barra e não promove Rankings.
