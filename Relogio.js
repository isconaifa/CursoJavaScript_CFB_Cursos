const datas =document.getElementById("dat")
const relo=document.getElementById("div_relogio")
const data = new Date()
let dia = data.getDate()
let mes= data.getMonth()+1
const ano = data.getFullYear()

if (dia<10) {
    dia="0"+dia
} else {
    dia=dia
}

if (mes<10) {
    mes="0"+mes
} else {
    mes=mes
}
const data_r = dia+"/"+mes+"/"+ano
datas.innerHTML=data_r

const relogio=()=>{
const data = new Date()
let horaCerta
   let hora= data.getHours()
   let minuto=data.getMinutes()
   let segundo=data.getSeconds()

   if (hora<10) {
    hora="0"+hora
} else {
    hora=hora
}

if (minuto<10) {
    minuto="0"+minuto
} else {
    minuto=minuto
}

if (segundo<10) {
    segundo="0"+segundo
} else {
    segundo=segundo
}
 horaCerta= `${hora}:${minuto}:${segundo}`
   return relo.innerHTML=horaCerta
}

const intervalo=setInterval(relogio,1000)
/*
dia do mes = getDate()
dia da semana (numero) =getDay()
Ano com 4 digitos = getFullYear()
horas = getHours()
milisegundos = getMiliseconds()
mes = getMonths()
segundos = getSeconds()
milisegundos desde 1 de janeiro de 1970 = getTime() (Timestamp.now())
timezone da loicalidade = getTimezoneOffset()
define dia de mes para data = setDate()
define mes para data= setmonth()
define ano para data = seFullYear()
define horas= setHours()
definei minutos= setminutes()
define segundos= setSeconds()
define milisegundos= setMiliseconds()
retorna somente data toDateString()
*/