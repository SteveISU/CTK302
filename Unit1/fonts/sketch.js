let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("assets/sabotage.ttf");
  f2 = loadFont ("assets/stencil.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill ("white");
  textFont (f2, 52);
text("Pardon \nMy French Yo", width/2, 200);
textFont(f1, 40);
text("Dang varmint's", width/2, 300);
}
