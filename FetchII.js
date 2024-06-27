const endpoint = "https://a5e3a439-b1f8-45f4-8f73-3a0fa43a0c0a-00-2edjtzaqgyf3t.spock.replit.dev/"
const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");
const btn_texto = document.getElementById("btn_texto");


const MostrarDados = () => {
    fetch(endpoint)
        .then(res => res.json())
        .then(dados => {
            console.log(dados);
            p_temp.innerHTML = `Temperatura: ${dados.temperatura}ºC`
            p_nivel.innerHTML = ` Nível: ${dados.nivel}`
            p_press.innerHTML = `Pressão: ${dados.pressao}`
        });
}

//const intervalo= setInterval(MostrarDados,1000)
let dados = {
    nome: "Francisco",
    time: "Sporting",
    jogador: "Gyokeres"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint="https://a5e3a439-b1f8-45f4-8f73-3a0fa43a0c0a-00-2edjtzaqgyf3t.spock.replit.dev/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}
