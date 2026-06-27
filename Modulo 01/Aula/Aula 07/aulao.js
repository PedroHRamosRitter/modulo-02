const PROMPT = require('prompt-sync')()

// <contador>; <condição>
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// let contador
// while(contador <10){
//     contador++
// }

/* Tabuada */

let valor = Number(PROMPT('Informe o valor que você quer receber a tabuada: '))

for(let i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}