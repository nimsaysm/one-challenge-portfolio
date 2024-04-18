function validarCampos() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const enviarBtn = document.querySelector('.formcontato__botao');

    enviarBtn.addEventListener('click', validarTodosCampos);

    function validarTodosCampos() {
        validarNome(nome);
        validarEmail(email);
        validarAssunto(assunto);
        validarMensagem(mensagem);
        alert('Formulário enviado com sucesso!');
    }

    function validarNome(nome) {
        if (nome.value === '' || nome.value === null) {
            return alert('O campo nome não pode ficar em branco');
        }
        if (nome.value.length > 50) {
            return alert('O campo nome deve ter no máximo 50 caracteres');
        }
    }

    function validarEmail(email) {
        if (email.value === '' || email.value === null) {
            return alert('O campo email não pode ficar em branco');
        }
        if (!email.value.includes('@') || !email.value.includes('.')) {
            return alert('O campo email deve ser um email válido');
        }
    }

    function validarAssunto(assunto) {
        if (assunto.value === '' || assunto.value === null) {
            return alert('O campo assunto não pode ficar em branco');
        }
        if (assunto.value.length > 50) {
            return alert('O campo assunto deve ter no máximo 50 caracteres');
        }
    }

    function validarMensagem(mensagem) {
        if (mensagem.value === '' || mensagem.value === null) {
            return alert('O campo mensagem não pode ficar em branco');
        }
        if (mensagem.value.length > 300) {
            return alert('O campo mensagem deve ter no máximo 300 caracteres');
        }
    }   
}

document.addEventListener('DOMContentLoaded', validarCampos());