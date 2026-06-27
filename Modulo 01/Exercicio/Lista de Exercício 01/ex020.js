/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.
*/
const palavras = ["banana", "maçã", "kiwi", "banana", "uva", "abacaxi", "abacaxi", "banana"]
function contarString(array){
    const resultado = {};

    for(let item of array){
        if(resultado[item]){
            resultado[item]++;
        }
        else{
            resultado[item] = 1;
        }
    }
    return resultado;
}

console.log(contarString(palavras));