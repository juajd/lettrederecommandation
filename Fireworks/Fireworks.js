function Fireworks(){
	this.numangles;
	this.x = random(0,800);
	this.y = random(0,800);
	this.colorr = random(0,255);
	this.colorg = random(0,255);
	this.colorb = random(0,255);
	this.angles = [0];
	this.dist = 0;
	this.taille = 30;
	this.currrenty = 800;

	this.setup = function(){
		for(var i = 0;i<this.numangles;i++){
			this.angles[i] = random(0,6.2830);
		}
		fill(this.colorr,this.colorg,this.colorb);
		stroke(this.colorr,this.colorg,this.colorb);
		ellipse(this.x,this.y,10,10);
	}

	this.show = function(){
		fill(this.colorr,this.colorg,this.colorb);
		stroke(this.colorr,this.colorg,this.colorb);
		print(this.y);
		print(this.currrenty);
		if(this.currrenty>this.y){
			print("ype");
			this.currrenty -= 10;
			ellipse(this.x,this.currrenty,this.taille/3,this.taille/3);
		}
		else{
			for(var i = 0; i<numangles;i++){
				ellipse(this.x+this.dist*sin(this.angles[i]),this.y+this.dist*cos(this.angles[i]),this.taille,this.taille);
			}
			this.dist += 7;
			this.taille -= 0.5;
		}
	}
}