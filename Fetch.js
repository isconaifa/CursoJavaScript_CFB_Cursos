const endpoint="https://a5e3a439-b1f8-45f4-8f73-3a0fa43a0c0a-00-2edjtzaqgyf3t.spock.replit.dev/"
const p_texto=document.getElementById("p_texto");
const btn_texto=document.getElementById("btn_texto");

fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
console.log(dados);
});
  
