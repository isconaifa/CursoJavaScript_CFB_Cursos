class Carro {//classe pai
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;

    }
    ligar = function () {
        this.ligado = true;
    };

    desligar = function () {
        this.ligado = false;
    };
    setCor = function (cor) {
        this.cor = cor;
    };

    setVel = function (vel) {
        this.vel = vel;
    };
}

class Military extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem;
        this.municao = municao;
    }
atirar=function (){
    if (this.municao>0) {
        this.municao--;
        
    }
}
}

const c1 = new Carro("BMW", 4);
c1.ligar();
c1.setCor("Prata")


const c2 = new Military("LEOPARD 1A5",2,"Transparente",100)
c2.setCor("Verde")
c2.setVel("350km/h")
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();


console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${(c1.desligar ? "Sim" : "Não")}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log(`--------------------------`);


console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Ligado: ${(c2.desligar?"Sim":"Não")}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Cor: ${c2.cor}`);
console.log(`--------------------------`);
