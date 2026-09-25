# PRODUCT DNA — VIDA ATLETA

Etapa 1 (Product Intelligence). Nada da landing foi implementado. `facts.md` é a versão enxuta usada pelo juiz.
Legenda: **[FATO]** confirmado em código/documentação · **[INFERÊNCIA]** deduzido · **[OPORTUNIDADE]** ideia de marketing · **[NÃO CONFIRMADO]**.

## 0. Achados que mudam o projeto

1. **Existem dois "apps".** O brief aponta `C:\projetos\vidaatleta`, mas ele é um **protótipo web Next.js** com dados de exemplo (`mock-data.ts`, "não são resultados oficiais"), marca "Vida de Atleta", paleta CBDA antiga (#114e8b/#f9af0d) e copy de marketing ("ao vivo, sem atraso", "curva de evolução", "favoritos notificados") que o produto real **não entrega**. O produto real é o **app Flutter** `C:\projetos\vida-atleta-natacao-app` (2.0.0, `com.bigmidia.vidaatleta.cbda`), que casa com as telas "Mobile Nativo" do Stitch. Usei o Flutter como fonte de verdade. **[FATO]**
2. **A identidade real** é royal `#034fcf` + navy + **lima `#caf51a`**, Rubik + Lato, e não a do protótipo web. **[FATO]**
3. **O Stitch contém telas que não existem no app** (Módulo Pro, Assinatura CBDA Pro, Duelo Histórico, botão Balizamento). O `telas.md` lista 14; o projeto tem ~29. **[FATO]**
4. **Nenhuma versão está em loja** segundo o repositório ("beta de homologação"). O CTA da landing depende disso. **[FATO]**
5. **Privacidade:** base majoritariamente de menores; nomes reais, fotos e nascimento estão bloqueados por regra de produto (PRIV-001). Algumas telas do Stitch trazem nomes que parecem reais. **[FATO]**

## 1. Resumo executivo

O Vida Atleta é o "aplicativo oficial Vida Atleta" (pubspec) com identidade e dados da CBDA (relação institucional exata: pendente). Transforma o dado oficial do SGE (calendário, provas, resultados, parciais, recordes, medalhas, clubes, boletins, notícias) em uma consulta rápida no celular, pensada para o dia de competição. Não é app de treino nem rede social. O valor está na **confiança do dado oficial** e na **velocidade até a prova e o tempo**.

## 2. Stack tecnológica **[FATO]**

Flutter (Dart 3.13; Android, iOS, Web para QA), `go_router`, Firebase (Auth: Google/Apple/e-mail; Firestore para perfil mínimo; Cloud Messaging/APNs), `local_auth` (biometria), `share_plus`, `url_launcher`, `shared_preferences`. Dados: API REST `restvanatacao` (somente leitura, IDs opacas, allowlist, paginação, `Retry-After`). Arquitetura por feature (`data/domain/presentation`). Design tokens W3C em JSON gerando tema Dart (fonte: Figma "APP CBDA / K9"). Time de 2 devs + IA, empresa Bigmidia. CI Bitbucket.

## 3. Funcionalidades

### CORE (o app existe por causa disso)
| Funcionalidade | O que faz | Útil para | Problema | Tela | Benefício comunicável |
|---|---|---|---|---|---|
| Calendário + "Acontecendo agora" | Lista eventos por temporada, busca, filtros; destaca o que está em andamento | atleta, família, público | achar o evento certo entre páginas e PDFs | Início, Calendário | "O evento que está rolando e os próximos, no calendário oficial" |
| Detalhe do evento + programa de provas | Local (mapa), organização, piscina, provas com situação, documentos | atleta, família | saber onde/quando/qual prova | Detalhe do Evento | Programa completo do evento no bolso |
| Resultados da prova | Fases, séries, pódio, classificação, tempo oficial, recordes aplicáveis | todos | chegar ao resultado em poucos toques | Resultados da Prova | Tempo oficial ao centésimo, da série à final |
| Parciais + gráfico de ritmo | Parciais oficiais sob demanda, gráfico interativo, tabela alternativa | atleta, técnico | entender como o tempo foi construído | Resultados (expansão) | Ver a prova por dentro |
| Simulação da prova | Reproduz visualmente prova individual concluída com parciais oficiais e recorde | todos | reviver a prova | Resultados | Rever a prova, raia a raia |

### IMPORTANTES
| Funcionalidade | Nota |
|---|---|
| Quadro de medalhas, clubes, atletas inscritos | por evento; nomes no formato público |
| Boletins oficiais | busca e filtros; leitura do texto. PDF/anexo **[NÃO CONFIRMADO]** (F017: `arquivo` sempre nulo) |
| Notícias | esportes aquáticos |
| Calculadora de pontuação | fórmula World Aquatics, faixas de nível |
| Perfil esportivo do atleta | resumo minimizado, sem foto/nascimento |
| Push público + preferências de conteúdo | opt-in, por categoria; sem dado pessoal |
| Favoritos de evento | locais (sem conta) |

### SECUNDÁRIAS
Federações, tema claro/escuro, meu perfil (nome, gênero), biometria local, compartilhar evento, menu lateral.

### INTERNAS / NÃO RELEVANTES PARA LANDING
Login/termos/Firebase, CI, ADRs, gates (PRIV/SEC/LEGAL), skeletons/estados de erro, governança.

### NÃO CONFIRMADO (não anunciar)
Módulo Pro/Desempenho Pro, Assinatura Pro, projeção de índices, Duelo Histórico, Balizamento dedicado, "Salvar no meu histórico", Atletas que sigo, idioma, ajuda/fale com a CBDA, carteirinha, comparador, gamificação, retrospectiva, "A Prova Inteira" ao vivo, módulo treinador, vínculo pai/atleta, push pessoal por atleta, **rankings** (prévia interna, bloqueada), evolução/curva do atleta, números agregados.

## 4. Principais fluxos **[FATO]**

1. Abrir → login (Google/Apple/e-mail) → (opcional) biometria → preferências de conteúdo (opcional) → **Início**.
2. **Início → evento em andamento → programa de provas → prova → resultados → parciais/gráfico → simulação.**
3. Calendário → temporada/busca/filtros → evento → favoritar/compartilhar/abrir mapa.
4. Evento → quadro de medalhas → clubes → atletas inscritos → perfil esportivo.
5. Boletins/Notícias: lista → filtro → leitura/PDF.
6. Calculadora: piscina + sexo + prova + tempo → pontos e faixa.

## 5. Públicos

Comprovados por documentos: **atletas** e **familiares** (primário), **técnicos e clubes** e **público da modalidade** (secundário). Ordem de prioridade ainda `A VALIDAR` (PROD-001). Não há fluxo de pai/treinador/vínculo no app atual. **[FATO]**

## 6. Problemas resolvidos **[FATO — docs/produto/visao.md]**

Informação espalhada em páginas, filtros e documentos difíceis no celular; no dia da competição, chegar ao evento→prova→resultado com poucos passos; falhas de rede parecendo "sem resultado" (estados honestos: carregando/vazio/erro/offline/desatualizado).

## 7. Proposta de valor

Do dado oficial ao tempo da prova em poucos toques. **[INFERÊNCIA a partir de visao.md]** Formulação de trabalho (não é copy final): *o calendário, os resultados e os boletins oficiais da CBDA no celular, com o tempo ao centésimo e a prova inteira por dentro.*

## 8. Diferenciais concretos

- Dado oficial da CBDA/SGE, com origem e atualização visíveis. **[FATO]**
- Parciais oficiais em gráfico + simulação visual da prova. **[FATO]**
- Pódio, séries e fases separadas (colocação geral × na série). **[FATO]**
- Recordes oficiais aplicáveis junto ao resultado. **[FATO]**
- Estados honestos (não confunde falha com ausência de resultado). **[FATO]**
- Push público opt-in, sem dado pessoal na tela bloqueada. **[FATO]**
- Frente a planilha/PDF: tudo em um lugar, no celular, com filtros. **[INFERÊNCIA]**

## 9. Identidade visual (DNA)

- **Cores:** royal `#034fcf` (marca, ação), navy `#18386c` (barra inferior, botão escuro), deepBlue `#0d3e90`, **lima `#caf51a`** (ação primária, friso, destaques em texto), azure `#0084ca`, cyan `#28a2dc`, green `#009c49` (sucesso/"Concluída"), amber `#f9af0d` (ouro), red `#f03636`, canvas `#f5f7fa`, borda `#e5e7eb`, silver/bronze no pódio. Tema escuro piloto: `#101b30`/`#1a2740`.
- **Gradientes:** cabeçalho royal→deepBlue 135°; ação lima→royal.
- **Assinatura visual:** cabeçalho azul com **friso lima** embaixo; barra inferior navy com friso lima em cima; wordmark itálico "VIDA ATLETA / CBDA" (lima no CBDA).
- **Tipografia:** Rubik (títulos, números) e Lato (corpo, botões), pesos 400–900; escala 10/12/14/16/20/24; UPPERCASE com tracking em rótulos e botões; tempos em fonte de largura fixa.
- **Componentes:** botões retangulares e pílula (raio 16/100); chips; cards brancos, raio 12–20, sombra azul suave; badges de estado (verde CONCLUÍDA, azul PRÓXIMO, lima INSCRIÇÕES ABERTAS, cinza ENCERRADO, "AO VIVO" com ponto); linhas de tabela com medalhas circulares ouro/prata/bronze; controle segmentado.
- **Ícones:** Material outlined. **Imagens:** fotos de eventos/piscina no topo dos cards de evento.
- Densidade: alta em tabelas, generosa em cards; sensação de painel oficial esportivo, limpo.

## 10. Inventário de telas (Stitch, ~29; analisei 13)

| Tela | Funcionalidade | Valor | Potencial na landing | Status |
|---|---|---|---|---|
| Início – Vida Atleta CBDA | Acontecendo agora, próximos, notícias | resumo imediato | **Hero** (alto): foto + cartão AO VIVO + friso lima | [FATO] |
| Resultados da Prova | pódio/tabela, seleção de prova | tempo oficial | **Hero/demo** (alto): tabela com medalhas | [FATO], mas mostra nomes de aparência real |
| Detalhe do Evento | local, programa, documentos | contexto do evento | **Storytelling** (alto) | [FATO]; botão Balizamento [NÃO CONFIRMADO] |
| Quadro de Medalhas | ouro/prata/bronze por clube | leitura rápida | **Dados** (médio-alto) | [FATO] |
| Calendário de Eventos | temporada, busca, filtros, cards | achar evento | **Demo** (alto) | [FATO] |
| Boletins Oficiais | busca, filtros, leitura (PDF **[NÃO CONFIRMADO]**) | oficialidade | **Prova de oficialidade** (médio) | [FATO] |
| Detalhe da Notícia | leitura | conteúdo | baixo | [FATO] |
| Calculadora | pontos WA, faixa | ferramenta | **Interação/CTA** (médio-alto) | [FATO]; "Salvar no histórico" [NÃO CONFIRMADO] |
| Rankings Nac./Int. | posição por prova | comparação | médio, **mas** F008 bloqueada e tela exibe nome+nascimento | [PRÉVIA] |
| Atletas | lista/índice alfabético | busca | baixo-médio | [FATO] (lista de atletas no código) |
| Perfil (5 variações) | conta, favoritos, tema | conta | baixo; mostra "Modo de visita" e "Atletas que sigo" | parcial |
| Menu lateral | navegação | mapa do app | médio (mostra amplitude) | [FATO] |
| Módulo Pro / Assinatura Pro / Duelo Histórico | — | — | **não usar** | [NÃO CONFIRMADO] |

**Melhores para:** hero → Início; demonstração → Resultados da Prova + gráfico de parciais (a tela do gráfico não está no Stitch; precisa captura do app); storytelling → Calendário → Detalhe do Evento → Resultados; dados → Medalhas; CTA → Calculadora; foto+UI → cards de evento do Início.
**Lacuna:** não há capturas do app Flutter em execução (parciais, gráfico, simulação). O Stitch é desenho, não produto rodando.

## 11. Análise das referências

(Leitura por resumo automático de HTML; refazer no navegador na etapa de Art Direction.)

- **swimer.app:** nadador submerso no hero, prova social por logos de federações, mockups de treino, "AI Coach", ranking social. Aproveitável: fotografia subaquática forte, faixa de credenciais oficiais, mock de "carreira". **Não combina:** AI coach, rede social, "Top 8% worldwide", logos de terceiros, CTA "free, limited spots".
- **duoswim.com:** fundo escuro, badges de loja, 3 passos, depoimentos, 44 planos, FAQ, blog. Aproveitável: processo em poucos passos, mockups em aparelho. **Evitar:** depoimentos, "100.000+ swimmers", planos, blog, tom "Train smarter".
- **commitswimming.com:** B2B para treinadores; grid de 9 features com screenshots grandes, before/after de problema, "founder message". Aproveitável: **screenshots grandes por funcionalidade** e contraste problema→solução. **Evitar:** tabela de preços, carrossel de 100 logos, "Book a demo".
- **Conclusão:** as três são produtos de **treino/gestão em inglês**. O Vida Atleta é **consulta a dado oficial**. Inspiração é de nível de acabamento, não de conteúdo.

**INSPIRAÇÕES APROVEITÁVEIS:** hero com fotografia de água + aparelho; screenshots grandes com um propósito cada; faixa de "fonte oficial"; passos curtos. **NÃO COMBINAM:** IA, social, treino, planos/preço, depoimentos, contagem de usuários. **EVITAR:** logos de terceiros, layouts e textos dessas páginas.

## 12. Product DNA (síntese)

- **O que é:** app oficial de natação da CBDA para consultar eventos, provas e resultados com dado oficial.
- **Para quem:** atletas e famílias (primário); técnicos, clubes e público da modalidade (secundário).
- **Problema:** informação oficial espalhada e lenta no dia da prova.
- **Valor:** do calendário ao tempo oficial da prova em poucos toques.
- **Funcionalidades:** ver seção 3 (CORE + IMPORTANTES).
- **Diferenciais:** seção 8.
- **Fluxos:** seção 4.
- **Vocabulário:** Evento, Temporada, Acontecendo agora, Prova, Fase, Série, Final, Pódio, Raia, Parciais, Recorde, Índice, Quadro de medalhas, Boletins oficiais, Federação, Piscina 25m/50m, tempo oficial (mm:ss.cc), Preferências de conteúdo. Tom do app: direto, institucional-esportivo, CAIXA ALTA em rótulos.
- **DNA visual:** seção 9.
- **Provas (usáveis):** dados oficiais CBDA/SGE; formato mm:ss.cc; parciais e recordes oficiais; Android e iOS; push opt-in; sem foto/CPF/nascimento de atleta; mesmo identificador do app publicado (atualização). Sem números agregados (bloqueados).
- **Claims proibidos:** "ao vivo, sem atraso"/tempo real garantido; "melhor/mais completo/nº 1"; disponível na App Store/Google Play (não confirmado); rankings como funcionalidade liberada; IA, projeção, Pro, assinatura, duelo, treino; "seu filho/seus resultados" (sem vínculo pessoal no app); número de usuários, atletas ou resultados; depoimentos; "oficial" sem ressalva de que é produto da CBDA (é oficial, mas ainda em homologação); nomes ou fotos reais de atletas.

## 13. Riscos de uma landing genérica

O que uma IA faria e **quando não serve aqui**:
- Hero "Transforme seus treinos em evolução / Alcance seu potencial": o app **não treina nem mede evolução**; é consulta oficial. Fora de contexto e falso.
- Trio "para atletas, treinadores, pais" com cards: não há fluxo de treinador/pai; seria inventar personas.
- Grid de 6 cards com ícones + gradiente azul→roxo: a marca é royal + **lima**; roxo/gradiente aleatório apaga a assinatura (friso lima).
- Glassmorphism/dashboard escuro com gráficos bonitos: as telas reais são claras, densas e institucionais.
- Stock photo de nadador: já há fotos de eventos nos cards; e há risco de imagem de menor e de marcas (Speedo/World Aquatics aparecem nas fotos do Stitch).
- Depoimentos, "+10 mil atletas", 4,9★: inexistentes. Planos/preço/FAQ de SaaS: irrelevantes.
- CTA "Baixe agora" com badges de loja: **não há loja confirmada**.
- Ranking como estrela da página: bloqueado por privacidade.
- Onde clichês *fariam* sentido: movimento de água como metáfora de leitura de parciais (ritmo por 50m) é específico do produto; "o centésimo decide" só serve como ideia se o app mostra centésimos (mostra: mm:ss.cc) — cuidado para não repetir o slogan do protótipo sem decisão de marca.
- O verdadeiro diferencial visual (tabela de resultado com pódio, gráfico de parciais, friso lima) é **denso e técnico**: uma landing "limpa e aerada" demais perde isso.

## 14. Questões que ainda precisam ser investigadas

1. **Nome:** "Vida Atleta" (app) × "VidaAtleta" (brief) × "Vida de Atleta" (protótipo). Qual grafia e qual relação com a marca CBDA ("por CBDA" / "Vida Atleta CBDA")?
2. **CTA/ação de entrada:** existe página pública ou loja? O app exige conta (login) para usar; não há modo visitante. Qual é o destino do botão?
3. A landing é institucional CBDA ou do produto (Bigmidia)? Quem aprova textos e uso da marca CBDA/escudo?
4. Rankings: podem ser mostrados? (F008 fora do corte.) Balizamento existe?
5. Capturas do app **em execução** (gráfico de parciais, simulação, calculadora, drawer): rodar `tool/run_web_preview.sh` (exige token de QA que não tenho) ou receber prints.
6. Fotografia: origem e licença das imagens do Stitch/`assets/images`; direito de imagem dos atletas; marcas de patrocinadores nas fotos.
7. Nomes nas telas do Stitch (parecem reais e incluem nascimento): podemos substituir por dados fictícios nos mockups? (necessário.)
8. Fonte e licença: Rubik/Lato são OFL (ok para web).
9. Existe política de privacidade/termos públicos (LEGAL-001 pendente) para o rodapé?
10. Redes sociais/contato do produto; `sobre` (F024 em descoberta).
11. Divergência interna: barra inferior no código = Início/Eventos/Perfil/Rankings/Menu; no design system e Stitch = Início/Eventos/Resultados/Atletas/Perfil.
12. Público prioritário (PROD-001) e se águas abertas/polo aquático entram na mensagem (boletins cobrem outras modalidades; app é "natação").

## 15. Recomendação para a próxima etapa

1. **Resolver as questões 1, 2 e 3 com o dono do produto antes de Art Direction.** Elas definem nome, CTA e tom.
2. Obter capturas reais do app Flutter (ou aprovar recriar mockups a partir do Stitch com dados fictícios, deixando claro no `facts` que são ilustrativos).
3. Rodar o juiz sobre este `facts.md` (revisão de fatos) antes de Art Direction.
4. Depois: Art Direction → UX/UI → Copy → Motion, cada uma validada pelo juiz; Frontend só com decisões fechadas.
5. Estrutura provável a testar (não decidida): **problema → o evento → a prova → o tempo por dentro → oficialidade → entrada**, com telas reais como protagonistas e sem ranking/Pro.
