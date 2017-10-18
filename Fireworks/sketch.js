new p5;
var s = [];
var len = 0;
var max = 5;
var numangles = 10;
var count = 0;
function setup() {
	createCanvas(800,800);
	
}

function draw() {
	if(len<max){

		var b = int(random(0,10));
		if(b == 1){
			append(s,newfire());
			len += 1;
		}
	}
	background(51);
	for(var i = 0;i<len;i++){
		s[i].show();
		if(s[i].taille == 0){
			s[i] = newfire();

		}
	}
	count += 1;
}
function newfire(){
	a = new Fireworks();
	a.numangles = numangles;
	a.setup();
	return a;
}