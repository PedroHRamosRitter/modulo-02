// Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

let orcamento = {
    alimentacao: { planejado: 800, gasto: 750 },
    transporte: { planejado: 300, gasto: 350 },
    lazer: { planejado: 400, gasto: 300 },
    saude: { planejado: 200, gasto: 250 }
};

let totalPlanejado = 0;
let totalGasto = 0;

for (let categoria in orcamento) {
    let planejado = orcamento[categoria].planejado;
    let gasto = orcamento[categoria].gasto;

    if (gasto <= planejado) {
        console.log(`${categoria}: dentro do orçamento`);
    } else {
        console.log(`${categoria}: acima do orçamento`);
    }

    totalPlanejado += planejado;
    totalGasto += gasto;
}

let saldo = totalPlanejado - totalGasto;

console.log(`Saldo geral do mês: R$ ${saldo}`);