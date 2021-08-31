var snow,snowImg;
var ground,groundImg

function preload(){

snowImg=loadImage("snow4.webp");
groundImg=loadImage("snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  //ground=createSprite(800,400);
  //ground.addImage(groundImg);
}

function draw() {
  background(groundImg);  
  
if(frameCount %30==0){


snowFall();
}






  drawSprites();
}
function snowFall(){

snow=createSprite(random(10,600),50,50)
snow.addImage(snowImg);
snow.scale=0.1;
snow.velocityY=5;

}




















