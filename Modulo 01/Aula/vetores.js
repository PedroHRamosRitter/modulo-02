// valores - 2 5 1 6 1
// indice  - 0 1 2 3 4
let  numeros = [2,5,1,6,1]
// console.log(numeros.length)
// for(let pos = 0; pos < numeros.length; pos++){
//     //console.log("A posição " + pos + " tem o valor: " + numeros[pos])
//     console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
// }

numeros.forEach(function(numeros){
    console.log(numeros)
})

for(let pos in numeros){
    console.log(numeros[pos])
}


/*
// valores - 2 5 1 6 1
// indice  - 0 1 2 3 4
let  numeros = [2, 5, 1, 6, 1]
let frutas = ["maçã", "banana", "abacaxi"]
let vazio = []
vazio[1] = 5 // adiciona o valor na posição do indice indicado
vazio [0] = 30
vazio.push(50) // adiciona no fim do vetor
frutas.push("uva")
frutas.pop() // exclui o ultimo valor
frutas.unshift("uva") // adiciona no inicio do vetor
//console.log(numeros)
console.log(frutas)
//console.log(vazio)
*/