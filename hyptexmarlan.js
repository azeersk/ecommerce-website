let SingleProductImageElement = document.getElementById("SingleProductImage");
let imageChangerOneElement = document.getElementById("imageChanger");
function imageOne(){
	SingleProductImageElement.src = imageChangerOneElement.src;
}
let imageChangerTwoElement= document.getElementById("imageChangerOne");
function imageTwo(){
	SingleProductImageElement.src = imageChangerTwoElement.src;
}
let imageChangerThreeElement= document.getElementById("imageChangerTwo");
function imageThree(){
	SingleProductImageElement.src = imageChangerThreeElement.src;
}
let imageChangerFourElement = document.getElementById("imageChangerThree");
function imageFour(){
	SingleProductImageElement.src = imageChangerFourElement.src;
}

let LoginFormElement = document.getElementById("LoginForm");
let RegisterFormElement = document.getElementById("RegisterForm");
let IndicaterElement = document.getElementById("Indicater");

function register(){
	RegisterFormElement.style.transform = "translateX(0px)";
	LoginFormElement.style.transform = "translateX(0px)";
	IndicaterElement.style.transform = "translateX(0px)";
}
function login(){
	LoginFormElement.style.transform = "translateX(300px)";
	RegisterFormElement.style.transform = "translateX(300px)";
	IndicaterElement.style.transform = "translateX(100px)";
}