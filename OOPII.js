class carro {
    constructor(pnome, ptipo) {
        this.nome = pnome;
        if (ptipo == 1) {
            this.tipo = "Desportivo";
            this.velmax = 300;
        } else if (ptipo == 2) {
            this.tipo = "Utilitario";
            this.velmax = 100;
        } else if (ptipo == 3) {
            this.tipo = "Passeio";
            this.velmax = 160;
        } else {
            this.tipo = "Militar";
            this.velmax = 180
        }
    };

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelocidade() {
        return this.velmax;
    }

    setNome(nome) {
        this.nome = nome
    }
    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log("--------------------------")
    }
}


let car1 = new carro("Nissan", 1);
car1.setNome("Bugatti")
car1.setNome("Rolls Royce")
console.log(car1.info());
