//const c1 = document.getElementById("c1");
const cursos=[...document.querySelectorAll(".curso")];
cursos.map((el)=>{
    el.addEventListener("click",(e)=>{
        const el =e.target;
        el.classList.add("destaque");
        console.log(el.innerHTML+ " foi Clicado")

    })
})

/*c1.addEventListener("click", (e) => {
 console.log(e);
})
*/