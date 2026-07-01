import { registar } from "./auth"
const form = document.querySelector('#form-cadastro')

// Registrar o usuário ao enviar o formulário

form.addEventListener('submit', (evento) => {
    evento.preventDefault() // Impede o carregamento da página
    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    registar(usuario)
})