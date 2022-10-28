
let cars = [];
let i1

function setup() {
  createCanvas(windowWidth, windowHeight);

  i1 = loadImage ("assets/sunset.jpeg");
  imageMode(CENTER);
   
  
}

function draw() {
  background("black");

  image(i1, width/2, height/2,width,height);
  
   cars.push(new Car());
  
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    
   if( cars[i].opacity <0){
     cars.splice(i,1);
   }
  }
  fill("black");
  //text(cars.length, 40,40);
}

class Car {
  constructor() {
    this.pos = createVector(mouseX,height-80);
    this.vel = createVector(random(-4, 4), random(-5,-1));
    this.r = random(225);
    this.b = random(225);
    this.g = random(225);
    this.opacity = random(225);
    this.size= random(20,50);
  }

  // methods

  display() {
   stroke(700, this.opacity);
    fill(700, this.opacity);
   ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity-=0.5;
  }
}
