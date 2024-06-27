const nome = new String(" Khvicha Kvaratskhelia");
const nomeII = new String(" KhvichaKvaratskhelia");
const sobrenome = new String("Sokratis Papastathopoulos");
console.log(nome);
console.log(typeof (nome));
console.log(nome.charCodeAt(2));
console.log(nome.concat(sobrenome));
console.log(nome.indexOf("a"));
console.log(nome.lastIndexOf("a"));

if (nome.localeCompare(nomeII) === 0) {
    console.log("Os dois strings são iguais");
} else {
    console.log("Os dois strings não são iguais");
}

//console.log(nome.replace("K","q"));
console.log(nome.search("K"));
console.log(nome.slice(9,nome.length));
const arr_nome = nome.split("k");
console.log(arr_nome);
let part1=nome.substring(6,11);
console.log(part1);
let part2=nome.substr(6,5);
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(nome.toLocaleUpperCase());
console.log(nome.toLocaleLowerCase());
//console.log(nome.replace("K","q"));