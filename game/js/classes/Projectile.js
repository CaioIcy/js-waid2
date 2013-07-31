function Projectile(x, y, sprite, width, height, animated, direction){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.width = width;
	this.height = height;
	this.animated = animated;
	this.direction = direction;	
}

function updateProjectile(){
	for(i=0; i<projectiles.length; i++){
		var bullet = projectiles[i];
		if(bullet.direction == "right") bullet.x+=5;
		else if(bullet.direction == "left") bullet.x-=5;
		
		if(bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height){
			projectiles.splice(projectiles.indexOf(bullet), 1);
			projectileCounter--;		
		}
		
		if(bullet.animated){
			if(animation%20>10) bullet.sprite = sprite_fireball_1;
			else bullet.sprite = sprite_fireball_2;
		}
	}
}

function renderProjectile(){
	if(hud){
		d2.clearRect(450,1,80,17);
		d2.fillText("Projectiles: "+projectiles.length,450,15);
	}
	for(var i=0; i<projectiles.length; i++){
		var bullet = projectiles[i];
		d.drawImage(bullet.sprite, bullet.x, bullet.y, bullet.width, bullet.height);
	}
}
