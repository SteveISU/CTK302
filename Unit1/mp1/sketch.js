function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);

  rectMode(RADIUS);
fill("#15C01D");
  stroke("#15C01D");
rect(50, 50, 30, 30);

}


function draw() {
  background("#33B8FF");
  fill ("white");
  square(229, 255, 55, 20, 15, 10, 5);
  
  if (mouseIsPressed) {
    background("#FF4933");
    fill("white");
    text("YUM!", 10, 10, 400, 400);
    
    fill("#15C01D");
    square(229, 255, 55, 20, 15, 10, 5);
  }else {
  // when the mouse isn't pressed!
  background("#33B8FF");
  fill("white");
  text("The being you see before you is known as Gort.\nA secret agent that had his brain switched with a frog and it went horribly wrong so the CIA tried to cover it up but he escaped and now to remain hidden a from the secret services he must remain an ordinary frog for the rest of his days eating flies.", 10, 10, 400, 400);
  
  fill("#15C01D")
  square(229, 255, 55, 20, 15, 10, 5);

  
}

}
