var pressedKeys = [];

function onKeyDown(e){
	e=e||event;
	pressedKeys[e.keyCode] = true;
	
	d2.clearRect(canvas.width-84, 0, canvas.width, 19);
	d2.fillText("keyDown: " + e.keyCode, canvas.width-83, 15);
}

function onKeyUp(e){
	e=e||event;
	pressedKeys[e.keyCode] = false;
	
	d2.clearRect(canvas.width-84, 0, canvas.width, 40);
	d2.fillText("keyUp: " + e.keyCode, canvas.width-83, 35);
}

function keyInput(){

	//move left
	if(pressedKeys[VK_LEFT] || pressedKeys[VK_A]){
		player.sprite = sprite_mario_left;
		player.direction = "left";
		if (player.vx > -speed) {
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
		if (player.vx < speed) {
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
		
		if(player.x<0) player.x = 0;
		if(player.x >= canvas.width-player.sprite.width) player.x = canvas.width-player.sprite.width;
	}
	else if(!pressedKeys[VK_Q]){
		isHieing = false;
	}

}

window.onkeydown = onKeyDown;
window.onkeyup = onKeyUp;