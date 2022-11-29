var bubbles = [];
let url = "";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  let key = "1vuPPXBTHhvagsIfUeCXIEwm0Oa39XBcJLYcOGVgYSpI"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Favorite dinosaur?"],
        data[i]["Name?"],
        data[i]["Favorite color"],
        data[i]["Pet of choice?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("#ad0c00");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(dinosaur, name, color, pet) {
    // only the order of these parameters matters!
    this.dinosaur = dinosaur;
    this. name=name;
    this.color = color;
    this.pet = pet;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(5, 10), 0);
  }

  display() {
    stroke("#05f709");
    fill("#05f709");
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("blue");
    text(
      this.dinosaur + "\n" + this.name + "\n" + this.color + "\n"  + this.pet,
      this.pos.x,
      this.pos.y
    );
  this.pos.add(this.vel);
    if(this.pos.x> width) this.pos.x=0
  
    
  }
  
  
}
