const teclasNum = [...document.querySelectorAll(".num")];
//const teclasOp=[...document.querySelectorAll(".teclaOp")];
const teclasop = [...document.querySelectorAll(".op")];
const res = document.querySelector(".res");
const display = document.querySelector(".display");
const tecla_ON = document.querySelector("#ton");
const tecla_lim = document.querySelector("#tlim");
const som = document.getElementById("t+");
const subt = document.getElementById("t-");
const cpy = document.getElementById("cpy");
const teste = document.getElementById("teste");
const divis = document.getElementById("tdiv");

let sinal = false;
let decimal = false;
teclasNum.forEach((el) => {
    el.addEventListener("click", (e) => {
        sinal = false;

        if (e.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == "0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML += e.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += e.target.innerHTML
        }

        //console.log(e.target);
    })
})


teclasop.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (!sinal) {
            sinal = true;
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (e.target.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += e.target.innerHTML
            }

        }
    })
})

tecla_lim.addEventListener("click", (e) => {
    sinal = false;
    decimal = false;
    display.innerHTML = "0"
});

res.addEventListener("click", (e) => {
    sinal = false;
    decimal = false;
    const resulado = eval(display.innerHTML)
    display.innerHTML = resulado
});

cpy.addEventListener("click", (e) => {
    navigator.clipboard.writeText(display.innerHTML)

    /*teste.select()
    teste.setSelectionRange(0,9999999)//for devices mobile
    navigator.clipboard.writeText(teste.value)
    */
})

