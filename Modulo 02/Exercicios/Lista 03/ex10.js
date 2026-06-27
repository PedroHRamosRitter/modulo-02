// Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

let pilha = [];

function visitar(pagina) {
    pilha.push(pagina);
    console.log(`Visitou: ${pagina}`);
    console.log(`Página atual: ${paginaAtual()}`);
}

function voltar() {
    if (pilha.length > 1) {
        pilha.pop();
        console.log(`Voltou`);
        console.log(`Página atual: ${paginaAtual()}`);
    } else {
        console.log("Não há páginas anteriores.");
    }
}

function paginaAtual() {
    return pilha[pilha.length - 1];
}

visitar("Google");
visitar("YouTube");
visitar("GitHub");
visitar("ChatGPT");

voltar();
voltar();

console.log(`Página atual final: ${paginaAtual()}`);