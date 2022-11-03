let cars = [];
let frogPos;
let state= 0;
let timer=0;
let s1, s2, s3;
let i1, i2, i3, i4, i5;

function preload(){
  s1= loadSound('assets/gameplay.mp3');
  s2= loadSound('assets/winner.mp3');
  s3= loadSound('assets/lose.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  f1=loadFont('assets/flagship.ttf');
  i1 = loadImage ("assets/fireguy.png");
  i2 = loadImage ("assets/firewalk.png");
  i3 = loadImage ("assets/gamebg.png");
  i4 = loadImage ("assets/losescreen.png");
  i5 = loadImage ("assets/winscreen.png");
  

  // Spawn objects

  for (let i = 0; i < 6; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {

  switch(state){
      case 0://menu
      image(i3, width/2, height/2,width,height);
      textFont (f1, 52);
     fill("red");
     textSize(255);
      text("Fire Fight!",169, 289);
      textSize(95);
      text("Put out 6 flames before \n the city BURNS DOWN!", 139, 419);
      textSize(105)
      text("Click to Start ->",309, 657);
     
      break; 
      
      case 1:
        image(i3, width/2, height/2,width,height);
      game();

      timer++;
      if(timer> 14*60){
        timer =0;
        s1.stop();
        s3.play();
        state =3;
      
      }
      break;
      
       case 2://menu
       background("white");
       fill("red");
       textFont (f1, 52);
       textSize(155);
       image(i5, width/2, height/2,width,height);
      text("You Win!", 309, 389);
      textSize(105);
      text("Click to Restart", 289, 589);
       
      
      break; 
      
       case 3://menu
       background("white");
       image(i4, width/2, height/2,width,height);
       textFont (f1, 52);
       textSize(155);
       fill("pink");
      text("You're a \n Loser!", 389, 280);
      textSize(105);
      text("Click to Restart", 289, 589);
      break; 
      
      
  }
  
}

function resetTheGame(){
  cars=[];
  
  for (let i = 0; i < 4; i++) {
    cars.push(new Car());
  }
  timer=0;
  frogPos.x=width/2;
  frogPos.y=height-80;
}



function mouseReleased(){
  switch(state){
      case 0:
      state=1;
      s1.play();
      break;
      
      case 2:
      resetTheGame()
      state=0;
      s2.stop();
      break;
      
      case 3:
      resetTheGame()
      state=0;
      s3.stop();
      break;
  }
  
}

function game() {
   //background("white");

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    
    let hosePos = createVector(frogPos.x+80, frogPos.y+80) ;
    //ellipse(hosePos.x, hosePos.y, 30,30);

    if(cars[i].pos.dist(hosePos) < 30){
      cars.splice(i,1);
      
    }
    
  }

  if(cars.length<=0){
    state= 2;
    s2.play();
    s1.stop();
  }
  // add a "frog"
  image(i1, frogPos.x, frogPos.y, 600,600);
  checkForKeys();
}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(100, 400);
  }
  // methods

  display() {
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o);
    image(i2,this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
  function touchStarted() {
   getAudioContext().resume();

}
