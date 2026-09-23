# Ambiente de coleta final

## Computador

- Sistema operacional: Ubuntu 24.04.5 LTS (noble), Linux 7.0.0-31-generic, x86_64
- Processador: 12th Gen Intel(R) Core(TM) i5-1235U
- CPUs logicas: 12
- Nucleos fisicos reportados: 10
- Threads por nucleo: 2
- RAM total: 15 GiB
- Swap total: 4.0 GiB

## Ferramentas

- Google Chrome: 153.0.8010.36
- Lighthouse: 13.4.1, verificado no relatorio diagnostico local `diagnostics/cls-20260922/lighthouse-a-diagnostic.report.json`
- Lighthouse do painel DevTools: pendente; nao foi possivel verificar por comando local sem abrir o DevTools
- Node.js: v18.19.1
- npm: 10.9.0
- Docker: Docker version 29.1.3, build 29.1.3-0ubuntu3~24.04.2
- Docker Compose: Docker Compose version 2.40.3+ds1-0ubuntu1~24.04.1
- Nginx no host: pendente; comando `nginx -v` nao encontrado no host
- Nginx no conteiner A (`tcc-app-a`): nginx/1.31.1
- Nginx no conteiner B (`tcc-app-b`): nginx/1.31.1
- Imagem dos conteineres A e B: `nginx:alpine`

## Projeto

- Repositorio local: `/home/amanda/Documentos/ESALQ/tcc-front-performance`
- Branch atual: `fix/reserva-espaco-products-cls`
- Commit atual: `de57aa259f6973cab5aaaff146fa603b97ec4c54`

## Alteracoes ainda nao commitadas

Saida de `git status --short` no momento do registro:

```text
 M dist-a/styles/main.css
 M dist-b/styles/main.css
 M src/styles/main.css
?? diagnostics/
```

Observacao: este arquivo `results/ambiente-coleta-final.md` tambem passa a ser uma alteracao nao commitada apos sua criacao.

## Hashes SHA-256 dos CSS

```text
5b042740f9c5bae478e08953519849767ada24480786bf311d226f6cbf71fd91  src/styles/main.css
5b042740f9c5bae478e08953519849767ada24480786bf311d226f6cbf71fd91  dist-a/styles/main.css
2e793c2613a15e86e1580f07f6293523d2992fdb90f2ae137dc5c58ed31907f0  dist-b/styles/main.css
```
