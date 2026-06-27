/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.
*/

let MI = [];
for(let i = 0; i < 7; i++){
    MI[i] = [];

    for(let j = 0; j < 7; j++){
        if(i === j){
            MI[i][j] = 1;
        }
        else{
            MI[i][j] = 0;
        }
    }
}

console.log("Matriz Identidade 7x7: ")
for(let i = 0; i < 7; i++){
    console.log(MI[i].join(" "));
}