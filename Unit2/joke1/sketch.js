let state =0;

function setup() {
  createCanvas(500, 500);
  //textAlign{CENTER};
}

function draw() {
  switch(state) {
    case 0:
    background('orange');
    text("Guess \n What!", width/2, height/2);
    break;
     case 1:
    background('grey');
    text("case 1", 250, 250);
    break;
  case 2:
    background('pink');
    text("case 2", 250, 250);
    break;
  }
}

function   mouseReleased(){
  
  state++;
  if(state>1)state=0;

}

