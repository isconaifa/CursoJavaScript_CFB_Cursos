const url=document.getElementById("url");
const btn_urlurl=document.getElementById("btn_url");

btn_urlurl.addEventListener("click",(e)=>{
//window.location="https://www.sporting.pt/pt"
//window.history.back();
//window.history.forward();
///window.history.go(1);
window.location=url.value;
})