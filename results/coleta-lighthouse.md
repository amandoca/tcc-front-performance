# Coleta piloto - Lighthouse

> Histórico: estes resultados não integram a amostra final da v1. Consulte [os resultados finais](coleta-final.md).

## Ambiente de coleta

* Data da coleta: 15/06/2026, entre 03h37 e 03h42 aproximadamente, no horário de Brasília.
* Navegador: Chromium/Chrome 149.0.0.0.
* Sistema operacional: Linux x86_64.
* Ambiente de execução: Docker com Nginx.
* Versão A: http://localhost:8081
* Versão B: http://localhost:8082
* Ferramenta: Lighthouse 13.2.0 no Google Chrome/Chromium.
* Modo: Navigation.
* Dispositivo: Desktop.
* Categoria: Performance.
* Condição de execução: guia anônima, sem alertas de interferência de extensões.

## Dados coletados

| Versão | Execução | Performance Score |    FCP |     LCP | Speed Index |         TBT |   CLS | Requisições da aplicação | Tamanho total |
| ------ | -------: | ----------------: | -----: | ------: | ----------: | ----------: | ----: | -----------------------: | ------------: |
| A      |        1 |                27 | 0,20 s | 10,96 s |      0,26 s | 1.571,00 ms | 0,376 |                       17 | 36.468,65 KiB |
| A      |        2 |                27 | 0,20 s | 13,98 s |      0,33 s | 1.368,00 ms | 0,376 |                       17 | 36.468,65 KiB |
| A      |        3 |                32 | 0,20 s | 12,42 s |      0,27 s |   634,23 ms | 0,376 |                       17 | 36.468,65 KiB |
| A      |        4 |                28 | 0,20 s | 10,96 s |      0,31 s | 1.279,00 ms | 0,376 |                       17 | 36.468,65 KiB |
| A      |        5 |                55 | 0,20 s | 13,98 s |      0,25 s |   131,00 ms | 0,376 |                       17 | 36.468,65 KiB |
| B      |        1 |                82 | 0,20 s |  0,30 s |      0,20 s |        0 ms | 0,376 |                       17 |    435,08 KiB |
| B      |        2 |                82 | 0,20 s |  0,33 s |      0,20 s |        0 ms | 0,376 |                       17 |    435,08 KiB |
| B      |        3 |                82 | 0,20 s |  0,30 s |      0,20 s |        0 ms | 0,376 |                       17 |    435,08 KiB |
| B      |        4 |                82 | 0,20 s |  0,31 s |      0,20 s |        0 ms | 0,376 |                       17 |    435,08 KiB |
| B      |        5 |                82 | 0,20 s |  0,30 s |      0,20 s |        0 ms | 0,376 |                       17 |    435,08 KiB |

## Resumo da Versão A

| Métrica                  |         Média |   Menor valor |   Maior valor | Observação                                                                  |
| ------------------------ | ------------: | ------------: | ------------: | --------------------------------------------------------------------------- |
| Performance Score        |          33,8 |            27 |            55 | A versão A apresentou desempenho baixo, com variação principalmente no TBT. |
| FCP                      |        0,20 s |        0,20 s |        0,20 s | O primeiro conteúdo apareceu rapidamente.                                   |
| LCP                      |       12,46 s |       10,96 s |       13,98 s | O maior elemento visual demorou para ser carregado.                         |
| Speed Index              |        0,28 s |        0,25 s |        0,33 s | O conteúdo visual inicial apareceu rápido, apesar do LCP alto.              |
| TBT                      |     996,65 ms |     131,00 ms |   1.571,00 ms | Houve bloqueio relevante da thread principal, com variação entre execuções. |
| CLS                      |         0,376 |         0,376 |         0,376 | Houve deslocamento visual em todas as execuções.                            |
| Requisições da aplicação |            17 |            17 |            17 | Quantidade constante de recursos carregados.                                |
| Tamanho total            | 36.468,65 KiB | 36.468,65 KiB | 36.468,65 KiB | Peso total elevado por causa das imagens JPG originais.                     |

## Resumo da Versão B

| Métrica                  |      Média | Menor valor | Maior valor | Observação                                                                                           |
| ------------------------ | ---------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------- |
| Performance Score        |       82,0 |          82 |          82 | A versão B apresentou desempenho superior à versão A, embora o CLS tenha limitado a pontuação final. |
| FCP                      |     0,20 s |      0,20 s |      0,20 s | O primeiro conteúdo apareceu rapidamente.                                                            |
| LCP                      |     0,31 s |      0,30 s |      0,33 s | O maior elemento visual carregou rapidamente.                                                        |
| Speed Index              |     0,20 s |      0,20 s |      0,20 s | A renderização visual inicial foi estável.                                                           |
| TBT                      |       0 ms |        0 ms |        0 ms | Não houve bloqueio relevante da thread principal.                                                    |
| CLS                      |      0,376 |       0,376 |       0,376 | O deslocamento visual permaneceu igual ao da versão A.                                               |
| Requisições da aplicação |         17 |          17 |          17 | A quantidade de recursos carregados permaneceu constante.                                            |
| Tamanho total            | 435,08 KiB |  435,08 KiB |  435,08 KiB | Peso total reduzido após otimização das imagens e minificação dos arquivos.                          |

