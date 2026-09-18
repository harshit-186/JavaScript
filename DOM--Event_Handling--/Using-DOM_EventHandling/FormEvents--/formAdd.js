let myForm=document.myfrm;
let firstTxt=myForm.txtfno;
let secTxt=myForm.txtsno;
let thirTxt=myForm.txtresult;
let btnAdd=myForm.btnadd;
let btnClear=myForm.btnclear;

btnAdd.addEventListener("click",()=>{
let x=Number(firstTxt.value);
let y=Number(secTxt.value);
let z=x+y;
thirTxt.value=z;
});

btnClear.addEventListener("click",()=>{
firstTxt.value="";
secTxt.value="";
thirTxt.value="";
firstTxt.focus();

});