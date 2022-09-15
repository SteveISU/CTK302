function setup() {
  createCanvas(500, 500);

 textAlign(CENTER);
  rectMode(RADIUS);
  
  angleMode(DEGREES);

}

function draw() {
  
  if(mouseIsPressed){
     
    background("#CE2727");
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
  
    
  
  } else{
  
  background("#0ABCFF");
    
    fill("white");
    noStroke();
  text("This handsome fellow you see before you is known as Gort.\nA secret agent that had his brain switched with a frog and it went horribly wrong. So the CIA tried to cover it up but he escaped, and now to remain hidden a from the secret services he must remain an ordinary frog for the rest of his days eating flies.", 40, 40, 400, 400);

  //noStroke();
  //fill("black"); text(mouseX + ","+ mouseY,20, 20);
  
  strokeWeight(30);
  fill("#15C01D");
  stroke("#15C01D");
  square(229, 255, 55, 40, 40, 25, 32);
  
 
  strokeWeight(30);
  stroke('white');
  point(220,185); //lefteye
  point(280, 185);
 
  
  strokeWeight(7)
  stroke('black');
  point(220,185); //lefteye
  point(280, 185);
  
  strokeWeight(5);
  stroke('black');
  point(260,220);
  point(245, 220);
    
  
  strokeWeight(5);
  line(230,245,296,245 );
  
   strokeWeight(3);
  line(253,286,253,324);
  
 line(191,303,226,303);
stroke("black");
line(226,303,226,324 );

   
  arc(190, 270, 60, 60, -90, 90, OPEN);
  
 
  strokeWeight(0);
  fill("#00DEBC")
  ellipse(431,123, 9, 12);
  ellipse(428,139,9,12);
  
  //fly
  strokeWeight(8);
  stroke('black');
  point(429,131);
  }
     
  
  

}




function mouseReleased(){
  print(mouseX + ","+ mouseY);
}