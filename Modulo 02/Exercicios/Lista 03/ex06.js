// Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

let musicas = [
    { titulo: "Believer", artista: "Imagine Dragons", duracao: 204 },
    { titulo: "Shape of You", artista: "Ed Sheeran", duracao: 233 },
    { titulo: "Blinding Lights", artista: "The Weeknd", duracao: 200 }
];

for (let musica of musicas) {
    let minutos = Math.floor(musica.duracao / 60);
    let segundos = musica.duracao % 60;

    console.log(
        `${musica.artista} — ${musica.titulo} (${minutos}:${segundos.toString().padStart(2, "0")})`
    );
}

let duracaoTotal = 0;

musicas.forEach(musica => {
    duracaoTotal += musica.duracao;
});

let minutosTotal = Math.floor(duracaoTotal / 60);
let segundosTotal = duracaoTotal % 60;

console.log(`Duração total: ${minutosTotal}:${segundosTotal.toString().padStart(2, "0")}`);