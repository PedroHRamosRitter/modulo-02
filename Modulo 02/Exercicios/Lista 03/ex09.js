// Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".

let contatos = [
    { nome: "Pedro", telefone: "(43) 99999-1111", email: "pedro@email.com" },
    { nome: "Ana", telefone: "(43) 99999-2222", email: "ana@email.com" },
    { nome: "Carlos", telefone: "(43) 99999-3333", email: "carlos@email.com" }
];

contatos.forEach(contato => {
    console.log(
        `Nome: ${contato.nome} | Telefone: ${contato.telefone} | E-mail: ${contato.email}`
    );
});

let nomeBusca = prompt("Digite o nome do contato:");
let encontrado = false;

for (let contato of contatos) {
    if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
        console.log(`Nome: ${contato.nome}`);
        console.log(`Telefone: ${contato.telefone}`);
        console.log(`E-mail: ${contato.email}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Contato não encontrado.");
}