/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.
*/

const PROMPT = require('prompt-sync')()

// Soma de por exemplo 3 numeros e fazer a soma e dividir pelo mesmo numero de numeros
// Fazer um loop infinito ate que o mesmo digite 0 para sair do mesmo
let soma = 0
let cont = 0
while(true){
    let numero = Number(PROMPT("Digite um número: "))
    if(numero == 0){
        break
    }
    soma += numero
    cont ++

}
media = soma / cont
console.log(media)
console.log("Fim do programa")