## Comparação preliminar entre as versões

| Métrica                  | Média Versão A | Média Versão B |                 Variação observada |
| ------------------------ | -------------: | -------------: | ---------------------------------: |
| Performance Score        |           33,8 |           82,0 |  melhora de aproximadamente 142,6% |
| FCP                      |         0,20 s |         0,20 s | resultado praticamente equivalente |
| LCP                      |        12,46 s |         0,31 s |   melhora de aproximadamente 97,5% |
| Speed Index              |         0,28 s |         0,20 s |   melhora de aproximadamente 29,6% |
| TBT                      |      996,65 ms |           0 ms |                    redução de 100% |
| CLS                      |          0,376 |          0,376 |                       sem variação |
| Requisições da aplicação |             17 |             17 |                       sem variação |
| Tamanho total            |  36.468,65 KiB |     435,08 KiB |   redução de aproximadamente 98,8% |

## Observações da coleta

* As duas versões foram executadas em contêineres Docker separados.
* A versão A foi disponibilizada na porta 8081.
* A versão B foi disponibilizada na porta 8082.
* A coleta foi feita no mesmo computador, navegador e rede.
* Nenhuma alteração no código foi realizada durante as medições.
* As medições foram realizadas em guia anônima.
* Os relatórios não apresentaram alertas de interferência de extensões do navegador.
* A versão A utilizou imagens JPG originais e arquivos não minificados.
* A versão B utilizou imagens WebP otimizadas, arquivos minificados e carregamento tardio de imagens.
* As requisições consideradas na tabela são as requisições da aplicação.
* A quantidade de requisições permaneceu igual nas duas versões: 17 requisições.
* A principal diferença entre as versões foi o peso total carregado, que caiu de 36.468,65 KiB para 435,08 KiB.
* O CLS apareceu em todas as execuções das duas versões, com valor constante de 0,376.
* O Performance Score da versão B não chegou próximo de 100 principalmente porque o CLS permaneceu alto.

## Interpretação preliminar

A coleta em guia anônima indicou melhora relevante na versão otimizada. A principal diferença observada foi a redução do tamanho total dos recursos carregados, que passou de aproximadamente 36.468,65 KiB na versão A para aproximadamente 435,08 KiB na versão B. Isso representa redução aproximada de 98,8% no volume transferido.

O maior impacto apareceu no LCP, que representa o tempo até o carregamento do maior elemento visível da página. Na versão A, a média foi de aproximadamente 12,46 segundos. Na versão B, a média ficou em aproximadamente 0,31 segundo. Esse resultado sugere que a otimização das imagens e o carregamento mais eficiente dos recursos tiveram impacto positivo no carregamento visual da página.

O Performance Score também apresentou melhora, passando de média 33,8 na versão A para 82,0 na versão B. Em termos absolutos, isso representa aumento de 48,2 pontos na escala do Lighthouse. Em termos relativos, representa melhora aproximada de 142,6%.

O TBT foi reduzido de média aproximada de 996,65 ms para 0 ms, indicando menor bloqueio da thread principal na versão otimizada. Essa melhora deve ser interpretada dentro do contexto do protótipo, que utiliza JavaScript puro e baixa complexidade de interação.

O FCP apresentou valores praticamente iguais nas duas versões, sugerindo que o primeiro conteúdo visível foi carregado rapidamente tanto na versão sem otimização quanto na versão otimizada. Já o Speed Index também apresentou melhora, passando de média aproximada de 0,28 s para 0,20 s.

A quantidade de requisições não apresentou redução. Tanto a versão A quanto a versão B carregaram 17 requisições da aplicação. Portanto, a conclusão correta desta coleta não é que a versão B reduziu o número de requisições, mas sim que ela reduziu drasticamente o peso dos recursos carregados.

O CLS permaneceu igual nas duas versões, com valor médio de 0,376. Isso indica que as otimizações aplicadas foram eficazes para reduzir peso, LCP, Speed Index, TBT e Performance Score, mas não resolveram a estabilidade visual da página. Esse ponto deve ser considerado como uma limitação do estudo e como possibilidade de melhoria futura.

Esses resultados ainda são preliminares, mas indicam a viabilidade do procedimento de comparação e que as otimizações aplicadas na versão B contribuíram para reduzir o peso dos recursos e melhorar métricas importantes de desempenho front-end, especialmente LCP, TBT, Speed Index e Performance Score.
