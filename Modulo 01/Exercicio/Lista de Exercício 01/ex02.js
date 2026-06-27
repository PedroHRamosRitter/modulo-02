/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

// criança -> 11 anos
// adolescente -> 12 a 17 anos
// adulto -> 18 anos
// idoso -> 60+ anos

const PROMPT = require('prompt-sync')()

while(true){
let idade = Number(PROMPT("Informe a idade  [999 para parar]: "));

if(idade === 999){
    break;
}
if(idade < 12 && idade >= 0){
    console.log("Criança")
}
else if(idade >= 12 && idade < 18){
    console.log("Adolescente")
}
else if(idade >= 18 && idade < 60){
    console.log("Adulto")
}else if(idade >= 60){
    console.log("Idoso")
}
else{
    console.log("Insira uma idade válida")
}
}