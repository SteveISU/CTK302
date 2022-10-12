var myState = 0;
var myTimer = 0;
var font;
var x = 0;
var city;
let mic;
let y = 337;
var vol = 0;
var bk;
var gam


function preload() {
  font = loadFont('assets/future.ttf');
  city = loadImage('assets/spacebg.jpg');
  bk = loadImage('assets/spaceship.png');
  //gam = loadSound('assets/gamer.mp3')
}

function setup() {
  // put setup code here
  createCanvas(700, 400);

  mic = new p5.AudioIn();
textFont(font); // SETS the font
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  textAlign(CENTER);

}

function draw() {
  // put drawing code here
  image(city, 0, 0);
  switch (myState) {

    case 0:
      background("#ffcb08");
      image(city, 0,0,width,height);
      fill("white");
      textSize(20);


      fill("#62ff19");

      textSize(30);

      text("Click to Start", x, 200);
      x += 3;
      if (x > 700) {
        x = 0;
      }


      break;

    case 1: //wait for mic imput
      background(100);
      image(city, 0, 0,width,height);
      
     
      vol = mic.getLevel();
      if (vol >= 0.2) {

        myState = 2;
        //gam.play();
      }
      image(bk, 312, 270,200,200);
      textSize(40);
      text("Yell!\nTo help\n Zert leave.", 389, 200);
      break;

      case 2://biker flys up
        background(100);
        image(city, 0, 0,width,height);
        image(bk, 312, y,200,200);
      y = y - 3;
      if (y <= -200) {
        myState = 3;


      }

      break;

    


    case 3:
      background("#ffcb08");
      image(city, 0, 0,width,height);
    textSize(79);
      text("You did\n it!",389, 200);
      y = 337

      
      break;
  }
}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }
  if (myState == 2) {
  myState = 3;
  }

  if (myState == 4) {
    myState = 0;
  }

  console.log(mouseX + "," + mouseY);
}
function touchStarted() {
  getAudioContext().resume();
}