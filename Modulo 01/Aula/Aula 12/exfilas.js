/*
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.
*/

class Impressao{
    constructor(){
        this.itens = []
    }
    adicionar(elemento){
        this.itens.push(elemento)
    }
    imprimirImpressao(){
        console.log(this.itens.join(' <- '))
    }
    impresso(){
        if(this.vazio()){
            return "Acabou a impressão!"
        }
        return this.itens.shift()
    }
    vazio(){
        return this.itens.length === 0
    }
    proximo(){
        if(this.vazio()){
            return "Acabou a impressão!"
        }
        return this.itens[0]
    }
}
const impressao = new Impressao()
impressao.adicionar("Imprimindo documento 1")
impressao.adicionar("Imprimindo documento 2")
impressao.adicionar("Imprimindo documento 3")
impressao.imprimirImpressao()
console.log(impressao.impresso())
console.log(impressao.impresso())
console.log(impressao.impresso())
console.log(impressao.impresso())
console.log(impressao.vazio())

