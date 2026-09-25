# Landing do Vida Atleta (protótipo interno)

Estado: **`INTERNAL_PREVIEW=true`**, não publicável. Fonte de verdade do produto: app Flutter `C:\projetos\vida-atleta-natacao-app`.

## Como executar
```bash
npm install
npm run images                      # gera AVIF/WebP a partir de imagens-telas/captura
node tools/build-html.mjs           # gera site/index.html (usa site.config.json)
npm run dev                         # http://localhost:4173
node tools/qa/shots.mjs             # screenshots 360/390/768/1024/1440 + overflow + console
node tools/qa/perf.mjs              # LCP, CLS, long tasks, peso, axe-core
node tools/qa/reduced.mjs           # confere prefers-reduced-motion
```

## Capturas reais (harness)
`test/capture/landing_capture_test.dart` (no repositório do app, arquivo novo, sem tocar no código do app) monta as páginas reais com os repositórios `fake_*` e exporta PNG:
```bash
cd C:\projetos\vida-atleta-natacao-app
CAPTURE_OUT="C:/projetos/vida-atleta-landing/imagens-telas/captura" .flutter-sdks/flutter-3.47.2/bin/flutter.bat test test/capture/landing_capture_test.dart
```

## Configuração (`site.config.json`)
| Chave | Valor atual | Efeito |
|---|---|---|
| `ctaMode` | `presentation` | `presentation` (âncoras), `stores` (exige `androidUrl`/`iosUrl`), `web` (exige `webUrl`) |
| `tempoMode` | `captura` | `captura` usa a UI real de parciais; `ilustracao` usa faixa SVG rotulada |
| `internalPreview` | `true` | `false` exige `privacyUrl` e `termsUrl` e remove barra/`noindex` |
| `h1Variant` | `editorial` | `literal` troca o H1 sem mexer no layout |
| `cbdaLockup` | `false` | sem escudo/logo CBDA no lockup |
| `motionQaPassed` | `true` | liga M3 (fragmentos), M5 (faixa de parciais) e a barra de progresso mobile |
| `siteUrl` | vazio | quando preenchido, gera canonical e og:image |

## Documentos
`facts.md` (fonte do juiz) · `product-dna.md` · `direcao-criativa.md` · `fila-implementacao.md` · `TICKET-captura.md` · `demo-data.json` (dados de demonstração usados nas imagens e no HTML acessível).
