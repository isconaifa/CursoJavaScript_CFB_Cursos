const longi = document.getElementById("long");
const latit = document.getElementById("lati");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,ErroLocalizacao)
} else {
    console.log("Geolocalização não suportada");
}
function mostrarLocalizacao(pos) {
    console.log(pos)
    
   longi.innerHTML=`Longitude: ${pos.coords.longitude}`
   latit.innerHTML=`Latitude: ${pos.coords.latitude}`

   
}

function ErroLocalizacao() {
    console.log("Erro ao tentar obter a localização");
}
    