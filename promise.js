const numero=document.getElementById("numero");
const bnt_promessa=document.getElementById("btn_promessa");

bnt_promessa.addEventListener("click", (e) =>{
    numero.innerHTML="Processando...";
    promessa();
})

numero.innerHTML="Esperando você clicar no botão promessa";
let promessa=()=>{
    let promise = new Promise((resolve, reject) =>{
        let resultado=false;
        let tempo=3000;
    
        setTimeout(()=>{
            resultado=true;
            if (resultado) {
                resolve("Deu tudo certo!");
            } else {
                reject("Deu tudo errado!")
            }
        }, tempo);
    })
    
    promise.then((retorno) =>{
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok");
    })
    
    promise.catch((retorno) =>{
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok");
    })
}

