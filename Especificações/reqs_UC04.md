## UC04 - Gerar Ata de banca

Resumo: Administrador irá gerar a ata de banca a ser assinada pelo aluno e pelos integrantes da banca examinadora.

Ator(es): Administrador

Pré-condição:
- [1] Administrador deve estar previamente logado.
- [2] É necessário selecionar a data e hora da apresentação.
   
Pós-condição: O sistema exibe as datas e horas disponíveis, juntamente com campos para preenchimento do nome do autor, nome dos integrantes da banca, descrição e um botão para download.

Fluxo principal: 
- [1] Administrador clica em Gerar Ata de banca.
- [2] O sistema exibe as datas e horas disponíveis.
- [3] Administrador, após selecionar a data e hora, informar os campos necessários para gerar a ata.
- [4] O sistema irá gerar a ata e exibir a opção de realizar download da ata no formato PDF.

Fluxos alternativos:

Fluxos de exceção:
- [1a] Falha no acesso - Sistema exibirá a mensagem que apenas Administradores podem acessar a área de gerar ata de banca.
- [2a] Indisponibilidade de data - O Sistema exibirá mensagem de data indisponível, caso seja selecionada uma data sem vagas.
-  * [2a.1] Data e hora inexistentes - O Sistema exibirá mensagem de erro caso seja selecionada uma data e/ou hora inexistentes.
- [3a] Campos vazios - Sistema exibe mensagem informando que pelo menos um dos campos estão vazios. 


