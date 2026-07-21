import { buscarCep } from "../services/viacep.js"
import { validarCpf } from "../services/validacoes.js"
import { cadastrarUsuario } from "../services/auth.js"


// via cep
let form = document.querySelector('#form-cadastro')
let campoCep = document.querySelector('#cep')
campoCep.addEventListener('blur', async () => {
    if(!campoCep.value)return

    try {
        let endereco = await buscarCep(campoCep.value)
        document.querySelector('#logradouro').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#cidade').value = endereco.localidade
        document.querySelector('#uf').value = endereco.uf
    } catch (error) {
        console.log(error.message)
    }
})

// mostrar senha
const inputSenha = document.querySelector('#senha');
const checkboxMostrar = document.querySelector('#mostrar-senha')
checkboxMostrar.addEventListener('change', () => {
    inputSenha.type = checkboxMostrar.checked ? 'text' : 'password';
})

// envio do cadastro
const avisoCadastro = document.querySelector('#aviso')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = document.querySelector('#nome').value.trim() // o trim remove os espaços o equivalente ao strip no python
    const email = document.querySelector('#email').value.trim()
    const senha = inputSenha.value

    try {
        cadastrarUsuario({ nome, email, senha })

        if (avisoCadastro) {
            avisoCadastro.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...'
            avisoCadastro.classList.remove('erro')
            avisoCadastro.classList.add('sucesso')
        }

        setTimeout(() => {
            window.location.href = 'login.html'
        }, 1500)
    } catch (erro) {
        if (avisoCadastro) {
            avisoCadastro.textContent = erro.message
            avisoCadastro.classList.remove('sucesso')
            avisoCadastro.classList.add('erro')
        }
    }
})