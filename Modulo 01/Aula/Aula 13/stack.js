class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinked{
    constructor(){
        this.toop = null
        this.size = 0
    }


    push(value) {
        let newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    // remove e retorna o valor do topo
    pop(){
        if(!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        this.size --
        return poppedValue
    }

    peek(){
        return this.top ? this.top.value : null
    }
}

let pilha = new StackLinked()
pilha.push(10)
piha.push(30)

class StackArray {
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }
}

let pilhaArray = new StackArray()
pilhaArray.push(10)

