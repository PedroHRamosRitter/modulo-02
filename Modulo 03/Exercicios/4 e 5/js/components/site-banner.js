class SiteBanner extends HTMLElement {
    connectedCallback() {
        const titulo = this.getAttribute('titulo')
        const imagem = this.getAttribute('imagem')

        const depth = window.location.pathname.split('/').length-2
        const raiz = '../'.repeat(depth)

        this.innerHTML = `
        <div class="banner" style="background-image: url('${raiz}assets/banner/${imagem}')">
            <h1 class="banner__titulo">${titulo}</h1>
        </div>
        <div class="espaco"></div>`
    
    }
}

customElements.define('site-banner', SiteBanner)