## UC05 -  Gerar certificado dos professores 

### Resumo: Um certificado contendo o nome do orientador, nome do aluno e título do TCC é gerado.

Ator(es): Administrador

Pré-condição: Usuário estar logado como um administrador e existir ao menos um trabalho finalizado a receber certificado.

Pós-condição: O arquivo do certificado é gerado.

Fluxo principal:

- [1] O administrador clica no botão "Gerar certificados".
- [2] O sistema exibe uma lista dos trabalhos finalizados que ainda não tiveram certificado gerado.
- [3] O administrador seleciona o trabalho. 

Fluxo Alternativo:

Fluxo de exceção: 
- [2a] Lista vazia - Sistema exibe mensagem avisando que a lista está vazia.
