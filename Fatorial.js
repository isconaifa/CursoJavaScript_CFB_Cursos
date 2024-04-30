/*function fatorial(numero){
    if (numero == 0 || numero == 1){
        return 1
    } else  {
       return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))
*/
function fatorial(n){
fat = 1
while (n>=1) {
    fat*=n
n--
}
 return fat
}
console.log(fatorial(0))
