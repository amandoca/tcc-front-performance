# TCC Front Performance

Protótipo experimental para comparar o desempenho front-end de duas versões da mesma aplicação web.

O projeto faz parte do TCC **"Desempenho de uma aplicação web mediante otimizações de recursos front-end"**.

## Objetivo

Avaliar o impacto de técnicas de otimização front-end sobre métricas de desempenho medidas com Lighthouse.

Foram comparadas duas versões equivalentes de uma loja experimental de produtos:

* **Versão A (`dist-a`)**: versão de referência, com imagens JPG originais e arquivos não minificados.
* **Versão B (`dist-b`)**: versão otimizada, com imagens WebP, compressão, redimensionamento, lazy loading e minificação de HTML, CSS e JavaScript.

## Estrutura do projeto

```text
.
├── src/                 # Código-fonte base da aplicação
├── dist-a/              # Versão A: controle
├── dist-b/              # Versão B: otimizada
├── results/             # Resultados e sínteses da pesquisa
├── docker-compose.yml   # Execução local com Nginx
├── gulpfile.js          # Processo de build das versões A e B
├── package.json         # Scripts e dependências
└── README.md
```

## Tecnologias utilizadas

* HTML
* CSS
* JavaScript
* Node.js
* Gulp
* Sharp
* Docker
* Nginx
* Lighthouse

## Como executar

Instale as dependências:

```bash
npm install
```

Gere as duas versões:

```bash
npm run build
```

Suba os contêineres:

```bash
docker compose up
```

Acesse:

* Versão A: `http://localhost:8081`
* Versão B: `http://localhost:8082`

## Scripts disponíveis

```bash
npm run build:a
```

Gera somente a versão A.

```bash
npm run build:b
```

Gera somente a versão B.

```bash
npm run build
```

Gera as versões A e B.

```bash
npm start
```

Executa as duas versões com Docker e Nginx.

## Otimizações aplicadas na versão B

* Conversão de imagens JPG para WebP.
* Redimensionamento de imagens.
* Compressão de imagens.
* Uso de `loading="lazy"`.
* Uso de `decoding="async"`.
* Minificação de HTML.
* Minificação de CSS.
* Minificação de JavaScript.

## Coleta final - TCC v1

Estudo de caso com análise quantitativa e descritiva de um catálogo de 12 produtos. As otimizações foram avaliadas em conjunto, sem separar o efeito de cada técnica.

Foram realizadas dez execuções por versão com Lighthouse 13.4.1 no painel DevTools do Chrome 153, perfil Desktop. A foi medida primeiro, seguida de B, no mesmo computador. As duas versões receberam a mesma reserva de espaço na grade de produtos antes das medições.

| Métrica (média) | Versão A | Versão B |
| --- | ---: | ---: |
| Score (pontos) | 46,400 | 100,000 |
| FCP (ms) | 200,669 | 212,700 |
| LCP (ms) | 9.988,669 | 376,635 |
| Speed Index (ms) | 424,425 | 235,479 |
| TBT (ms) | 1.694,400 | 9,434 |
| CLS | 0,000 | 0,000 |
| Requisições | 17,000 | 17,000 |
| Volume (MB) | 37,344 | 0,446 |

O score aumentou 53,6 pontos; o LCP caiu 96,23% e o volume transferido, 98,81%. O FCP aumentou ligeiramente. O CLS permaneceu zero em ambas as versões; esse resultado não é efeito exclusivo das otimizações de B. As conclusões se restringem ao caso e ao ambiente medido, sem testes de significância estatística.

- [Resultados finais e valores individuais](results/coleta-final.md)
- [Relatórios JSON da amostra final](results/coleta-final/)
- [Ambiente e rastreabilidade](results/ambiente-coleta-final.md)
- [Coletas e diagnósticos históricos](results/historico/README.md)
- [Texto do TCC v1](https://docs.google.com/document/d/1lwaUtnISOknhoAuN6STcu7QRu0l05NpbfSGWZ2daqjA/edit)

A tag `tcc-v1` marca o código e os dados consolidados para essa versão do trabalho. O Google Docs permanece editável e pode evoluir após essa marcação.
