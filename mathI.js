const olhos=[...document.getElementsByClassName("olhos")];

let posx_mouse=0
let posy_mouse=0
window.addEventListener("mousemove", (e)=>{
posx_mouse=e.clientX
posy_mouse=e.clientY

const rot=Math.atan2(posy_mouse, posx_mouse) *180 / Math.PI
olhos.forEach((element) => {
    element.style.transform="rotate("+rot+"deg)";
});
//console.log(posx_mouse);
})
