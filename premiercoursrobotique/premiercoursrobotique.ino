#include<Bouger.h>
Bouger mybou;
void setup() {
  // put your setup code here, to run once:
  
  Serial.begin(9600);
}

void loop() {
//   while (mybou.soldevant()){
//      mybou.avan(150,150);
//      Serial.println("reculer");
//      Serial.println("yo");
//   }
//   mybou.avan(-255,-255);
//   delay(200);
//   while (mybou.solderiere()){
//      mybou.avan(-150,-150);
//      Serial.println("avancer");
//    }
//  Serial.print(digitalRead(A4));
//  Serial.print("     =      ");
//  Serial.println(digitalRead(A5));
    mybou.avan(255,255);
}
