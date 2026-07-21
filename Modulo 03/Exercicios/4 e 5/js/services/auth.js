const CHAVE_USUARIOS = 'usuarios'
const CHAVE_LOGADO = "usuarioLogado"

export function obterUsuarios() {
    return JSON.parse(localStorage.getItem(CHAVE_USUARIOS)) || []
}

export function cadastrarUsuario({ nome, email, senha }) {
    const usuarios = obterUsuarios()

    const jaExiste = usuarios.some(
        usuario => usuario.email.toLowerCase() === email.toLowerCase()
    )
    if (jaExiste) {
        throw new Error('Já existe uma conta cadastrada com este e-mail.')
    }

    usuarios.push({ nome, email, senha })
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
}

export function autenticar(email, senha) {
    const usuario = obterUsuarios().find(
        usuario =>
            usuario.email.toLowerCase() === email.toLowerCase() && usuario.senha === senha
    )

    if(!usuario) {
        throw new Error('E-mail ou senha inválidos.')
    }

    localStorage.setItem(
        CHAVE_LOGADO,
        JSON.stringify({ nome: usuario.nome, email: usuario.email })
    )

    return usuario
}

export function encerrarSessao() {
    localStorage.removeItem(CHAVE_LOGADO)
}

export function obterUsuariosLogado() {
    return JSON.parse(localStorage.getItem(CHAVE_LOGADO))
}