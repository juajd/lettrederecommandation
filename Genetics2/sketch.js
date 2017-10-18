var goal;
var size;
var mutation;
var pop;

var bestPhrase;
var allPhrases;
var stats;
var slider1;
var slider2;

var cou = 5;
var dr = [];

function setup(){
  bestPhrase = createP("Best Phrase :");
  bestPhrase.class("best");
  allPhrases = createP("All phrases:");
  allPhrases.position(700,10);
  allPhrases.class("all");
  stats = createP("Stats");
  //stats.position(10,200);
  // stats.class("stats");
  slider1 = createSlider(1,100000,30000,100);
  slider2 = createSlider(0,1,0.1,0.001);
  goal = "Les sanglots long des violons de l automne blessent mon coeur d une langueur montomne";	
  size = slider1.value();
  mutation = slider2.value();
  pop = new population(goal,size,mutation);
  createCanvas(1200,200);
  }

function draw(){
  background(51);
	pop.createpool();
  size = floor(map(pow(slider1.value(),3),1,pow(100000,3),1,100000));
  mutation = pow(slider2.value(),3);
  pop.updateValues(size,mutation);
  pop.generate();
  pop.calculFitness();
  pop.evaluate();
if(pop.getGenerations()%10==0){
    // t += population.getAverageFitness() + "<br>";
    dr.push(pop.worldrecord);
  }
  for(var i = 0;i<dr.length;i++){
      cou += 5;
      stroke(255);
      line(10*i,200,10*i,200-(dr[i]*200));
  }
  // a = pop.isfinished();
  // print(a);
  if(pop.isfinished()){
    print("finished");
    stroke(255);
    line(10*dr.length+1,200,10*dr.length+1,200-(pop.worldrecord*200));
    noLoop();
  }
  displayInfo();
}

function displayInfo() {
  // Display current status of population
  var answer = pop.getBest();
  
  bestPhrase.html("Best phrase:<br>" + answer);
  
  var statstext = "total generations:     " + pop.getGenerations() + "<br>";
  statstext +=    "average fitness:       " + nf(pop.getAverageFitness()) + "<br>";
  statstext +=    "total population:      " + size + "<br>";
  statstext +=    "mutation rate:         " + mutation * 100 + "%";
  
  stats.html(statstext);
  allPhrases.html("All phrases:<br>" + pop.allPhrases());
}