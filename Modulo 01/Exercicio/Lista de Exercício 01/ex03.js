/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.
*/

const PROMPT = require("prompt-sync")()

while(true){
let nota = Number(PROMPT("Informe a nota [999 para parar]: "))
if(nota === 999){
    break;
}

if(nota < 5 && nota >= 0){
    console.log("Reprovado")
}
else if(nota >= 5 && nota < 7){
    console.log("Recuperação")
}
else if(nota >= 7 && nota <= 10){
    console.log("Aprovado")
}
else{
    console.log("Insira uma nota válida (0 a 10)")
}
}