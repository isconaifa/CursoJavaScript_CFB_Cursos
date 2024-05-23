const maiorIdade =(valor)=>{
    if(valor>=18){
     return valor
    }
}

const menorIdade =(valor)=>{
    if(valor<18){
     return valor
    }
}

const idades=[12,19,45,71,25,18,32,19,22,25,18,45,71,25,18,11,14,10,20,]
const maior=idades.filter(maiorIdade)
const menor=idades.filter(menorIdade)


console.log(idades)
console.log(maior)
console.log(menor)