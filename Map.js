/*const cursos = ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'REACT' ];
let c= cursos.map((element,index) =>{
    return "<div>"+element+"</div>"
})
console.log(c)
*/
/*
let el= document.getElementsByTagName("div");
el=[...el]
el.map((e,i)=>{
//console.log(e.innerHTML)

e.innerHTML='Ricky Van Wolfswinkel';
console.log(e.innerHTML)

})
*/
/*
const el= document.getElementsByTagName("div");
const val =Array.prototype.map.call(el,({innerHTML})=>innerHTML);
console.log(val);
*/

const convertInt = (e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(dobrar);

console.log(num);