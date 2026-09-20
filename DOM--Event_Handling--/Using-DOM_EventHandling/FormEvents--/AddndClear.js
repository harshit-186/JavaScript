let myForm = document.myfrm;
let txtFirst = myForm.txtfno;
let txtSec = myForm.txtsno;
let txtThird = myForm.txtresult;
let btnAdd = myForm.btnadd;
let btnClear = myForm.btnclear;
const span1 = document.querySelector("#fnoerror");
const span2 = document.querySelector("#snoerror");

const validate = (fnum, snum) => {
	let isValid = true;
	if (fnum.length === 0 || isNaN(fnum)) {
		if (fnum.length === 0) {
			span1.innerText = "Input Required";
		} else {
			span1.innerText = "Only digits allowed";
		}
		span1.style.color = "crimson";
		txtFirst.classList.add("error");
		isValid = false;
	} else {
		span1.innerText = "";
		txtFirst.classList.remove("error");
	}
	if (snum.length === 0 || isNaN(snum)) {
		if (snum.length === 0) {
			span2.innerText = "Input Required";
		} else {
			span2.innerText = "Only digits allowed";
		}
		span2.style.color = "crimson";
		txtSec.classList.add("error");
		isValid = false;
	} else {
		span2.innerText = "";
		txtSec.classList.remove("error");
	}
	return isValid;
};
btnAdd.addEventListener("click", () => {
	let x = txtFirst.value;
	let y = txtSec.value;
	let result = validate(x, y);
    if(result){
    let z =  Number(x) + Number(y) ;
    txtThird.value = z ;
    }
});
btnClear.addEventListener("click" , ()=>{
    txtFirst.value="";
    txtSec.value="";
    txtThird.value="";
    txtFirst.focus();
})
