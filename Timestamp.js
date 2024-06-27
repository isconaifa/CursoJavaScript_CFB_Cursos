const timer=document.getElementById("timer");
const btn_iniciar=document.getElementById("btn_iniciar");
const btn_parar=document.getElementById("btn_parar");
const btn_zerar=document.getElementById("btn_zerar");
const btn_parcial=document.getElementById("btn_parcial");
const parciaisregistradas=document.getElementById("parciaisregistradas");

let intervalo = null;
let  tmpini=null;
const contador=()=>{
    const tmatual=Date.now()
    let cont = tmatual-tmpini;
    let seg=(tmatual-tmpini)/1000
    timer.innerHTML=converter(seg)
    //console.log(seg)

}

const converter=(seg)=>{
let hora =Math.floor(seg/3600)
let resto=seg%3600
let minuto=Math.floor(resto/60)
let segundo=Math.floor(resto%60)
let tempoformatado=(hora<10?"0"+hora:hora)+":"+(minuto<10?"0"+minuto:minuto)+":"+(segundo<10?"0"+segundo:segundo)
return tempoformatado
}



btn_iniciar.addEventListener("click",()=>{
    tmpini=Date.now();
intervalo=setInterval(contador,1000)
})

btn_parcial.addEventListener("click",()=>{
    let parcial = "<div>"+timer.innerHTML+"</div>"
    parciaisregistradas.innerHTML+=parcial

})

btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo)
})
btn_zerar.addEventListener("click",()=>{
    tmpini=Date.now();
    timer.innerHTML="00:00:00"
    parciaisregistradas.innerHTML= ""
    clearInterval(intervalo)
    
})