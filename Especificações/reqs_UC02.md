## UC2 - Organizar Orientacao - INCOMPLETO

### Resumo: Orientador define melhor organizar o trabalho e munir o aluno das orientações necessárias e importantes.

Ator(es): Orientador

Pré-condição: A funcionalidade é chamada por um usuário, previamente logado como Orientador.

Pós-condição: O orientador irá organizar os materiais e dar retorno para os aluno.

Fluxo principal: 
- [1] Organizador, previamente logado no sistema, irá acessar a área de Organizar Orientação.
- [2] Organizador irá selecionar, dentre os seus alunos, qual deseja enviar as orientações.
- [3] Organizador, após selecionar o aluno específico, fará o envio de mensagens e/ou materiais para munir o aluno das orientações nececssárias e importantes.

Fluxos alternativos:

Fluxos de exceção:
- [1a]. Falha no acesso - Sistema exibirá a mensagem que apenas colaboradores podem acessar a área de Organizar Orientação
- [2a]. Aluno não existente - Sistema exibe mensagem informando que o aluno não está listado dentre os alunos selecionados para tal Orientador.
- [3a]. Campos vazios - Sistema exibe mensagem informando que pelo menos um dos campos estão vazios.

