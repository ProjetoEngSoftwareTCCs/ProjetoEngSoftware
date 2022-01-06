/*<form class="login" action="orientador.html">
                <label for="email">Email: </label>
                <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com">
                <label for="password">Senha: </label>
                <input type="password" id="password" class="input-padrao" required placeholder="suaSenha123#">
                <input type="submit" value="Entrar" class="enviar">
            </form>*/

function selecionarFormaLogin(usuario: string){
    var opcoes = document.getElementById('opcoes');
    var botao = document.getElementById('botao_alterar_login')
    if (usuario === "aluno"){
        opcoes.innerHTML = `<form class="login" action="aluno.html">
            <label for="email">Email: </label>
            <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com">
            <label for="password">Senha: </label>
            <input type="password" id="password" class="input-padrao" required placeholder="suaSenha123#">
            <input type="submit" value="Entrar" class="enviar">
            </form>`
    } else if(usuario === "orientador"){
        opcoes.innerHTML = `<form class="login" action="orientador.html">
        <label for="email">Email: </label>
        <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com">
        <label for="password">Senha: </label>
        <input type="password" id="password" class="input-padrao" required placeholder="suaSenha123#">
        <input type="submit" value="Entrar" class="enviar">
        </form>`
    } else if(usuario === "administrador"){
        opcoes.innerHTML = `<form class="login" action="administrador.html">
        <label for="email">Email: </label>
        <input type="email" id="email" class="input-padrao" required placeholder="seuemail@dominio.com">
        <label for="password">Senha: </label>
        <input type="password" id="password" class="input-padrao" required placeholder="suaSenha123#">
        <input type="submit" value="Entrar" class="enviar">
        </form>`
    }

    botao.innerHTML = " <button class='botao' onclick = 'alterarFormaLogin()' >Alterar Forma de Login</button>"
}

function alterarFormaLogin(){
    var opcoes = document.getElementById('opcoes');
    var botao = document.getElementById('botao_alterar_login')

    opcoes.innerHTML = `<button class="botao_login" onclick="selecionarFormaLogin('aluno')">Entrar como Aluno</button>
    <button class="botao_login" onclick="selecionarFormaLogin('orientador')">Entrar como Orientador</button>
    <button class="botao_login" onclick="selecionarFormaLogin('administrador')">Entrar como Administrador</button>`

    botao.innerHTML = ""
}