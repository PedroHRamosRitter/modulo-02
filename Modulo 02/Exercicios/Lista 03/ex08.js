// Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.

let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 5 },
    { nome: "Mouse", preco: 80, quantidade: 20 },
    { nome: "Teclado", preco: 150, quantidade: 10 },
    { nome: "Monitor", preco: 900, quantidade: 4 }
];

let valorTotalEstoque = 0;

produtos.forEach(produto => {
    let valorProduto = produto.preco * produto.quantidade;

    console.log(
        `${produto.nome}: R$ ${valorProduto.toFixed(2)}`
    );

    valorTotalEstoque += valorProduto;
});

console.log(`Valor total geral do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);