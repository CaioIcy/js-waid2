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

function getCollisionBounds(obj1, obj2){
	if((obj2.y<(obj1.y+obj1.height)) && obj2.x<(obj1.x+obj1.width) && (obj2.y+obj1.height>obj1.y) && obj2.x+obj1.width>obj1.x)
		return true;
	else
		return false;
}

function testCollision(){
	//console.log("testing collision");
	var x = player.x;
	var vx = player.vx;
	var y = player.y;
	var vy = player.vy;
	var w = player.width;
	var h = player.height;
	
	d.fillRect(x-vx, y-vy, w, h);
}
