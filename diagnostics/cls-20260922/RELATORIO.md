# Diagnostico CLS - 2026-09-22

## Escopo

Diagnostico preservando codigo, dependencias e builds existentes. Nenhum arquivo de `src`, `dist-a` ou `dist-b` foi alterado ou regenerado.

## Repositorio e estado local

- Diretorio: `/home/amanda/Documentos/ESALQ/tcc-front-performance`
- Branch: `main`
- Commit atual: `de57aa259f6973cab5aaaff146fa603b97ec4c54`
- Historico pertinente local: apenas `dd3839d Versao inicial do experimento front-end performance`
- Alteracoes nao commitadas antes do diagnostico: nenhuma detectada pelo `git status --short`.
- Alteracoes criadas nesta etapa: somente arquivos em `diagnostics/cls-20260922/`.

Arquivos inspecionados:

- `src/index.html`
- `src/styles/main.css`
- `src/scripts/main.js`
- `src/data/products.json`
- `dist-a/index.html`
- `dist-a/styles/main.css`
- `dist-a/scripts/main.js`
- `dist-a/data/products.json`
- `dist-b/index.html`
- `dist-b/styles/main.css`
- `dist-b/scripts/main.js`
- `dist-b/data/products.json`
- `gulpfile.js`
- `docker-compose.yml`
- `results/coleta-lighthouse.md`

## Hashes e arquivos servidos

Os hashes atuais de `src` batem com as referencias informadas do ZIP:

- `src/index.html`: bate
- `src/styles/main.css`: bate
- `src/scripts/main.js`: bate
- `src/data/products.json`: bate

Os mesmos quatro arquivos em `dist-a` tambem batem com `src`. Em `dist-b`, `index.html`, `main.css` e `main.js` diferem porque o `gulpfile.js` altera/minifica esses arquivos; `products.json` bate.

Os conteineres servem bind mounts locais:

- `tcc-app-a`: `dist-a` -> `/usr/share/nginx/html`, somente leitura, porta 8081
- `tcc-app-b`: `dist-b` -> `/usr/share/nginx/html`, somente leitura, porta 8082

Recursos baixados via `http://localhost:8081` e `http://localhost:8082` tiveram hashes iguais aos arquivos locais correspondentes.

## Relatorios e traces localizados

- No projeto: apenas `results/coleta-lighthouse.md`; nao ha JSON Lighthouse nem trace bruto da coleta dentro do repositorio.
- Fora do projeto, localizado: `/home/amanda/Documentos/ESALQ/VERSAO FINAL/Trace-20260921T222914.json.gz`
- Esse trace externo foi examinado e contem `13958` eventos, com `0` eventos `LayoutShift`.

## Auditoria diagnostica executada

Execucao unica em A:

- URL: `http://localhost:8081`
- Lighthouse: `13.4.1`
- Chrome: `HeadlessChrome/153.0.0.0`
- Canal: CLI
- Node usado para rodar Lighthouse: `v22.7.0`
- Categoria: Performance
- Form factor solicitado: desktop
- Diferenca relevante: execucao via CLI/headless, nao painel DevTools. O JSON tambem registra `screenEmulation.disabled: true`; portanto este resultado deve ser tratado como diagnostico separado, nao como amostra final.

Resultado:

- Performance score: `1`
- FCP: `0.2 s`
- LCP: `0.2 s`
- Speed Index: `0.2 s`
- TBT: `0 ms`
- CLS: `0`
- Itens em `layout-shifts`: vazio
- Trace da mesma execucao: `7247` eventos, `0` eventos `LayoutShift`

## Conclusao diagnostica

Fato observado: no estado local atual, os arquivos de `src` e `dist-a` conferem com os hashes de referencia do ZIP, e o Nginx serve esses mesmos arquivos. A auditoria CLI diagnostica de A nao reproduziu o CLS `0,376`; o trace salvo da mesma execucao tambem nao contem `LayoutShift`.

Calculo: nao houve deslocamento acumulado na execucao diagnostica porque a contagem de eventos `LayoutShift` foi zero e o audit `cumulative-layout-shift` retornou `numericValue: 0`.

Hipotese ainda nao comprovada: o CLS `0,376` pode depender da configuracao exata do painel DevTools, viewport, estado do navegador, timing de renderizacao ou outro detalhe da coleta original.

Causa sustentada pela evidencia atual: nenhuma causa pode ser afirmada. O elemento `section#products-section` aparecer nos relatios anteriores como deslocado nao basta, sem o trace da auditoria que gerou `0,376`, para demonstrar o evento precedente que causou o deslocamento.

## Arquivos gerados

- `diagnostics/cls-20260922/git-status.txt`
- `diagnostics/cls-20260922/git-log.txt`
- `diagnostics/cls-20260922/git-head-show.txt`
- `diagnostics/cls-20260922/sha256-current.txt`
- `diagnostics/cls-20260922/sha256-served.txt`
- `diagnostics/cls-20260922/docker-mounts.txt`
- `diagnostics/cls-20260922/served-a-*`
- `diagnostics/cls-20260922/served-b-*`
- `diagnostics/cls-20260922/lighthouse-a-diagnostic.report.json`
- `diagnostics/cls-20260922/lighthouse-a-diagnostic.report.html`
- `diagnostics/cls-20260922/lighthouse-a-diagnostic-0.trace.json`
- `diagnostics/cls-20260922/lighthouse-a-diagnostic-0.devtoolslog.json`
- `diagnostics/cls-20260922/lighthouse-a-summary.json`
- `diagnostics/cls-20260922/trace-layoutshift-summary.json`
- `diagnostics/cls-20260922/external-trace-20260921-summary.json`

## Correcao

Nao proponho aplicar correcao nesta etapa. A evidencia atual nao reproduz o deslocamento e nao sustenta uma causa unica comum a A e B.

Acao pratica para obter a evidencia faltante no DevTools: abra a auditoria Lighthouse que apresenta CLS `0,376` no Chrome DevTools e use a opcao de abrir o trace/registro da propria auditoria no painel Performance; salve/exporte esse trace bruto e anexe o arquivo JSON ou JSON.GZ correspondente.
