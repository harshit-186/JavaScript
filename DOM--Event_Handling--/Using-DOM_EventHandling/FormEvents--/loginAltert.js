
let myForm = document.flogin ;
let txt = myForm.userName ; 
let pwd = myForm.userPwd ; 
let stb = myForm.ip ;
stb.addEventListener("click" , ()=>{
    alert(txt.value + "," + pwd.value);
});