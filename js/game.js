//HeartJump mod

var jumpCharge = 0;
var speed = 5;
var friction = 0.98;
var animation = 0;
const fireRate = 50;

var playerSprite = sprite_mario_left;
var floor = canvas.height-playerSprite.height;

var projectiles = [];
var projectileCounter = 0;

function update(){
	//Keyboard Input
	keyInput();
	
	//animation counter
	if(animation<7500) animation++;
	else animation = 0;

	//Coin
	if(coin.animated){
		if(animation%20 > 10) coin.sprite = sprite_coin_front;
		else coin.sprite = sprite_coin_side;
	}
	
	//Player
	if(player.y!=floor) player.midAir = true;
	if(player.midAir){
		applyGravity(player);
		if(!player.midAir) player.vx=player.vx*0.75;
	}
	player.vy *= friction;
    player.y += player.vy;
	if(!player.midAir) player.vx *= friction;
	player.x += player.vx;
	if(player.y < 7.5) player.vy = 7.5;
	if(player.x <= 0) player.vx = 1;
	if(player.x >= canvas.width-player.sprite.width) player.vx = -1;
	
	//Projectile
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

function render(){	
	//d.clearRect(0,0,canvas.width,canvas.height);
	fillPink();

	//Coin	
	d.clearRect(coin.x, coin.y, coin.width, coin.height);
	d.drawImage(coin.sprite, coin.x, coin.y, coin.width, coin.height);
	
	//Player
	d.drawImage(player.sprite, player.x, player.y, player.width, player.height);
	
	//Projectile
	for(i=0; i<projectiles.length; i++){
		var bullet = projectiles[i];
		d.drawImage(bullet.sprite, bullet.x, bullet.y, bullet.width, bullet.height);
	}
	d2.clearRect(450,1,90,20);
	d2.fillText("Projectiles: "+projectiles.length,450,15);
}

function applyGravity(obj){
	gravity = 15/40;
	obj.vy += gravity;
	if(obj.y >= floor){
		obj.vy = 0;
		obj.y = floor;
		obj.midAir = false;
	}	
}

function drawBar(posx,posy,size,state,horizontal,colorInside){
	//"Strength"
	d2.clearRect(14, 5, 50, 20);
	d2.fillText("Strength", 15, 15);

	d2.fillStyle="black";
	if(horizontal){
		d2.fillRect(posx, posy, size, 20);
		d2.fillStyle = colorInside;
		d2.fillRect(posx+1, posy+1, state, 18);
	}
	else if(!horizontal){
		d2.fillRect(posx, posy, 20, size);
		d2.fillStyle = colorInside;
		d2.fillRect(posx+1, posy+(size-state)-1, 18, state);
	}
	d2.fillStyle="black";
}

//////////////
player = new Player(canvas.width/2, floor, playerSprite, 45, 60, false);
coin = new Item(300, 5, sprite_coin_front, 41/2, 47/2, true);

//window.onload = 

window.setInterval("render();", 1);
window.setInterval("update();", onefps);
window.setInterval("drawBar(25,25,100,jumpCharge,false,'green');", onefps);
//////////////