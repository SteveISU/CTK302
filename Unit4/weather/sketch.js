// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature=0;
let humidity=0;
let i1, i2;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  i1 = loadImage ("assets/Cloudz.jpeg");
  i2 = loadImage ("assets/skybg.jpeg");

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Manhattan,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=33859b4a282aa3f75660638b7d34f624" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
 temerature = weather.main.temp;
  humidity= weather. main.humidity;
  
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
       text("temerature is " +temperature, 20, 60);
       text("humidity is " + humidity, 20, 80);
      text ("description is"+ weather. weather[0].description,20,100)
 

      // cloud
      fill("white");
      noStroke();
      image(i1);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
