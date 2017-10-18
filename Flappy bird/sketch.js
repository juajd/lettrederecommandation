var count = 0;
var x = [];
var y = [];
var len = 0;
var xpos = 700;
var xspeed = 0;
var begin = 0;
var clicked = 0;
function setup() {
	frameRate(120);
	createCanvas(800,800);
	for(var i = 0;i<100;i++){
		createbars();
		show();
	}
}

function draw() {
	background(50);
	fill(255);
	if(clicked == 0){
		createbars();
		update();
		show();
		// print("xpos = ");
		// print(xpos);
		score();
		positionatnextbar();
		if(death()==1){
	  		clicked = 1;
	  		len = 0;
			xpos = 700;
			xspeed = 0;
			x = [];
			y = [];
		}
	}
	// print(xpos);
}

function score(){
	if(y[len-2]==50){
		print(len-1);
	}
}
function update(){
	xspeed += 1;
	xpos += xspeed + 4;
}
function show(){
		for(var i = len-3;i<=len;i++){
			rect(y[i],0,10,x[i]-150);
			rect(y[i],x[i]+150,10,950-x[i]);
			y[i] -= 5;
		}
		fill(255,0,0);
		rect(50,xpos,30,30);
		// xpos += 8;
		count += 1;
	
}
function death(){
	var a = 0;
	for(var i = len-3;i<len;i++){
		if(y[i]>50&&y[i]<80&&(xpos>x[i]+150||xpos<x[i]-150)){
			print("dead");
			a = 1;
		}
	}
	if(xpos<0||xpos>800){
		a = 1;
	}
	// print(xpos)
	return a;
}

function createbars(){
	if(count%75 == 0){
		x[len] = random(150, 650);
		// x[len] = 150;
		y[len] = 800;
		len += 1;
	}
	
}

// function keypressed(){
// }
function mouseClicked(){
	begin = 1;
	xspeed = -25;
	clicked = 0;
}

function positionatnextbar(){
	var a = ((y[len-2]-50)/5)-4;
	var b = ((y[len-3]-50)/5)-4;
	// print(a);
	// print("nextbarlow = ");
	var smallx = x[len-2]+60;
	var max = x[len-2]+70;
	var max2 = x[len-3]+70;
	// print(smallx);
	var currentxpos = xpos;
	var currentxspeed = xspeed;
	var maxheight = 1;
	for(var i = 0;i<a;i++){
		currentxspeed += 1;
		currentxpos += currentxspeed + 4;
	}
	// print(currentxpos);
	// 	print("values");
	// 	print("smallx");
	// 	print(smallx);
	// 	print("max");
	// 	print(max);
	// 	print("currentxpos");
	// 	print(currentxpos);
	if((currentxpos >= smallx)){
		currentxpos = xpos;
		currentxspeed = -25;
		for(var i = 0;i<a;i++){
			currentxspeed += 1;
			currentxpos += currentxspeed + 4;

			// print("currentxpos");
			// print(currentxpos);
			if(currentxpos<0||(b>-30&&currentxpos<max2-40)){
				// print("maxheight");s
				maxheight = 0;
			}
		}
		if (currentxpos>max){
			// print("final currentxpos = ");
			// print(currentxpos);
			if(maxheight != 0){	
				// print("tooooooooooooooooooooooooooooooo loooooooooooooooooooow");
				mouseClicked();
			}
		}
	}
	if(xpos+xspeed+5>800){
		mouseClicked();
	}

}