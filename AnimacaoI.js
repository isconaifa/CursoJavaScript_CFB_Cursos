const bnt_esquerda = document.getElementById('bnt_esquerda');
const bnt_direita = document.getElementById('bnt_direita');
const carro = document.getElementById('carro');
const parar = document.getElementById('parar');


const init = () => {
    carro.style = "position:relative;left:0px;width:100px"
    tamaMax=window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamaMax = null

const mover = (dir) => {
    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamaMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima=setTimeout(mover,20,dir)
        }else{
            clearTimeout(anima)
        }
    }else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima=setTimeout(mover,20,dir)
        }else{clearTimeout(anima)}
    }

}
parar.addEventListener("click", () => {
    clearTimeout(anima)
})
bnt_esquerda.addEventListener("click", () => {
    clearTimeout(anima)
   mover(-1)
})
bnt_direita.addEventListener("click", () => {
    clearTimeout(anima)
    mover(1)
})

//window.onload = init;
window.addEventListener("load",init())
window.addEventListener("resize", () => {
    tamaMax = window.innerWidth - parseInt(carro.style.width)
})
