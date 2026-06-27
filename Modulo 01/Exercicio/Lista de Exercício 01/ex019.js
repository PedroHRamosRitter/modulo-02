/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.
*/

const obj1 = {
    nome: "Pedro",
    idade: 18,
    cidade: "Curitiba",
    estado: "Paraná"
};
const obj2 = {
    cidade: "Londrina",
    estado: "Paraná",
    profissao: "Estudante"
};
function combinarObjetos(obj1, obj2){
    return{
        ...obj1,
        ...obj2
    };
}
const  resultado = combinarObjetos(obj1, obj2);
console.log(resultado)