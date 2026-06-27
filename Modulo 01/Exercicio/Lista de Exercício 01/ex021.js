/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/
const vendas = [
    {vendedor: "Pedro", valor: 250},
    {vendedor: "João", valor: 300},
    {vendedor: "Maria", valor: 230},
    {vendedor: "Renato", valor: 500},
    {vendedor: "Pedro", valor: 700}
];
function vendasTotal(vendas){
    const resultado = {}

    for(let venda of vendas){
        const vendedor = venda.vendedor;
        const valor = venda.valor;

        if(resultado[vendedor]){
            resultado[vendedor] += valor;
        }
        else{
            resultado[vendedor] = valor;
        }
    }
    return resultado;
}
console.log(vendasTotal(vendas));