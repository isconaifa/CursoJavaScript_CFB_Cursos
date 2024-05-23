const array = document.querySelector("#array");
const testoPesquisa = document.querySelector("#txt_pesquisar");
const bPesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array =["Java","JavaScript","Python","C#","C++","SQL","PHP","REACT"]
array.innerHTML = "["+elementos_array+"]";

bPesquisar.addEventListener("click", (e) => {
    resultado.innerHTML = "Valor não encontrado";
const ret=elementos_array.find((el, i)=>{
 if (el.toUpperCase()==testoPesquisa.value.toUpperCase()) {
    resultado.innerHTML = "Valor pesquisado " +el + " na posição " + i;
    return el
 }else if (el==undefined) {

 }
})
console.log(ret)
})