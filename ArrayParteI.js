const caixa = document.querySelector(".caixa");

const champions=["SCP","BLKS", "PSG", "R.M", "PSV"]
const cursos=["HTML","JAVA","PYTHON", champions];


//unshift adiciona no inicio do array
//cursos.unshift("RUBY");

//push adiciona no final do array
cursos.push("TYPESCRIPT");


//shift remove no inicio do array
cursos.shift();

//pop remove no fim do array
//cursos.pop();

cursos.map((el) =>{
 let p =document.createElement("p");
 p.innerHTML = el 
 caixa.appendChild(p);
})
console.log(cursos)