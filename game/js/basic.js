//keyboard
var pressedKeys = [];

//game
var hud = true;
var projectiles = [];
var projectileCounter = 0;
var jumpCharge = 0;
var maxSpeed = 5;
var friction = 0.98;
var animation = 0;

//all
const onefps = 1000/60;

var canvas = document.getElementById('canvas');
var d = canvas.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var d2 = canvas2.getContext('2d');

d2.font='10pt arial';

function clearScreen(color){
	d.fillStyle=color;
	d.fillRect(0,0,canvas.width,canvas.height);
}

function getTimestamp(){
	return window.performance.now();
}
