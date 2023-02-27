canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
	alphabetkey();
	document.getElementById("d1").innerHTML="You pressed an alphabet key.";
	console.log(alphakey);
	}
	if(keyPressed >=48 && keyPressed<=57) {
	numberkey();
	document.getElementById("d1").innerHTML="You pressed a number key.";
	console.log(numkey);
	}
	if(keyPressed >=37 && keyPressed<=40) {
	arrowkey();
	document.getElementById("d1").innerHTML="You pressed an arrow key.";
	console.log(arrkey);
	}
	if(keyPressed >=17 && keyPressed <=27) {
	specialkey();
	document.getElementById("d1").innerHTML="You pressed a special key.";
	console.log(spkey);
	}
	if(keyPressed >=13 && keyPressed <=16) {
	otherkey();
	document.getElementById("d1").innerHTML="You pressed a symbol key.";
	console.log(sykey);
	}
	if(keyPressed =127) {
	otherkey2();
	document.getElementById("d1").innerHTML="You pressed a symbol key.";
	console.log(sykey2);
	}
}
	

function alphabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
	
}
function arrowkey() {
img_image="Arrkey.png";
add();
}
{
}
function specialkey()
{
img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
function otherkey2(){
	img_image="otherkey.png";
	add();
}
	
