/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

const dados = {
    nome: "Pedro",
    idade: 18,
    notas: [8, 10, 9],
    cidade: "Londrina",
    hobbies: ["jogar", "programar", "futebol"],
    altura: 2.00,
    telefones: ["99999-9999", "88888-8888"]
};
function filtrarArrays(obj){
    let novoOBJ = {};

    for(let propriedade in obj) {
        if(Array.isArray(obj[propriedade])){
            novoOBJ[propriedade] = obj[propriedade];
        }
    }
    return novoOBJ;
}
const resultado = filtrarArrays(dados);
console.log(resultado);

