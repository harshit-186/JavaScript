
//change color of div 
function set(){
let div = document.querySelector("div");
div.addEventListener("click" , ()=> {
    div.style.color = "red" ;
});
}
window.onload = set ; 