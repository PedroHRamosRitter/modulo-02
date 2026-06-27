/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).
*/

const prompt = require('prompt-sync')();
const funcionarios = [];
for (let i = 0; i<80; i++){
    console.log(`\nFuncionário ${i + 1}`);

    let matricula = prompt("Matrícula: ");
    let nome = prompt("Nome: ");
    let salarioBruto = parseFloat(prompt("Salário Bruto: "));
    funcionarios.push({
        matricula,
        nome,
        salarioBruto
    })
}

for(let funcionario of funcionarios){
    let descontoINSS = funcionario .salarioBruto * 0.12;
    let salarioLiquido = funcionario.salarioBruto - descontoINSS;

    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário Bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
}
