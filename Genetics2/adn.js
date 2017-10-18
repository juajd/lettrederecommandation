function newchar(){
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','.',' '];
	var a = floor(random(alphabet.length));
	return alphabet[a];
}

function adn(size){
	this.genes = [];
	this.fitness;
	for(var i = 0;i<size;i++){
		this.genes[i] = newchar();
	}
	this.getPhrase = function() {
    	return this.genes.join("");
  	}

	this.calcFitness = function(goal){
		var ressemblance = 0;
		for(var i = 0;i<size;i++){
			if(this.genes[i] == goal.charAt(i)){
				ressemblance += 1;
			}
		}
		// print("ressemblance");
		// print(ressemblance);
		this.fitness = ressemblance/goal.length;
	}
	
	this.mutate = function(mutation){
		for(var i = 0;i<size;i++){
			if (random(1)<mutation) {
				this.genes[i] = newchar();
				// print("mutation");
				// print(this.getPhrase);
			}
		}

	}
	this.crossover = function(other){
		var child = new adn(size);
		var a = floor(random(size));
		// print("a = ");
		// print(a);
		for(var i = 0;i<size;i++){
			if (i<a){
				child.genes[i] = this.genes[i];
				// print("yes");
			}
			else {
				child.genes[i] = other.genes[i];
				// print("no");
			}
		}
		// print("");
		// print(a);
		// print(this.getPhrase());
		// print(other.getPhrase());
		// print(child.getPhrase());
		return child;
	}
}