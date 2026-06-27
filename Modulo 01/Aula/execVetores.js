/*
        Contagem de números pares: Usar o laço for para contar quantos números pares 
        existes em um array de números.
*/

let numeros = [1, 5, 4, 8,, 3, 19, 12, 100, 14, 8, 7, 77]
let quantidadePares = 0

for(let pos = 0; pos < numeros.length; pos++ ){  //pos++:  pos = pos + 1
   if(numeros[pos] % 2 == 0){
    //quantidadePares = quantidadePares + 1
    quantidadePares++
   }
    
}

console.log(`Quantidade de números pares: ${quantidadePares}`)