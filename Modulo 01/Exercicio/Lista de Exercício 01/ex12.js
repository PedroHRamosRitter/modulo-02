/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal.
Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, 
para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const PROMPT = require('prompt-sync')()

let altura = Number(PROMPT("Digite a atura (em CM): "))
if(altura >= 100){
    altura = altura / 100
}
let sexo = PROMPT("Digite o sexo: ")[0].toUpperCase()

if(sexo == 'M'){
    let calculom = 72.7 * altura - 58
    console.log("O seu peso ideal é ", calculom.toFixed(2))
}

else if(sexo == 'F'){
    let calculof = 62.1 * altura - 44.7
    console.log("O seu peso ideal é ", calculof.toFixed(2))
}
else{
    console.log("Sexo inválido")
}