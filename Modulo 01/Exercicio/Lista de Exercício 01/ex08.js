/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.
*/

const PROMPT = require('prompt-sync')()

let numero = Number(PROMPT("Digite um número: "))
let fatorial = 1

for(let i = 1; i <= numero; i++){
    fatorial = fatorial * i
}
console.log("O fatorial de ", numero, " é ", fatorial)
