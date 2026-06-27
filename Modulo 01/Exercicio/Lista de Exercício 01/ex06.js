/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const PROMPT = require('prompt-sync')()
while(true){
let a = Number(PROMPT("Digite o primeiro valor: "))
let b = Number(PROMPT("Digite o segundo valor: "))
let c = Number(PROMPT("Digite o terceiro valor: "))

if(a < b + c && b < a + c && c < a + b){
    console.log("Os valores formam um triangulo")

    if(a == b && a != c || a == c && a != b || b == c && b != a){
        console.log("O triângulo é ISÓSCELES")
    }
    else if(a != b && a != c && b != c){
        console.log("O triângulo é ESCALENO")
    }
    else if(a == b && b == c){
        console.log("O triângulo é EQUILÁTERO")
    }
}
else{
    console.log("Os valores não formar um triângulo")
}
}