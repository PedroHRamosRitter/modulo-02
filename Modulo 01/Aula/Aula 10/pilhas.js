// const pilha = []

// pilha.push("Livro 1") // 0
// pilha.push("Livro 2") // 1
// pilha.push("Livro 3") // 2

// console.log(pilha.length) // Ver quantos itens tem dentro do array
// console.log("Topo: ", pilha[pilha.length - 1])
// console.log("Removido: ", pilha.pop())
// console.log("Agora o topo é: ", pilha[pilha.length -1])

class Pilha{
    constructor(){
        this.itens = []
    }

    push(elemento){
        this.itens.push(elemento)
    }
    pop(){
        if(this.isEmpty()){
            return "A pliha esta vazia"
        }
        return this.itens.pop()
    }

    isEmpty(){
        return this.itens.length === 0
    }

    print(){
        console.log(this.itens)
    }
}

const pilha = new Pilha()
pilha.push("A")
pilha.print()
pilha.pop()
pilha.print()
console.log(pilha.pop())