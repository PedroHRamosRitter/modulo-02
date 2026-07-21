class SiteHeader extends HTMLElement {
    connectedCallback() {

        const depth = window.location.pathname.split('/').length-2
        const raiz = '../'.repeat(depth)

        this.innerHTML =`
            <header class="cabecalho">
                <a href="${raiz}pages/inicio.html" class="logo">TECH AULA</a>
                <nav class="navegacao">
                    <a href="${raiz}pages/inicio.html">Início</a>
                    
                    <div class="dropdown">
                        <a href="#">Serviços <span class="seta">▾</span></a>
                        <div class="submenu">
                            <a href="${raiz}pages/servicos/instalacao.html">Instalação e configuração</a>
                            <a href="${raiz}pages/servicos/montagem.html">Montagem e manutenção</a>
                            <a href="${raiz}pages/servicos/formatacao.html">Formatação e instalação</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a href="#">Cursos <span class="seta">▾</span></a>
                        <div class="submenu">
                            <a href="${raiz}pages/cursos/html.html">HTML</a>
                            <a href="${raiz}pages/cursos/css.html">CSS</a>
                            <a href="${raiz}pages/cursos/frontend.html">FRONT-END</a>
                            <a href="${raiz}pages/cursos/javascript.html">JAVA SCRIPT</a>
                        </div>
                    </div>
                    <a href="${raiz}pages/produtos.html">Produtos</a>
                    <a href="${raiz}pages/avaliacoes.html">Avaliações</a>
                    <a href="${raiz}pages/horario.html">Horário de atendimento</a>
                    <div class ="area-auth" id="area-auth"></div>
                </nav>
        </header>`
        setTimeout(() => {
            const temBanner = document.querySelector('site-banner')
            if (!temBanner) {
                document.body.classList.add('sem-banner')
            }
        }, 0)

        this.renderizarAuth(raiz)
    }

    renderizarAuth(raiz) {
        const areaAuth = this.querySelector('#area-auth')
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

        if (usuarioLogado) {
            areaAuth.innerHTML = `
                <span class="saudacao">Olá, ${usuarioLogado.nome}</span>
                <a href="#" class="sair" id="link-sair">Sair</a>`

            areaAuth.querySelector('#link-sair').addEventListener('click', (evento) => {
                evento.preventDefault()
                localStorage.removeItem('usuarioLogado')
                window.location.href = `${raiz}pages/inicio.html`
            })
        } else {
            areaAuth.innerHTML = `
                <a href="${raiz}js/pages/login.html" class="entrar">Entrar</a>
            `
        }
    }
}
customElements.define('site-header', SiteHeader);