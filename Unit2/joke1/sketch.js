let state =0;
let i1;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage ("assets/butchicken.jpg");
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
    background('orange');
    textSize(45);
    text("Guess \n What!", width/2, height/2);
    break;
     case 1:
     background('pink');
     image(i1, width/3, height/3 - 120, 195, 167);
    textSize(45);
    text("Chicken \nButt!",width/2, height/2); 
    break;
  }
}

function   mouseReleased(){
  
  state++;
  if(state>1)state=0;

}

