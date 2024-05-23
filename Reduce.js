const array = document.querySelector("#array");
const btnReduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array =[1,2,3,4,5]
let ant=[];
let atu=[];

array.innerHTML = "["+elementos_array+"]";
btnReduzir.addEventListener("click", (e)=>{
  resultado.innerHTML=elementos_array.reduce((anterior,atual,pos)=>{
    ant.push(anterior);
    atu.push(atual);
    return anterior+atual
  })
  resultado.innerHTML+="<br/>V.anterior: "+ant+"<br/>V.atual: "+atu;
})