new p5;
var len = 200;
var x = 300;
var count = 0;
var max = 2;
var angle;
var slider1;
var slider2;
var slider3;
var eppai = 5;
function setup(){
	createCanvas(600,1.42*600);
	slider1 = createSlider(0,PI,PI/4,0.01);
	slider2 = createSlider(0.25,8,2,0.25);
	slider3 = createSlider(0.1,1,2/3,0.01);
	slider4 = createSlider(50,400,200,10);
	// angle = random(0,2*PI);
}
function draw(){
	background(51);
	translate(x,height);
	
	// print(max);
	angle = slider1.value();
	// angle = PI /2;
	// print(angle);
	// print(angle);
	max = slider2.value();
	count = 0;
	stroke(255);
	len = slider4.value();
	branch(len);
	print(count);
}

function branch(len){

	line(0,0,0,-len);
	translate(0,-len);
	// eppai -= 1;
	if(len>max){
		push();
		// print(angle);
		rotate(angle);

		count += 1;
		branch(len*slider3.value());

		pop();
		push();
		rotate(-angle);
		branch(len*slider3.value());
		pop();
	}

}