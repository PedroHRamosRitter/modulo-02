// Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

let produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    quantidadeEstoque: 15
};

for(let propriedade in produto){
    console.log(`${propriedade}: ${produto[propriedade]}`);
}

produto.desconto = 10;

let precoFinal = produto.preco - (produto.preco * produto.desconto / 100);

console.log("Preço final: R$ " + precoFinal.toFixed(2));