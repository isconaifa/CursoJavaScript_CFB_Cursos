const nome=new String("Khvicha Kvaratskhelia");
/*
console.log(nome.search(/kvaratskhelia/i));
console.log(nome.match("a"));
console.log(nome.match(/a/ig));
console.log(nome.replace(/a/ig,"scp"));
*/
const arr =nome.match(/[a-z]/ig)

arr.forEach((letra) => {
    console.log(letra);
});
//console.log(nome.match(/[a-z]/ig));