const datas =document.getElementById("dat")
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
console.log(data_r)

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