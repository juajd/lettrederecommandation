var s;
var scl = 20;
var size = 1000;
var clicked = 0;
function setup() {
	frameRate(10);
	createCanvas(1000,1000);
	s = new snake();
	s.setup();

}

function draw() {
	if (clicked == 0){
		background(50);
		s.update();
	  	s.show();
	  	keypressed();
	  	s.mang();
	  	if(s.death() == 0){
	  		s = new snake();
	  		clicked = 1;
		}
	}
  	
	  // ellipse(50, 50, 80, 80);

}
function yo(){
	print("yoe");
}
function mouseClicked(){
	clicked = 0;
	print("yo");
	s.setup();
}

function keypressed(){
	if (keyCode === DOWN_ARROW){
		s.dira(0,1);
		// print("a");
	} else if (keyCode === UP_ARROW){
		s.dira(0,-1);
		// print("b");
	} else if (keyCode === LEFT_ARROW){
		s.dira(-1,0);
		// print("c");
	}else if (keyCode === RIGHT_ARROW){
		s.dira(1,0);
		// print("d");s
	}
	print("yop");
}

