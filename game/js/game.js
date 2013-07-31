var playerSprite = sprite_mario_left;
var floor = canvas.height - 60; // -playerSprite.height

player = new Player(canvas.width/2, floor, playerSprite, 45, 60, false);
coin = new Item(700, 390, sprite_coin_front, 41/2, 47/2, true);

function update(){
	//Jump Charge Bar
	drawBar(10,20,100,jumpCharge,true,'green');

	//animation counter (bad)
	if(animation<7500) animation++;
	else animation = 0;
	
	updateKeyInput();
	updateCoin();
	updatePlayer();
	updateProjectile();
}

function render(){	
	clearScreen("canvas", "pink");
	renderCoin();
	renderPlayer();
	renderProjectile();
}

function applyGravity(obj){
	if(obj.midAir){
		var gravity = 15/40;
		obj.vy += gravity;
		if(obj.y > floor){
			obj.vy = 0;
			obj.y = floor;
			obj.midAir = false;
		}
	}	
}

function drawBar(posx,posy,size,state,horizontal,colorInside){
	//"Jump Charge"
	if(hud){
		d2.clearRect(22, 5, 78, 15);
		d2.fillText("Jump Charge", 23, 15);
	}

	d2.fillStyle="black";
	if(horizontal){
		d2.fillRect(posx, posy-1, size+2, 20);
		d2.fillStyle = colorInside;
		d2.fillRect(posx+1, posy, state, 18);
	}
	else if(!horizontal){
		d2.fillRect(posx, posy-1, 20, size+2);
		d2.fillStyle = colorInside;
		d2.fillRect(posx+1, posy+(size-state), 18, state);
	}
	d2.fillStyle="black";
}

//////////////
window.setInterval("render();", 1);
window.setInterval("update();", onefps);
