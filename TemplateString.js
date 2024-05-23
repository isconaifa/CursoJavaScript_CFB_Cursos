const caixa = document.querySelector(".caixa");

const carros=["Polo","Golf","T-Cross","HRV"]

let ul=`<ul>`
carros.map((car)=>{
    ul+=`<li>${car}</li>`
})
ul+`</ul>`
caixa.innerHTML=ul
