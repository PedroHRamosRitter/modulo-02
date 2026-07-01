const CHAVE_USUARIO = 'usuarios'
const CHAVE_SESSAO = 'uuarioLogado'

function lerUsuarios() {
    const json = localStorage.getItem(CHAVE_USUARIO)
    return json ? JSON.parse(json) : []
}

export function registar (usuario) {
    const usuarios = lerUsuarios()

    if(usuarios.some(user => user.email === usuario.email)) {
        throw new Error('Já existe este email')
    }

}
