/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

const prompt = require('prompt-sync')();

let M = [];
let C = [];

for (let i = 0; i < 6; i++) {
    M[i] = [];
    let negativos = 0;

    console.log(`\nLinha ${i + 1}:`);

    for (let j = 0; j < 8; j++) {
        M[i][j] = Number(prompt(`M[${i + 1}][${j + 1}]: `));

        if (M[i][j] < 0) {
            negativos++;
        }
    }

    C[i] = negativos;
}

console.log("\nVetor C:");
for (let i = 0; i < 6; i++) {
    console.log(`C[${i + 1}] = ${C[i]}`);
}