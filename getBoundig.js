const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

q1.accessKey="b"
q2.accessKey="c"
console.log(q2.accessKey)

const info = (elemento) => {
    let DomRect_q = elemento.getBoundingClientRect()
    posx.innerHTML = `posx:${DomRect_q.x}`
    posy.innerHTML = `posy:${DomRect_q.y}`
    largura.innerHTML = `largura:${DomRect_q.width}`
    altura.innerHTML = `altura:${DomRect_q.height}`
}
q1.addEventListener("click", (e) => {
    info(e.target)
});
q2.addEventListener("click", (e) => {
    info(e.target)
});