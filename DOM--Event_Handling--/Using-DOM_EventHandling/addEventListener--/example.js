

// on double click on heading it should bcome italic
let h2 = document.querySelector("h2");
h2.addEventListener("dblclick" , ()=>{
    h2.style.fontStyle = "italic" ;
    h2.style.textAlign = "center" ; 
    h2.style.fontSize = "50px"; 
    h2.style.color = "red";
});