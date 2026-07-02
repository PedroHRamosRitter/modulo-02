import { login } from './auth.js'

const form = document.querySelector('#form-login')
const aviso = document.querySelector('#aviso')

form.addEventListener('submit', (evento) => {
    evento.preventDefault() // Para nao recarregar a pagina

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    try{
        const usuario = login(email, senha)
        alert(`Bem-vindo, ${usuario.email}!`)
        window.location.href = '../html/index.html'

    } catch (erro) {
        aviso.textContent = erro.message
    }

})