/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const PROMPT = require('prompt-sync')()

while(true){

let numero = Number(PROMPT("Informe um valor: "))
if(numero % 2 == 0){
    console.log("O número é PAR.")
}else{
console.log("O número é IMPAR.")}
}