const tipo_militar = document.querySelector("#tipo_militar");
const tipo_normal = document.querySelector("#tipo_normal");
const tipo_blindagem = document.querySelector("#tipo_blindagem");
const tipo_municao = document.querySelector("#tipo_municao");
const carros = document.querySelector(".carro");
const addCar = document.querySelector("#btn_addCarro");
const remov = document.querySelector("#btn_remove");
const f_nome = document.querySelector("#f_nome");
const f_portas = document.querySelector("#f_portas");

let Array_carros = [];

tipo_militar.addEventListener("click", (e) => {
    f_nome.value="";
    tipo_municao.value=0
    tipo_blindagem.value=0
    f_portas.value=0
    tipo_blindagem.removeAttribute("disabled");
    tipo_municao.removeAttribute("disabled");
});

tipo_normal.addEventListener("click", (e) => {
    f_nome.value="";
    tipo_municao.value=0
    tipo_blindagem.value=0
    f_portas.value=0
    tipo_blindagem.setAttribute("disabled", "disabled");
    tipo_municao.setAttribute("disabled", "disabled");
    tipo_blindagem.value = "0"
});

const car = gerenciarCarros = () => {
    carros.innerHTML = "";
    Array_carros.forEach((car) => {
        const div = document.createElement("div");
        div.setAttribute("class", "carro");
        div.innerHTML = `Nome: ${car.nome} <br/>`;
        div.innerHTML += `Portas: ${car.portas} <br/>`;
        div.innerHTML += `Cor: ${car.cor} <br/>`;
        div.innerHTML += `Blindagem: ${car.blindagem} <br/>`;
        div.innerHTML += `Munição: ${car.municao} <br/>`;
        carros.appendChild(div);
    })
}

addCar.addEventListener("click",() => {
    if (tipo_normal.checked) {
        const c = new Carro(f_nome.value,f_portas.value)
        Array_carros.push(c)
    }else{
        const c = new Military(f_nome.value,f_portas.value,tipo_blindagem.value,tipo_municao.value)
        Array_carros.push(c)
    }
    gerenciarCarros();
});

remov.addEventListener("click", () => {
    //console.log("vc está removendo elemnto da array");
    Array_carros.pop();

})




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

class Military extends Carro {//classe filho
    constructor(nome, portas, blindagem, cor, municao) {
        super(nome, portas)
        this.blindagem = blindagem;
        this.municao = municao;
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--;

        }
    }
}

const c1 = new Carro("BMW", 4);
c1.ligar();
c1.setCor("Prata")


const c2 = new Military("LEOPARD 1A5", 2, "Transparente", 100)
c2.setCor("Verde")
c2.setVel("350km/h")
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
console.log(`Ligado: ${(c2.desligar ? "Sim" : "Não")}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Cor: ${c2.cor}`);
console.log(`--------------------------`);
