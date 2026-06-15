# TCC Front Performance

Protótipo experimental para comparar o desempenho front-end de duas versões da mesma aplicação web.

O projeto faz parte do TCC **"Otimização de Recursos Front-End e Desempenho de Aplicações Web: Um Experimento Controlado"**.

## Objetivo

Avaliar o impacto de técnicas de otimização front-end sobre métricas de desempenho medidas com Lighthouse.

Foram comparadas duas versões equivalentes de uma loja experimental de produtos:

- **Versão A (`dist-a`)**: versão controle, com imagens JPG originais e arquivos não minificados.
- **Versão B (`dist-b`)**: versão otimizada, com imagens WebP, compressão, redimensionamento, lazy loading e minificação de HTML, CSS e JavaScript.

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

- HTML
- CSS
- JavaScript
- Node.js
- Gulp
- Sharp
- Docker
- Nginx
- Lighthouse

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
npm start
```

Acesse:

- Versão A: `http://localhost:8081`
- Versão B: `http://localhost:8082`

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

- Conversão de imagens JPG para WebP.
- Redimensionamento de imagens.
- Compressão de imagens.
- Uso de `loading="lazy"`.
- Uso de `decoding="async"`.
- Minificação de HTML.
- Minificação de CSS.
- Minificação de JavaScript.

## Coleta Lighthouse

A coleta foi realizada com Lighthouse 13.2.0 no Chrome/Chromium, em modo Navigation, perfil Desktop e categoria Performance.

Foram feitas cinco execuções para cada versão em guia anônima.

Resumo dos resultados preliminares:

| Métrica | Versão A | Versão B | Resultado |
|---|---:|---:|---|
| Performance Score médio | 33,8 | 82,0 | melhora de aproximadamente 142,6% |
| FCP médio | 0,20 s | 0,20 s | sem variação relevante |
| LCP médio | 12,46 s | 0,31 s | melhora de aproximadamente 97,5% |
| Speed Index médio | 0,28 s | 0,20 s | melhora de aproximadamente 29,6% |
| TBT médio | 996,65 ms | 0 ms | redução de 100% |
| CLS médio | 0,376 | 0,376 | sem variação |
| Requisições da aplicação | 17 | 17 | sem variação |
| Tamanho total | 36.468,65 KiB | 435,08 KiB | redução de aproximadamente 98,8% |

O relatório completo está em [`results/coleta-lighthouse.md`](results/coleta-lighthouse.md).

## Interpretação preliminar

Os resultados indicam que a versão otimizada reduziu drasticamente o peso dos recursos carregados e melhorou métricas importantes de desempenho, principalmente LCP, TBT, Speed Index e Performance Score.

A quantidade de requisições permaneceu igual nas duas versões. Portanto, o principal ganho observado não veio da redução de requisições, mas da redução do tamanho dos arquivos carregados.

O CLS permaneceu alto e igual nas duas versões, sendo uma limitação identificada para melhoria futura.

