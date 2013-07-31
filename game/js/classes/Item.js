function Item(x, y, sprite, width, height, animated){
	this.x = x;
	this.y = y;
	this.sprite = sprite;
	this.width = width;
	this.height = height;
	this.animated = animated;
}

function updateCoin(){
	if(coin.animated){
		if(animation%20 > 10) coin.sprite = sprite_coin_front;
		else coin.sprite = sprite_coin_side;
	}
	
	//coin.x++;
	if(coin.x >= canvas.width) coin.x = 0;
	
}

function renderCoin(){
	//if(hud){
		//d2.clearRect(coin.x, coin.y, coin.width, coin.height);
		d.drawImage(coin.sprite, coin.x, coin.y, coin.width, coin.height);
	//}
}