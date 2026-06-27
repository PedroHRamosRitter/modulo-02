/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const PROMPT = require('prompt-sync')()

const n = []
for(let i = 1; i <=7; i++){
    n[i] = PROMPT(`Digite o ${i}º nome: `)
    n.push[i]
}

for(let i = 1; i <= 7; i++){
console.log(n[n.length-i])
}
