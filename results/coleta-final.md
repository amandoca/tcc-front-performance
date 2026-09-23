# Coleta final — TCC v1

Amostra exclusiva: os 20 JSONs em [coleta-final/](coleta-final/), dez por versão. Sessão de 22/09/2026, das 02:35:11 às 02:41:57 (America/Sao_Paulo; 05:35:11–05:41:57 UTC). A foi medida primeiro, seguida de B; a sequência não foi alternada nem sorteada.

Os relatórios anteriores e o diagnóstico são [históricos](historico/README.md) e não entram nestes cálculos. Não foram identificados timestamps duplicados, erros de execução ou avisos nos 20 relatórios. Todas as execuções foram incluídas.

## Síntese

| Métrica | A média | A mínimo | A máximo | B média | B mínimo | B máximo |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Score (pontos) | 46,400 | 45,000 | 51,000 | 100,000 | 100,000 | 100,000 |
| FCP (ms) | 200,669 | 200,050 | 202,509 | 212,700 | 200,029 | 260,000 |
| LCP (ms) | 9.988,669 | 3.660,439 | 12.862,509 | 376,635 | 298,977 | 508,000 |
| Speed Index (ms) | 424,425 | 324,445 | 596,412 | 235,479 | 201,127 | 280,964 |
| TBT (ms) | 1.694,400 | 948,000 | 2.181,000 | 9,434 | 0,000 | 34,933 |
| CLS | 0,000 | 0,000 | 0,000 | 0,000 | 0,000 | 0,000 |
| Requisições | 17,000 | 17,000 | 17,000 | 17,000 | 17,000 | 17,000 |
| Volume (MB) | 37,344 | 37,344 | 37,344 | 0,446 | 0,446 | 0,446 |

Ganho de score: 53,600 pontos. Redução de LCP: 96,229%. Redução do volume transferido: 98,807%.

## Valores individuais

| Execução | Score (pontos) | FCP (ms) | LCP (ms) | Speed Index (ms) | TBT (ms) | CLS | Requisições | Volume (MB) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A-01 | 45,000 | 200,713 | 12.860,713 | 363,994 | 2.181,000 | 0,000 | 17,000 | 37,344 |
| A-02 | 46,000 | 200,396 | 10.960,396 | 395,252 | 1.324,000 | 0,000 | 17,000 | 37,344 |
| A-03 | 45,000 | 202,509 | 12.862,509 | 351,110 | 2.141,000 | 0,000 | 17,000 | 37,344 |
| A-04 | 45,000 | 200,565 | 12.860,565 | 417,070 | 1.370,000 | 0,000 | 17,000 | 37,344 |
| A-05 | 51,000 | 201,047 | 3.661,047 | 352,716 | 1.603,000 | 0,000 | 17,000 | 37,344 |
| A-06 | 45,000 | 200,381 | 10.960,381 | 541,187 | 1.839,000 | 0,000 | 17,000 | 37,344 |
| A-07 | 45,000 | 200,197 | 12.860,197 | 324,445 | 2.157,000 | 0,000 | 17,000 | 37,344 |
| A-08 | 47,000 | 200,050 | 8.240,050 | 596,412 | 948,000 | 0,000 | 17,000 | 37,344 |
| A-09 | 50,000 | 200,439 | 3.660,439 | 354,705 | 1.991,000 | 0,000 | 17,000 | 37,344 |
| A-10 | 45,000 | 200,390 | 10.960,390 | 547,360 | 1.390,000 | 0,000 | 17,000 | 37,344 |
| B-01 | 100,000 | 201,318 | 298,977 | 220,963 | 0,000 | 0,000 | 17,000 | 0,446 |
| B-02 | 100,000 | 201,127 | 307,691 | 201,127 | 0,000 | 0,000 | 17,000 | 0,446 |
| B-03 | 100,000 | 200,072 | 420,072 | 218,610 | 0,000 | 0,000 | 17,000 | 0,446 |
| B-04 | 100,000 | 201,168 | 312,752 | 201,168 | 0,000 | 0,000 | 17,000 | 0,446 |
| B-05 | 100,000 | 202,660 | 335,991 | 225,763 | 0,670 | 0,000 | 17,000 | 0,446 |
| B-06 | 100,000 | 260,000 | 508,000 | 271,090 | 0,000 | 0,000 | 17,000 | 0,446 |
| B-07 | 100,000 | 200,495 | 433,118 | 239,474 | 14,753 | 0,000 | 17,000 | 0,446 |
| B-08 | 100,000 | 200,134 | 348,201 | 255,513 | 34,933 | 0,000 | 17,000 | 0,446 |
| B-09 | 100,000 | 200,029 | 354,551 | 240,124 | 18,985 | 0,000 | 17,000 | 0,446 |
| B-10 | 100,000 | 260,000 | 447,000 | 280,964 | 25,000 | 0,000 | 17,000 | 0,446 |

## Cálculo e interpretação

Score = `categories.performance.score × 100`. FCP, LCP, Speed Index, TBT e CLS provêm de `audits.<id>.numericValue`. Requisições = quantidade de itens de `audits.network-requests.details.items`. Volume = `audits.total-byte-weight.numericValue / 1.000.000` (MB decimal). Médias, mínimos e máximos usam os valores originais, com arredondamento apenas nesta apresentação.

As duas versões receberam a mesma reserva de espaço da grade de produtos antes da coleta. O CLS zero não deve ser atribuído exclusivamente às otimizações de B. O conjunto de otimizações foi avaliado em uma aplicação e um computador; não foram isolados efeitos individuais nem realizados testes de significância. FCP aumentou ligeiramente em B, embora LCP, Speed Index, TBT e volume tenham diminuído.

[Ambiente e rastreabilidade](ambiente-coleta-final.md). [Documento TCC v1](https://docs.google.com/document/d/1lwaUtnISOknhoAuN6STcu7QRu0l05NpbfSGWZ2daqjA/edit).
