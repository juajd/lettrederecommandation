#include <Wire.h>
#include <LIDARLite.h>
#include<Servo.h>
LIDARLite myLidarLite;
Servo myservo;
int incomingByte = 0;
void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
myservo.attach(3);
myservo.write(0);
myLidarLite.begin(0, true); // Set configuration to default and I2C to 400 kHz
myLidarLite.configure(2);
//Serial.println("Done init");
pinMode(2,OUTPUT);
}

void loop() {
  analogWrite(2,HIGH);
  // put your main code here, to run repeatedly:
//  
if (Serial.available() > 0) {
//                // read the incoming byte:
//        
                incomingByte = Serial.read() - '0';
//                // say what you got:
                if(incomingByte != -38){
//                  Serial.println(incomingByte);
                  myservo.write(0);
                  delay(1000);
                for(int i = 0;i<180;i++){
                  myservo.write(i);
//                  Serial.print(i);
                  Serial.println(myLidarLite.distance(false));
//                    Serial.println(incomingByte);
                  delay(10);
                }
                }
        }
}
