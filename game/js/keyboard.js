window.onkeydown = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;
	
	if(hud) d2.clearRect(canvas.width-84, 0, canvas.width, 19);
	if(hud) d2.fillText("keyDown: " + e.keyCode, canvas.width-83, 15);
};

window.onkeyup = function(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;
	
	if(hud) d2.clearRect(canvas.width-83, 25, 83, 15);
	if(hud) d2.fillText("keyUp: " + e.keyCode, canvas.width-83, 35);
};

function keyInput(){

	//move left
	if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		player.sprite = sprite_mario_left;
		player.direction = "left";
		if (player.vx > -maxSpeed) {
			player.vx--;
		}
	}
	else if(!pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
	}
	
	//full jump
	if(pressedKeys[VK_UP] || pressedKeys[VK_W]){
		jumpCharge = 0;
		if(!player.midAir){
			player.vy =- 15;
			player.midAir = true;
		}
	}
	else if(!pressedKeys[VK_UP] || pressedKeys[VK_W]){
	}
	
	//move right
	if(pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
		player.sprite = sprite_mario_right;
		player.direction = "right";
		if (player.vx < maxSpeed) {
			player.vx++;
		}
	}
	else if(!pressedKeys[VK_RIGHT] || pressedKeys[VK_D]){
	}
	
	//charge jump
	if(pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		if(!player.midAir){
			jumpCharge += 4;
			jumpCharge = (jumpCharge > 100) ? 100 : jumpCharge;
		}
	}//release charged jump
	else if(!pressedKeys[VK_DOWN] || pressedKeys[VK_S]){
		if(!player.midAir){
			player.vy =- 3;
			player.vy *= jumpCharge/20;
			jumpCharge = 0;
			player.midAir = true;
		}
	}
	
	//stop movement
	if(pressedKeys[VK_Z]){
		player.vx = 0;
	}
	else if(!pressedKeys[VK_Z]){
	}
	
	//shoot projectile
	if(pressedKeys[VK_SPACEBAR] && !isShooting && projectiles.length < 5){
		projectiles[projectileCounter] = new Projectile(player.x, player.y+20, sprite_fireball_1, 15, 15, true, player.direction);
		projectileCounter++;
		isShooting = true;
	}
	else if(!pressedKeys[VK_SPACEBAR]){
		isShooting = false;
	}
	
	//hiei
	if(pressedKeys[VK_Q] && !isHieing){
		isHieing = true;
		
		if(player.direction == "right")player.x+=100
		else if(player.direction == "left")player.x-=100
		player.vx = player.vx*0.5;
		
		if(player.x<0) player.x = 0;
		if(player.x >= canvas.width-player.sprite.width) player.x = canvas.width-player.sprite.width;
	}
	else if(!pressedKeys[VK_Q]){
		isHieing = false;
	}
	
	//HUD on/off
	if(pressedKeys[VK_H] && !isPressing ){
		isPressing = true;
		
		if(hud){
			hud=false;
			d2.clearRect(0,0,canvas2.width,canvas2.height);
		}
		else if(!hud)
			hud=true;
	}
	else if(!pressedKeys[VK_H]){
		isPressing = false;
	}

}