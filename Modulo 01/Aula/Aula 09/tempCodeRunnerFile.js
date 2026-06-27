let aluno = {
    nome: "Pedro",
    nota: 3,
    atualizarNota: function(novaNota){
        this.nota = novaNota    //this.nota == aluno.nota
    }
}
console.log(`Nota do aluno: ${aluno.nota}`)
aluno.atualizarNota(8)
console.log(`Nota do aluno: ${aluno.nota}`)


const entradas = Object.entries(aluno)

console.log(entradas)