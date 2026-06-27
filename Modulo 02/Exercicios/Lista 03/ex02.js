// Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

let personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 80,
    defesa: 70
};

let personagem2 = {
    nome: "Mago",
    vida: 90,
    ataque: 95,
    defesa: 60
};

for (let atributo in personagem1) {
    console.log(
        `${atributo}: ${personagem1[atributo]} | ${personagem2[atributo]}`
    );
}

let poder1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
let poder2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

if (poder1 > poder2) {
    console.log(`${personagem1.nome} tem o maior poder total: ${poder1}`);
} else if (poder2 > poder1) {
    console.log(`${personagem2.nome} tem o maior poder total: ${poder2}`);
} else {
    console.log(`Empate! Ambos têm poder total de ${poder1}`);
}