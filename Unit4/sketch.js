// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
var lat
var lon
let Animals = [] 
let Cat = []
let maxAnimals = 50

navigator.geolocation.getCurrentPosition(getposition);

function getposition(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    console.log(lat, lon)
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    Cat[0] = loadImage("assets/planet1.png")
  Cat[1] = loadImage("assets/planet2.png")
  Cat[2] = loadImage("assets/planet3.png")
  Cat[3] = loadImage("assets/planet4.png")


  // HERE is the call to get the weather. We build the string first.


  let myCityString = "https://api.openweathermap.org/data/2.5/weather?lat=" + str(lat) + "&lon=" + str(lon);

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 



 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "&appid=7686c8f7593c47436e9ad636d0dffbc6"

      
     // "appid=7686c8f7593c47436e9ad636d0dffbc6" ;

  let myTotalString = myCityString+ myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}


function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.temp;

}



function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      fill("black");
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
       text("temperature is " + temperature, 20, 60);
      text("humidity is " + humidity + " %", 20, 80);


      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

  

      for(let i = 0; i < Animals.length; i++){
            Animals[i].display()
            Animals[i].move()


        if(0 > Animals[i].pos.y || Animals[i].pos.y > height){
            Animals.splice(i,1);
        }
      }

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

  if(Animals.length < maxAnimals){
    Animals.push(new Animal()); 
  }
      
      break;
  }



}

class Animal {

    constructor() {
      this.pos = createVector(random(0,width,0));
      this.vel = createVector(0,random(.1,.5)* weather.wind.speed)
      this.scale = random(10, 100)
      this.CatPic = round(random(0,3))
  
    }
    // methods
  
    display() {

      image(Cat[this.CatPic],this.pos.x,this.pos.y, this.scale, this.scale);
    }
  
    move() {
      this.pos.add(this.vel)
        
      }
      
  } 

