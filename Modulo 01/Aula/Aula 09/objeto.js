/*
    let objeto = {
        propiedade1: valor1,
        propriedade2: valor2
    }

*/

//let nome = "Pedro"
//let idade = 18
//let matriculado = true

let aluno = {
    nome: "Pedro",      // string
    idade: 18,          // number
    matriculado: true,  // boolean
    notas: [8, 8, 9],   // array
    "notas dos alunos": [8,8,9], // Para colocar espaços e caracteres especiais usando a aspas duplas
    endereco: {         // objeto
        cidade: "Londrina",
        estado: "PR"
    }
}
console.log(aluno["notas dos alunos"])
let propriedade = "nome"
console.log(aluno[propriedade])  // Busca a propriedade nome que no caso é Pedro acima do código

let produto = {}
console.log(produto)
produto.nome = "Camiseta"
produto.preco = 49.90
produto.quantidadeEstoque = 100
produto.descricao = "Camiseta de algodão"
console.log(produto)
produto.preco = 20.00
console.log(produto.preco)

for(let propriedade in alunos){
    console.log(`${propriedade}: ${alunos[propriedade]}`)
}

/*
let aluno = {
    nome: "Pedro",
    nota: 3,
    atualizarNota: function(novaNota){
        this.nota = novaNota    this.nota == aluno.nota
    }
}
console.log(`Nota do aluno: ${aluno.nota}`)
aluno.atualizarNota(8)
console.log(`Nota do aluno: ${aluno.nota}`)
*/

// const entradas = Object.entries(aluno)
// console.log(entradas)