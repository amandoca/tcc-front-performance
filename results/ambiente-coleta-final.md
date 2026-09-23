# Ambiente da coleta final - TCC v1

## Evidência dos 20 relatórios JSON

- Sessão única de aproximadamente sete minutos, com dez execuções por versão.
- Lighthouse: 13.4.1; canal `devtools`; perfil `desktop`; coleta Navigation conforme o TCC v1.
- Chrome do host: 153.0.0.0; Linux x86_64, conforme `environment.hostUserAgent`.
- URLs: A em `http://localhost:8081/`; B em `http://localhost:8082/`.
- Throttling: `simulate`, `rttMs: 40`, `throughputKbps: 10240`, `cpuSlowdownMultiplier: 1`.
- `disableStorageReset: false`; `screenEmulation.disabled: true`. As dimensões presentes no objeto de emulação não comprovam o viewport efetivo, pois a emulação estava desabilitada.
- Os relatórios contêm outras categorias; esta análise utiliza desempenho e dados de rede.

## Informações complementares do ambiente

O registro local anterior informa Ubuntu 24.04.5 LTS, Intel Core i5-1235U, 15 GiB de RAM reportados pelo sistema, Chrome instalado 153.0.8010.36, Docker 29.1.3, Compose 2.40.3 e Nginx 1.31.1 nos contêineres `nginx:alpine`. O TCC descreve 16,0 GiB de memória. As duas formas de registro são mantidas explícitas; os JSONs não informam a capacidade física de RAM.

Consulte o [registro original](historico/ambiente-registro-inicial.md) para a proveniência. Suas referências a commit e alterações pendentes descrevem o momento daquele registro, não o estado final do repositório.

## Código e dados

- Correção comum da grade de produtos: commit `c1b573d`, aplicado a `src`, `dist-a` e `dist-b`.
- A consolidação da v1 não altera nem regenera os builds medidos.
- Amostra final: [coleta-final/](coleta-final/); integridade dos arquivos em [SHA256SUMS](coleta-final/SHA256SUMS).
- Resultados: [coleta-final.md](coleta-final.md).
- A tag `tcc-v1` identifica o estado consolidado do código, dos dados e desta documentação. Os JSONs não registram o commit Git servido durante a sessão; a associação ao código baseia-se no registro de trabalho e na descrição metodológica da v1.
