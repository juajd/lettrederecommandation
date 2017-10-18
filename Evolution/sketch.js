var target;
var popmax;
var mutationRate;
var population;

var bestPhrase;
var allPhrases;
var stats;

function setup(){
	bestPhrase = createP("Best phrase : ");
	bestPhrase.class("Best");
	allPhrases = createP("All phrases :");
	allPhrases.position(600,10);
	allPhrases.class("all");
	stats = createP("Stats");
	stats.class("stats");

	target = "To be or not to be.";
	popmax = 200;
	mutationRate = 0.01;

	population = new Population(target,mutationRate,popmax);
}

function draw(){
	population.naturalSelection();
	population.generate();
	population.calcFitness();
	population.evaluate();
	if (population.isFinished()) {
    //println(millis()/1000.0);
    	noLoop();
  	}
  	displayInfo();
}