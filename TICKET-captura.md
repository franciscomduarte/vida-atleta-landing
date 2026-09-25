# TICKET: captura das telas do app com dados de demonstração

Estado: **ABERTO, sem responsável**. Bloqueia a **publicação** da landing, não o desenvolvimento (que roda em `INTERNAL_PREVIEW=true` com placeholders marcados).

## Contexto verificado (2026-09-24)
- O app Flutter não liga os repositórios `fake_*` em execução: `lib/main.dart` só tem `VISUAL_TEST_MODE` (mantém a splash) e a documentação (F001, README) diz que falta de configuração não aciona fallback fake. Os fakes existem apenas nos testes.
- Fakes existentes: `fake_event_repository`, `fake_race_results_repository`, `fake_event_roster_repository`, `fake_bulletin_repository`, `fake_news_repository`, `fake_base_time_repository`, `fake_athlete_repository`, `fake_federation_repository`.
- Flutter SDK do projeto: `C:\projetos\vida-atleta-natacao-app\.flutter-sdks\flutter-3.47.2`.

## Decisão necessária (dono do app)
Autorizar e atribuir um **harness de captura** no repositório do app (alterar o app é vedado sem autorização): por exemplo, um teste de widget que monta as páginas reais com os repositórios `fake_*`, carrega Lato e Rubik e exporta PNG por tela. Alternativa: outro caminho definido pelo dono do app.

## Campos a preencher
| Campo | Valor |
|---|---|
| Responsável pela captura | |
| Responsável pela privacidade (revisor) | |
| Comando do harness | |
| Commit do app usado | |
| Data de entrega | |
| `demo-data.json` aprovado (caminho) | |

## Mapa fixture → asset
| Asset | Tela | Fixture / repositório fake | ID de evento/prova/boletim | Status |
|---|---|---|---|---|
| A1, A4 | Resultados da Prova | `fake_race_results_repository` | | PENDENTE |
| A2 | Calendário de eventos | `fake_event_repository` | | PENDENTE |
| A3 | Detalhe do evento | `fake_event_repository` | | PENDENTE |
| A6 | Quadro de medalhas | `fake_event_roster_repository` | | PENDENTE |
| A8 | Calculadora | `fake_base_time_repository` | | PENDENTE |
| A7 (opcional) | Boletins | `fake_bulletin_repository` | | PENDENTE |
| A9 (opcional) | Aviso de dados desatualizados | `fake_event_repository` com `isStale` | | PENDENTE |
| A5 (opcional) | Parciais (gráfico e tabela) | `fake_race_results_repository` | | PENDENTE |
