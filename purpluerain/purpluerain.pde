int nbdegouttes = 1000;
drop[] drops = new drop[nbdegouttes];
void setup(){
  size(1920,1080);
  for (int i =0;i<nbdegouttes;i++){
    drops[i] = new drop();
    drops[i].beg();
  }
  
}
void draw(){
  background(230,230,250);
  for (int i =0;i<nbdegouttes;i++){
    drops[i].show();
    drops[i].fall();
  }
  
}