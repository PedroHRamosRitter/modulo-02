// Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

let lista = null;

function adicionar(tarefa) {
    let novoNo = { valor: tarefa, proximo: null };

    if (lista === null) {
        lista = novoNo;
    } else {
        let atual = lista;
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }

    console.log(`Adicionado: ${tarefa}`);
}

function remover(tarefa) {
    if (lista === null) return;

    if (lista.valor === tarefa) {
        lista = lista.proximo;
        console.log(`Removido: ${tarefa}`);
        return;
    }

    let atual = lista;
    let anterior = null;

    while (atual !== null && atual.valor !== tarefa) {
        anterior = atual;
        atual = atual.proximo;
    }

    if (atual !== null) {
        anterior.proximo = atual.proximo;
        console.log(`Removido: ${tarefa}`);
    }
}

function exibir() {
    let atual = lista;
    console.log("Lista de tarefas:");

    while (atual !== null) {
        console.log(`- ${atual.valor}`);
        atual = atual.proximo;
    }
}

adicionar("Estudar JavaScript");
adicionar("Fazer exercícios");
adicionar("Lavar louça");
adicionar("Treinar");

exibir();

remover("Fazer exercícios");

exibir();