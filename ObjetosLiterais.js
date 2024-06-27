const objetos=document.getElementById("objetos");


const computadores = [
    {
        cpu: "i7",
        ram: "32gb",
        ssd: "1Tb"
    },

    {
        cpu: "i5",
        ram: "12gb",
        ssd: "256gb"
    },

    {
        cpu: "i3",
        ram: "8gb",
        ssd: "500gb"
    }
]
 computadores.forEach((c) => {
    const div=document.createElement("div");
    div.innerHTML=c.cpu+" <br/>"+c.ssd+ "<br/>"+c.ram;
    div.setAttribute("class", "computador");
    objetos.appendChild(div);
 })

 const computador = {
        cpu: "i7",
        ram: "32gb",
        ssd: "1Tb"
    }
delete(computador.cpu);

const c1=Object.assign({},computador)
console.log(c1);

//objetos.innerHTML = JSON.stringify(computador[0]);