/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.
*/
const prompt = require('prompt-sync')()


function pesquisaHabitantes(){
    let totalPessoas = 0;
    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let pessoas350 = 0;

    while(true){
        let salario = parseFloat(prompt("Digite o salário (digite número negativo para parar): "))

        if(salario < 0){
            break;
        }

        let filhos = parseInt(prompt("Digite o números de filhos: "))

        totalPessoas++;
        somaSalarios += salario;
        somaFilhos += filhos;

        if(salario > maiorSalario){
            maiorSalario = salario;
        }
        if(salario <= 350){
            pessoas350++;
        }
    }
    let mediaSalario = somaSalarios / totalPessoas;
    let mediaFilhos = somaFilhos / totalPessoas;
    let percentualPessoas350 = (pessoas350 / totalPessoas) * 100;

    return {
        mediaSalario,
        mediaFilhos,
        maiorSalario,
        percentualPessoas350
    };
}
let resultado = pesquisaHabitantes();
console.log("Média de salário: R$ " + resultado.mediaSalario.toFixed(2));
console.log("Média de filhos: " + resultado.mediaFilhos.toFixed(2));
console.log("Maior salário: R$ " + resultado.maiorSalario.toFixed(2));
console.log("Percentual com salário até R$350,00: " + resultado.percentualPessoas350.toFixed(2) + "%");
