class Pessoa{
    constructor(name, age, nationaly){
      this.nome = name;
      this.idade = age;
      this.nacionalidade = nationaly;
    }
}

let pessoabr = new Pessoa("Wendel", 25, "Brasileiro");
let pessoapt = new Pessoa("Gonçalo", 24, "Portueuês");
let pessoagw = new Pessoa("Mauro", 26, "Guineense");
console.log(pessoabr.nome);
console.log(pessoapt.nome);
console.log(pessoagw.nome);