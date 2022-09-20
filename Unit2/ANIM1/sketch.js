let x = 0;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("assets/sabotage.ttf");
}

function draw() {
  background("red");
  textSize(60);
  textFont(f1, 200);
  text("EPIC word movement!",x,200);
  x += 5;

if(x > width){
  x = -1000;
}

}
