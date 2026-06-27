/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/
const PROMPT = require('prompt-sync')()

console.log("Menu");
console.log("1 - Ver saldo");
console.log("2 - Fazer depósito");
console.log("3 - sair");

let opcao = Number(PROMPT("Digite um número de 1 a 3: "))
switch(opcao){

    case (1):
        console.log("Seu saldo é R$ 20,83");
        break
    case (2):
        console.log("Depósito realizado com sucesso!");
        break
    case (3):
        console.log("Saindo...")
        break
    default:
        console.log("Opção inválida")
}
