function population(f,g,h){
	this.pop;
	this.pool;
	this.generations = 0;
	this.finished = false;
	this.goal = f;
	this.mutationRate = h;
	this.perfectScore = 1;
	this.worldrecord = 0;
	this.best = "";
	this.pop = [];
	for(var i = 0;i<g;i++){
		this.pop[i] = new adn(this.goal.length);
		// print(this.pop[i].getPhrase());
	}
		this.pool = [];

	this.calculFitness = function(){
		for(var i = 0;i<g;i++){
			this.pop[i].calcFitness(this.goal);
		}
	}
	this.calculFitness();

	this.getBest = function() {
    	return this.best;
  	}

	this.createpool = function(){
		this.pool = [];
		var maxfitness = 0;
		for(var i = 0;i<g;i++){
			if(this.pop[i].fitness>	maxfitness){
				maxfitness = this.pop[i].fitness;
			}
		}
		// print(this.getmaxfitness);
		for(var i = 0;i<g;i++){
			var number = floor(map(this.pop[i].fitness,0,maxfitness,0,100));
			for(var j = 0;j<number;j++){
				this.pool.push(this.pop[i]);
			}
		}
	}
	this.getGenerations = function() {
    	return this.generations;
    	// print(this.generations);
  	}
  	this.getAverageFitness = function() {
	    var total = 0;
	    for (var i = 0; i < g; i++) {
	      total += this.pop[i].fitness;
	    }
	    return total / (g);
	  }

	this.generate = function(){
    	for(var i = 0;i<g;i++){
    		var a = floor(random(this.pool.length));
    		var b = floor(random(this.pool.length));
    		// print(this.pool[a]);
    		var avalue = this.pool[a];
    		var bvalue = this.pool[b];
    		// print(this.pool[a].getPhrase());
    		var child = avalue.crossover(bvalue);
    		child.mutate(this.mutationRate);
    		this.pop[i] = child;
    	}
    	this.generations ++;
  	}

  	
  	this.isfinished = function(){
  		return this.finished;
  	}
  	this.updateValues = function(a,b){
    	this.mutationRate = b;
    	g = a;
  	}
  	this.evaluate = function() {
	    this.worldrecord = 0.0;
	    var index = 0;
	    for (var i = 0; i < g; i++) {
	      if (this.pop[i].fitness > this.worldrecord) {
	        index = i;
	        this.worldrecord = this.pop[i].fitness;
	      }
	    }
	    // print(this.worldrecord);
	    this.best = this.pop[index].getPhrase();
	    if (this.worldrecord === this.perfectScore) {
	      this.finished = true;
	    }
  	}

  	this.allPhrases = function() {
	  var everything = "";
	  
	  var displayLimit = min(g,50);
	  
	  
	  for (var i = 0; i < displayLimit; i++) {
	    everything += this.pop[i].getPhrase() + "<br>";
	  }
	  return everything;
	}
}