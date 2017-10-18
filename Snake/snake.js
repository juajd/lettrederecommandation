function snake(){
	this.setup = function(){
		this.x = [0];
		this.y = [0];
		this.len = 0;
		this.case = 50;
		this.xspeed = this.case;
		this.yspeed = 0;
		this.needupdate = 1;
		this.score = 0;
		this.size = 1000;
		this.food();
	}
	this.update = function(){
		if (this.needupdate){
			
			// print(this.xspeed[this.len]);
			// print(this.yspeed[this.len]);
			// print("A");
			// print(this.x[this.len]);
			// print(this.y[this.len]);
			// print("B");

			for(var i = 1;i<=this.len;i++){
				this.x[i-1] = this.x[i];
				this.y[i-1] = this.y[i];
				// this.y = constrain(this.y,0,size);
			}
			this.x[this.len] += this.xspeed;
			this.y[this.len] += this.yspeed;
			// print(this.x[this.len]);
			// print(this.y[this.len]);
			// print("");
			// print("");
		} else {
			this.count = 0;
			this.needupdate = 1;
			// print("nedupdate")
			this.x[this.len] = this.x[this.len-1] + this.xspeed;
			this.y[this.len] = this.y[this.len-1] + this.yspeed;
			// print(" ");
		}
		
	}
	this.death = function(){
		if(this.x[this.len]>this.size||this.x[this.len]<0 || this.y[this.len]>this.size||this.y[this.len]<0){
			print("perdu!");
				this.x = [0]
	this.y = [0];
	this.len = 0;
	this.xspeed = this.case;
	this.yspeed = 0;
	this.needupdate = 1;
	this.score = 0;
				return 0;
		}
		for(var i = 0;i<this.len;i++){
			if(this.x[this.len] == this.x[i]&&this.y[this.len] == this.y[i]){
				print("perdu!");
				this.x = [0]
	this.y = [0];
	this.len = 0;
	this.xspeed = this.case;
	this.yspeed = 0;
	this.needupdate = 1;
	this.score = 0;
				return 0;
			}
		}
	}
	
	this.food = function(){
		this.xa = int(random(0,this.size/this.case))*this.case;
		this.ya = int(random(0,this.size/this.case))*this.case;
	}
	this.show = function() {
		fill(255);
		for(var i = 0;i<=this.len;i++){
			rect(this.x[i],this.y[i],this.case,this.case);
			// print(this.x[i])
			// print(i);
			// print(" ");
		}
		fill(255,0,0);
		rect(this.xa,this.ya,this.case,this.case);
		
	}
	this.mang = function(){
		if(this.x[this.len]-2<=this.xa && this.x[this.len]+2>this.xa && this.y[this.len]-2<= this.ya && this.y[this.len]+2>this.ya){
			this.score += 1;
			print(this.score);
			this.food();
			this.len += 1;
			this.needupdate = 0;
		}
	}
	this.dira = function(a,b){
		// print(a);
		// print(b);
		a = this.case * a;
		b = this.case * b;  
		if (a!=this.xspeed && b != this.yspeed){
			// while(this.x[this.len]%10 != 0){
			// 	// print("done");
			// 	this.x[this.len] = this.x[this.len] + 1;
			// 	this.show();
			// 	// delay(1000/30);
			// }
			// while(this.y[this.len]%10 != 0){
			// 	// print("done");
			// 	this.y[this.len] = this.y[this.len] + 1;
			// 	this.show();
			// }
			this.xspeed = a;
			this.yspeed = b;
		}
		
	}

}