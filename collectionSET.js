const caixa = document.querySelector(".caixa");
let musicos=new Set(["Manoel Gomesbr","Mc Mário","Flavnais","Americo Gomes"])
musicos.add("Nadile")
musicos.add("Baldé&Baldé");


musicos.delete("Nadile");
//musicos.clear();
console.log(musicos);

/*musicos.forEach((cantor)=>{
    caixa.innerHTML+=cantor +"<br/>";//
})
*/

for (const rap of musicos) {
    caixa.innerHTML += rap +"<br/>";
    
}
