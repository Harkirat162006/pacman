var pacMan,G1,G2,G3,G4,P1,P2,P3,P4,P5

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14
var wall15,wal16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27
var wall28,wall29,wall30,wall31, wall32;

function setup() {
  createCanvas(500,600);
 pacMan=createSprite(60,60,10,10);

 G1= createSprite(250,300,10,10);
 G2= createSprite(300,300,10,10);
 G3= createSprite(250,350,10,10);
 G4= createSprite(300,350,10,10);



 wall1=createSprite(40,90,8,150)
 wall1.shapeColor="blue";
 wall2=createSprite(247,20,420,10)
 wall2.shapeColor="blue";
 wall3=createSprite(453,90,8,150)
 wall3.shapeColor="blue";
 wall4=createSprite(246,60,8,75)
 wall4.shapeColor="blue";
 wall5=createSprite(86,170,100,10)
 wall5.shapeColor="blue";
 wall6=createSprite(131,215,10,80)
 wall6.shapeColor="blue";
 wall7=createSprite(86,260,100,10)
 wall7.shapeColor="blue";
 wall8=createSprite(407,170,100,10)
 wall8.shapeColor="blue";
 wall9=createSprite(357,210,10,90)
 wall9.shapeColor="blue";
 wall10=createSprite(402,260,100,10)
 wall10.shapeColor="blue";
 wall11=createSprite(86,303,100,10)
 wall11.shapeColor="blue";
 wall12=createSprite(134,343,10,90)
 wall12.shapeColor="blue";
 wall13=createSprite(86.5,388,105,10)
 wall13.shapeColor="blue";
 wall14=createSprite(38,468,8,170)
 wall14.shapeColor="blue";
 wall15=createSprite(241.5,555,415,10)
 wall15.shapeColor="blue";
 wall16=createSprite(450,479,8,163)
 wall16.shapeColor="blue";
 wall17=createSprite(401.5,397,105,10)
 wall17.shapeColor="blue";
 wall18=createSprite(350,357,10,90)
 wall18.shapeColor="blue";
 wall19=createSprite(400,314,110,10)
 wall19.shapeColor="blue";
 wall20=createSprite(114,75,40,40)
 wall20.shapeColor="yellow";
 wall21=createSprite(195,105,40,40)
 wall21.shapeColor="yellow";
 wall22=createSprite(195,55,50,8)
 wall22.shapeColor="blue";
 wall23=createSprite(105,130,70,20)
 wall23.shapeColor="red";
 wall24=createSprite(380,124,70,20)
 wall24.shapeColor="red";
 wall25=createSprite(295,55,50,8)
 wall25.shapeColor="blue";

 wall26=createSprite(325,215,8,80);
 wall26.shapeColor="blue";
 wall27=createSprite(165,215,8,80)
 wall27.shapeColor="blue";
 wall28=createSprite(245,155,120,20)
 wall28.shapeColor="blue";

 wall29=createSprite(370,70,40,40)
 wall29.shapeColor="yellow";
 wall30=createSprite(300,105,40,40)
 wall30.shapeColor="yellow";

 wall31=createSprite(245,230,65,65);
 wall31.shapeColor="blue";


}

function draw() {
  background(0);  
  text(mouseX + " " + mouseY,90,515);
  drawSprites();
}