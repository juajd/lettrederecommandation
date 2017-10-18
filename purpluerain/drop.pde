float xmin = 0;
float xmax = 1920;
float ymin = 0;
float ymax = 1080;
float distmin = 0;
float distmax = 100;
float distfinmin = 0;
float lonmin = 1;
float lonmax = 20;
float vitmin = 2;
float vitmax = 13;
float epmin = 1;
float epmax = 3;
float power = 3;
float distfinmax = pow(distmax,power);

class drop{
  float x = random(xmin,xmax);
  float y = random(ymin,ymax);
  float distint = random(distmin,distmax);
  float dist = map(pow(distint,power),pow(distmin,power),pow(distmax,power),distfinmin,distfinmax);
  float lon = map(dist,distfinmin,distfinmax,lonmin,lonmax);
  float vitesse = map(dist,distfinmin,distfinmax,vitmin,vitmax);
  float eppai = map(dist,distfinmin,distfinmax,epmin,epmax);
  
  void beg(){
    println("distint  =",dist);
    
  }  
  void fall(){
    y += vitesse;
  }
  void show(){
    
    strokeWeight(eppai);
    stroke(138,43,226);
    
    if(y>ymax){
      x = random(xmin,xmax);
      y = 0;
      distint = random(distmin,distmax);
      dist = pow(distint,power);
      vitesse = map(dist,distfinmin,distfinmax,vitmin,vitmax);
      eppai = map(dist,distfinmin,distfinmax,epmin,epmax);
      lon = map(dist,distfinmin,distfinmax,lonmin,lonmax);
    }   
    
    line(x,y,x,y+lon);
  }
  
}