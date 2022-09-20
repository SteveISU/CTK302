let x = 0;

function setup() {
  createCanvas(500, 500);

  textAlign(CENTER);
  rectMode(RADIUS);
  
  angleMode(DEGREES);
}

function draw() {
  
  background("red");
  push();
  scale (.1 * x);
  translate(x,0);
 avatar( );
 x += .079;
 if (x > width){
  x = 0;

}
pop();
}

function avatar(){

  noStroke();
    fill("white");
    text("YUM!", 30, 30, 400, 400);
  
  strokeWeight(30);
  fill("#15C01D");
  stroke("#15C01D");
  square(229, 255, 55, 40, 40, 25, 32);
  
 
  strokeWeight(30);
  stroke('white');
  point(220,185); //lefteye
  point(280, 185);
 
  
  strokeWeight(7);
  stroke('black');
  point(220,185); //lefteye
  point(280, 185);
  
  strokeWeight(5);
  stroke('black');
  point(260,220);
  point(245, 220);
    
  
   strokeWeight(3);
  line(253,286,253,324);
  
 line(191,303,226,303);
stroke("black");
line(226,303,226,324 );

  arc(190, 270, 60, 60, -90, 90, OPEN);
  
   strokeWeight(0);
  fill("#720202");
  ellipse(260,244,79, 32);
  
  fill("#F653EC");
  ellipse(429,132,30,30);
  
  strokeWeight(9);
  stroke("#F653EC");
  line(261,245,427,134 );
  
  
}
