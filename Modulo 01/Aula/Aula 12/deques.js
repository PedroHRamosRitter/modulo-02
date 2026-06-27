class Deque{
    constructor(){
        this.itens = []
    }

    // Adiciona um item no inicio do Deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
        // unshift -> Adiciona o item no inicio
    }

    // Adicionar um item no final do Deque
    adicionarFim(elemento){
        this.itens.push(elemento)
        // push -> Adiciona o item no final
    }
    // Remove e retorna o elemento do inicio do Deque
    removeFrente(elemento){
        return this.itens.shift
        // shift -> Remove o item no inicio
    }

    // Remove e retorna o elmento do fim do Deque
    removeFim(){
        return this.itens.pop()
        // Remove o item no final
    }
}

const deque = new Deque()
// let -> Pode se dar um novo valor
// const -> Não se pode mudar o valor
// Neste caso como não é para retribuir um valor é melhor usar o const por segurança

