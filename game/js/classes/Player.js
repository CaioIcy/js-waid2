function Player(x, y, sprite, width, height, animated){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.width = width;
	this.height = height;
	this.animated = animated;
	
	this.midAir = false;
	this.vy = 0;
	this.vx = 0;
	this.direction = "left";
}

function updatePlayer(){
	if(player.y!=floor) player.midAir = true;
	if(player.midAir){
		applyGravity(player);
		if(!player.midAir) player.vx=player.vx*0.75;
	}
	player.vy *= friction;
    player.y += player.vy;
	if(!player.midAir)
		player.vx *= friction;
	else if(player.midAir)
		player.vx *= airFriction;
	if(player.vx!=0)
		playerCheckVx();
	player.x += player.vx;
	if(player.y < 7.5)
		player.vy = 7.5;
	if(player.x <= 0)
		player.vx = 1;
	if(player.x >= canvas.width-player.sprite.width)
		player.vx = -1;
}

function renderPlayer(){
	if(hud){
		d2.clearRect(449,25,200,17);
		d2.fillText("Vx: "+player.vx,450,35);
	}
	d.drawImage(player.sprite, player.x, player.y, player.width, player.height);
}

function playerCheckVx(){
	if(Math.abs(player.vx)<=0.00001) player.vx=0;
	else if(player.vx>maxSpeed) player.vx=maxSpeed;
	else if(player.vx<-maxSpeed) player.vx=-maxSpeed;
}
