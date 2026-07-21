class SiteFooter extends HTMLElement {
    connectedCallback() {

        const depth = window.location.pathname.split('/').length-2
        const raiz = '../'.repeat(depth)

        this.innerHTML =`

        <footer class="rodape">        
            <div class="coluna">
                <h4>Celular: <span class="frase__rodape">(+55) 43 00000-0000</span></h4>
                <h4>design.grafico.dnrd@gmail.com</h4>
                <div class="redes-sociais">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img class="linkedin" src="${raiz}assets/logo/linkedin.png" alt="Linkedin"></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img class="linkedin" src="${raiz}assets/logo/instagram.png" alt="Instagram"></a>
                </div>
            </div>

            <div class="coluna">
                <h4>Para solicitações e dúvidas,<br> entre em contato:</h4>
                <h4 class="frase__rodape">TECH AULA:</h4>
                <h4 class="frase__rodape">Telefone: (+55) 43 00000-0000</h4>
                <h4>design.grafico.dnrd@gmail.com</h4>
            </div>
        </footer>`
    }
}

customElements.define('site-footer', SiteFooter);