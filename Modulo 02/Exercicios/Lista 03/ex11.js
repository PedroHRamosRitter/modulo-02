// Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.

let fila = [];

function chegarPaciente(nome) {
    fila.push(nome);
    console.log(`${nome} entrou na fila`);
    exibirFila();
}

function chamarProximo() {
    if (fila.length > 0) {
        let paciente = fila.shift();
        console.log(`${paciente} foi atendido`);
    } else {
        console.log("Fila vazia");
    }
    exibirFila();
}

function exibirFila() {
    console.log("Fila atual:", fila);
}

chegarPaciente("Ana");
chegarPaciente("Bruno");
chegarPaciente("Carlos");
chegarPaciente("Daniela");
chegarPaciente("Eduardo");

chamarProximo();
chamarProximo();
chamarProximo();