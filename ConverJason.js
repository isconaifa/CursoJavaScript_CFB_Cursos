const pessoa={
    nome: "Isco",
    clube: "SCP",
    curso: "Eng Computing",
    disciplinas:{
circuitos: "Ronaldo",
poo: "Frederico",
instrumentacao: "Thais",
estatisticas: "Frank"
    }
}
//console.log(pessoa)
/*console.log(pessoa.curso)
console.log(pessoa.disciplinas.instrumentacao)
*/
const pes_jason=JSON.stringify(pessoa)
const pesObj=JSON.parse(pes_jason)
console.log(pes_jason)
console.log(pesObj)