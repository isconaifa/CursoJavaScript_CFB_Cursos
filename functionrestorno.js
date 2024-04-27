function retorno(a, b) {
    res = a * b
    if (res % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

//let texte = retorno(7, 3)
console.log(retorno(7, 5));