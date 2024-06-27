let dia=document.querySelector(".data")
let hora=document.querySelector(".hora")

const mostrarHora=()=>{
let dados= new Date()
let horas=dados.getHours()
let minutos=dados.getMinutes()
let segundos=dados.getSeconds()
let dias=dados.getDate()
let num_mes=dados.getMonth()+1
let anos=dados.getFullYear()
let mes=null
if (horas<10) {
   horas="0"+horas
} else {
    horas=horas
}

if (dias<10) {
    dias="0"+dias
 } else {
     dias=dias
 }

if (minutos<10) {
    minutos="0"+minutos
 } else {
     minutos=minutos
 }
 if (segundos<10) {
    segundos="0"+segundos
 } else {
     segundos=segundos
 }
 if (num_mes==1) {
    mes="Janeiro"
 } else if(num_mes==2) {
     mes="Fevereiro"
 }else if(num_mes==3) {
    mes="Março"
}else if(num_mes==4) {
    mes="Abril"
}else if(num_mes==5) {
    mes="Maio"
}else if(num_mes==6) {
    mes="Junho"
}else if(num_mes==7) {
    mes="Julho"
}else if(num_mes==8) {
    mes="Agosto"
}else if(num_mes==9) {
    mes="Setembro"
}else if(num_mes==10) {
    mes="Outubro"
}else if(num_mes==11) {
    mes="Novembro"
}else if(num_mes==12) {
    mes="Dezembro"
}else{
    mes="Mês inexistente"
}

dia.innerHTML=`${dias} de ${mes} de ${anos}`

hora.innerHTML=`${horas}:${minutos}:${segundos}`


}

const MeuRelogio=setInterval(mostrarHora,1000)