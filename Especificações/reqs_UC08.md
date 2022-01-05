## UC08 -  Gerar cronograma das bancas 

### Resumo: O Adminstrador insere as datas e horários para a entrega de arquivos pelos orientadores  

Ator(es): Adminstrador

Pré-condição: Estar logado como um adminstrador.

Pós-condição: Uma cronograma será gerado para os orientadores e para o adminstrador.

Fluxo principal:

- [1] Admistrador insere as datas e horarios.
- [2] Adminstrador confirma que o cronograma está finalizado.
- [3] O cronograma é finalizado e enviado para os orientadores.

Fluxo Alternativo:

Fluxo de exceção: 
- [2a]. Um campo vazio - Sistema exibe mensagem para inserir um horario e uma data.
- [2b]. Data inválida - Sistema exibe mensagem para inserir uma data valida.
- [2c]. Horário invalido - Sistema exibe mensagem para inserir um horário valido.
