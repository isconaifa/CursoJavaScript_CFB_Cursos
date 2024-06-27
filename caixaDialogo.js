const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_promp = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", (e) => {
    alert(`Olá, tudo bem?`);
});

btn_confirm.addEventListener("click", (e) => {
    const verificacoa = confirm("Tem certeza que quer salvar estas informações?")
    console.log(verificacoa);
});

btn_promp.addEventListener("click", (e) => {
let nome=prompt("Digite seu nome:")
let apelido=prompt("Digite seu apelido: ");
let idade=prompt("Digite sua idade: ");
console.log(`Olá, seu nome completo é: ${nome} ${apelido} e você tem ${idade} anos`);
});