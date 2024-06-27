const nome = Symbol("nome");
//const numero = Symbol("nome");
const CorUniforme = Symbol("nome");

let sporting=[
     jogador1 = {
        nome: "Gyokeres",
        nacionalidade: "Sueco",
        idade: "26",
        clube: "scp",
        numero: 9,
    },
    jogador2 = {
        nome: "Trincao",
        nacionalidade: "Portugues",
        idade: "23",
        clube: "scp",
        numero: 17,
    },
    jogador3 = {
        nome: "Ioanidis",
        nacionalidade: "Grego",
        idade: "24",
        clube: "scp",
        numero: 24,
    }
];
console.log(sporting.length)
sporting.forEach((j)=>{
    console.log(j);
})

