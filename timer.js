
let relo = document.getElementById("div_relogio")
const hora_alarme = document.getElementById("hora_alarme")
const btn_ativar = document.getElementById("btn_ativar")
const tmp_alarme = document.getElementById("tmp_alarme")
const btn_parar= document.getElementById("btn_parar")
const timer = document.getElementById("timer")

const som_alarme=new Audio("alarme.mp3")
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener("click", (e) => {
ts_atual=Date.now()
ts_alarme=ts_atual+(tmp_alarme.value*1000)
alarme_ativado=true
const dt_alarme=new Date(ts_alarme)
hora_alarme.innerHTML="Hora do Alarme:"+dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", () => {
alarme_ativado=false
alarme_tocando=false
hora_alarme.innerHTML="Hora do Alarme:"
tmp_alarme.value=0
timer.classList.remove("alarme")
som_alarme.pause()
som_alarme.currentTime=0
})


const relogio = () => {
    const data = new Date()
    let horaCerta
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    if (hora < 10) {
        hora = "0" + hora
    } else {
        hora = hora
    }

    if (minuto < 10) {
        minuto = "0" + minuto
    } else {
        minuto = minuto
    }

    if (segundo < 10) {
        segundo = "0" + segundo
    } else {
        segundo = segundo
    }
    horaCerta = `${hora}:${minuto}:${segundo}`
    relo.innerHTML = horaCerta
    if (alarme_ativado && !alarme_tocando) {
    if (data.getTime() >= ts_alarme) {
        alarme_tocando=true
        som_alarme.play()
        timer.classList.add("alarme");
        
    }
}
}

const intervalo = setInterval(relogio, 1000)

