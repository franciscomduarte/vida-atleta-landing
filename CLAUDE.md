# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estado do projeto

Landing page do **VidaAtleta** (app de natação da CBDA). Ainda não há código do site, nem `package.json`, nem build/lint/testes: hoje o repositório só tem a especificação, as referências, as skills de processo e o juiz de qualidade. Ao criar o site, escolha a stack conforme a seção 25 da especificação e atualize este arquivo com os comandos. O diretório não é um repositório git.

## Documentos que mandam

- [especificacao.md](especificacao.md): requisitos completos (em português). Pontos que mudam decisões: **não inventar funcionalidades**, não copiar as referências ([referencias.md](referencias.md): swimer.app, duoswim.com, commitswimming.com), identidade visual derivada do app, respeitar `prefers-reduced-motion`, o processo obrigatório em etapas (seção 25) e o ciclo implementar → avaliar → corrigir (seções 26-29).
- [.claude/skills/ORQUESTRAÇÃO.md](.claude/skills/ORQUESTRAÇÃO.md): ordem das 7 skills locais (`01-product-intelligence` … `07-critical-design-review`). Nenhuma skill sobrescreve decisão anterior em silêncio: conflitos são registrados com decisão anterior, problema, proposta e motivo.
- Textos e conteúdo do site são em português do Brasil.

## Fontes externas ao repositório

- App real: `C:\projetos\vidaatleta` (Next.js 16, React 19, Tailwind 4). É a fonte de verdade de funcionalidades, cores, tipografia e terminologia. Lá há `AGENTS.md`/`CLAUDE.md` próprios, e `public/` tem `logo.png` e `hero-underwater.jpg`.
- Telas reais: [imagens-telas/telas.md](imagens-telas/telas.md) só lista 14 telas do projeto Stitch "Vida Atleta CBDA" (ID `11791370775734552648`). As imagens não estão no disco; devem ser baixadas pelo MCP `mcp__stitch__*` (ex.: `get_screen`) e depois com `curl -L`. Há várias variações de Perfil; escolher a que corresponde ao app implementado.

## Juiz OpenAI (gate de qualidade)

[tools/judge/judge.mjs](tools/judge/judge.mjs) avalia design, copy, UX e parte técnica com `gpt-5.5` (troque com `JUDGE_MODEL`). A chave `OPENAI_API_KEY` fica em `.env.local` (ignorado; nunca colocar em arquivos do site).

```bash
node tools/judge/judge.mjs --focus copy --facts facts.md --text <copy.md>
node tools/judge/judge.mjs --focus full --facts facts.md --images shots/desktop.png,shots/mobile.png --text <pagina.html> --label rodada-N
```

- `--focus`: `design | copy | ux | tecnico | full`. Relatórios em `tools/judge/runs/<label>.json`.
- Aprovação é calculada pelo script: todas as notas >= 9 e zero problemas críticos/altos (exit 0). Reprovado: corrigir os problemas e rodar de novo; não afrouxar o juiz para passar.
- `facts.md` (na raiz) deve ser gerado na etapa Product Intelligence a partir do código do app. Tudo que a página afirma e não está nele é tratado como alucinação crítica. Entrega ao usuário só após `--focus full` APROVADO.
