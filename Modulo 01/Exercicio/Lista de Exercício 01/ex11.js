/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/



const PROMPT = require('prompt-sync')()

const n = []
const i = []

for(let x = 1; x <= 9; x++){
    n[x] = PROMPT("Digite o nome: ")
    i[x] = Number(PROMPT("Digite a idade:"))
}


for(let x = 1; x < n.length; x++){
    if(i[x] < 18){
        console.log(n[x])
    }
}
