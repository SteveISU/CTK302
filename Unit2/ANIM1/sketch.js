let x = 0;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("assets/sabotage.ttf");
}

function draw() {
  background("red");
  textSize(20);
  textFont(f1, 120);
  text("EPIC movement!",x,300);
  x += 5;

if(x > width){
  x = -1000;
}

}
