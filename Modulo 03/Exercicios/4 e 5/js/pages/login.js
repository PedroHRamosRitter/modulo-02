import { autenticar } from "../services/auth.js";

const inputSenha = document.getElementById('senha');
const checkboxMostrar = document.getElementById('mostrar-senha');

checkboxMostrar.addEventListener('change', () => {
    inputSenha.type = checkboxMostrar.checked ? 'text' : 'password';
});

// envio do login
const formLogin = document.querySelector('#form-cadastro')
const avisoLogin = document.querySelector('#aviso')

formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.querySelector('#email').value.trim()
    const senha = inputSenha.value

    try {
        autenticar(email, senha)
        window.location.href = '../../pages/inicio.html'
    } catch (erro) {
        if (avisoLogin) {
            avisoLogin.textContent = erro.message
            avisoLogin.classList.add('erro')
        }
    } 
})