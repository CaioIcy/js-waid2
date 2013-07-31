//keyboard
var pressedKeys = [];

//game
var hud = true;
var projectiles = [];
var projectileCounter = 0;
var jumpCharge = 0;
var maxSpeed = 5;
var friction = 0.98;
var airFriction = 0.999;
var animation = 0;

//all
const onefps = 1000/60;

var canvas = document.getElementById('canvas');
var d = canvas.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var d2 = canvas2.getContext('2d');

d2.font='10pt arial';

function clearScreen(canv, color){
	if(canv=="canvas"){
		d.fillStyle=color;
		d.fillRect(0,0,canvas.width,canvas.height);
		d.fillStyle="black";
	}
	else if(canv=="canvas2"){
		d2.fillStyle=color;
		d2.fillRect(0,0,canvas2.width,canvas2.height);
		d2.fillStyle="black";
	}
	else alert("canvas does not exist (basic.clearScreen)");
}

function getTimestamp(){
	return window.performance.now();
}
