// Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.

let alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 6.0 },
    { nome: "Carlos", nota: 4.5 },
    { nome: "Daniela", nota: 7.2 },
    { nome: "Eduardo", nota: 3.8 },
    { nome: "Fernanda", nota: 5.5 }
];

for (let aluno of alunos) {
    let situacao;

    if (aluno.nota >= 7) {
        situacao = "Aprovado";
    } else if (aluno.nota >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log(`${aluno.nome}: ${situacao}`);
}

let somaAprovados = 0;
let qtdAprovados = 0;
let somaReprovados = 0;
let qtdReprovados = 0;

alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
        somaAprovados += aluno.nota;
        qtdAprovados++;
    } else if (aluno.nota < 5) {
        somaReprovados += aluno.nota;
        qtdReprovados++;
    }
});

let mediaAprovados = somaAprovados / qtdAprovados;
let mediaReprovados = somaReprovados / qtdReprovados;

console.log(`Média dos aprovados: ${mediaAprovados.toFixed(2)}`);
console.log(`Média dos reprovados: ${mediaReprovados.toFixed(2)}`);