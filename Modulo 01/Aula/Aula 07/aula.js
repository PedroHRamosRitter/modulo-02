// let nums = [10, 20, 30, 40, 50]
// console.log(nums)
// console.log(nums[0])
// console.table(nums) -> Mostra em formato de tabela


// let arr = ['Hardware', 'Software', 'Dados']
// arr.push('Donald') // adiciona o no ultimp campo o elemento

// console.table(arr)

// arr.pop()   // Exclui o ultimo elemento
// console.table(arr)

// arr.unshift('Fone') // Adiciona elemento no primeiro lugar
// console.table(arr)

// arr.splice(1, 1) // Remover a partir da primeira posicao um elemento
// console.table(arr)

// console.log(arr,sort())

let bagunca = [
    [1, 2],
    ['a', 'b'],
    ['Hardware', 'Software']
]
// console.log(bagunca[1][2]) -> Resultado da undefined
// console.log(bagunca)   -> Fica arrays de arrays
// console.table(bagunca)  -> Fica tipo uma matriz

for(let i = 0; i < bagunca.length; i++) {
    for(let j = 0; j < bagunca[i].length; j++) {
console.log(bagunca[i][j])
    }
}