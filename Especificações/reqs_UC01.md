## UC1 - Realizar Login

### Resumo: Anônimo insere seus dados e é logado.

Ator(es): Anônimo

Pré-condição: A funcionalidade é chamada por um anônimo, ou seja, não há ninguém logado.

Pós-condição: O anônimo faz o login e se torna usuário logado.

Fluxo principal: 
- [1] Anônimo insere seu endereço de e-mail.
- [2] Anônimo insere sua senha.
- [3] Anônimo clica no botão entrar.

Fluxos alternativos:

Fluxos de exceção:
- [3a]. E-mail não registrado - Sistema exibe mensagem informando que o e-mail não está cadastrado.
- [3b]. Senha incorreta - Sistema exibe mensagem informando que a senha está incorreta.
- [3c]. Campos vazios - Sistema exibe mensagem informando que pelo menos um dos campos estão vazios.
