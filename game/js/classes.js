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

function Item(x, y, sprite, width, height, animated){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.width = width;
	this.height = height;
	this.animated = animated;
}

function Projectile(x, y, sprite, width, height, animated, direction){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.width = width;
	this.height = height;
	this.animated = animated;
	this.direction = direction;	
}
