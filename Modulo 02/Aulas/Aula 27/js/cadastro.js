import { registar } from "./auth.js"
const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')

// Registrar o usuário ao enviar o formulário

form.addEventListener('submit', (evento) => {
    evento.preventDefault() // Impede o carregamento da página
    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }
    try{
        registar(usuario)
        alert('Cadastro reealizado! Faça login para continuar.')
        window.location.href = "login.html"

    } catch(erro){
        aviso.textContent = erro.message
    }
})