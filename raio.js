class Circulo {
    constructor(raio) {
        this.raio = raio;
    };


    infoCal() {
        let a = Math.floor(Math.PI * Math.pow(this.raio, 2))
        return a
    }


    getRaio(){
        return this.raio;
    }
    setRaio(raio){
        this.raio=raio;
    }
}

const cir1 = new Circulo(2)
const cir2 = new Circulo(2)
cir1.setRaio(4)
cir1.infoCal()
const c1 = cir1.infoCal()
const c2 = cir2.infoCal()

console.log(`O raio calculado é de: ${c1}`)
console.log(`O raio calculado é de: ${c2}`)
