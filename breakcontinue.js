let n = 0
let max = 100
let pares = 0;
while (n < max) {
    if (n % 2 != 0) {
        continue
        pares = pares + 1;
        console.log(n);


    }
    n++

}
console.log("De zero a 100 temos : " + pares, "númeres pares");