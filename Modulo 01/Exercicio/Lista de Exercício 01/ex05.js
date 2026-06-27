/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const PROMPT = require('prompt-sync')()

while(true){
let peso = Number(PROMPT("Digite seu peso: "))
let altura = Number(PROMPT("Digite sua altura (em cm): "))
if(altura >= 100){
    altura = altura / 100
}
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Seu imc é ", imc, " Abaixo do peso")
}
else if(imc >= 18.5 && imc < 25){
    console.log("Seu imc é ", imc, " Peso normal")
}
else if(imc >= 25 && imc < 30){
    console.log("Seu imc é ", imc, " Sobrepeso")
}
else if(imc >= 30 && imc < 35){
    console.log("Seu imc é ", imc, " Obesidade grau I")
}
else if(imc >= 35 && imc < 40){
    console.log("Seu imc é ", imc, " Obesidade grau II")
}
else if(imc >= 40){
    console.log("Seu imc é ", imc, " Obesidade grau III")
}
}