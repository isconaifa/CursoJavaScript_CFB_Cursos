function soma(...valores){
//let tam = valores.length;
let res=0;
/*for(let i=0; i<valores.length; i++){
res += valores[i];
}
*/
for (const i of valores){ 
    res += i;
}

return res;
}


let fun_da_soma = soma(4, 5, 8, 7, 54);
console.log(fun_da_soma)
