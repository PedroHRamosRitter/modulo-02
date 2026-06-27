/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

let pessoa = {
    nome: "Pedro",
    idade: 18

};

console.log("idade:", pessoa.idade);
pessoa.email = "pedro@gmail.com";

console.log(pessoa);