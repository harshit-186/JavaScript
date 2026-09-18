 
 let myForm = document.myfrm;
 let finp = myForm.txtfno;
 let sinp = myForm.txtsno;
 let thinp = myForm.txtresult;
 let addbtn = myForm.btnadd ;
 let clearbtn = myForm.btnclear ; 

 addbtn.addEventListener("click" , ()=>{
    let a = Number(finp.value) ;
    let b = Number(sinp.value) ;
    let z = a+b ;
    thinp.value = z;
 });

  clearbtn.addEventListener("click" , ()=>{
    finp.value = "";
    sinp.value = "";
    thinp.value = "";
    finp.focus();
 })