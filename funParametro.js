const valorPadrao=0;

function exponencial(n1=valorPadrao, n2=valorPadrao){
 let res
 res = Math.pow(n1,n2);
 return res
}

let exp = exponencial(8,3)
console.log(exp)