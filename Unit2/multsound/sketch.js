let state = -1;
let s1, s2, s3;
let i1, i2, i3;

function preload(){
  s1= loadSound('assets/allthat.mp3');
  s2= loadSound('assets/creativeminds.mp3');
  s3= loadSound('assets/dreams.mp3');

}
function setup() {
  createCanvas(800, 800);
  i1 = loadImage ("assets/jazzstuff.jpg");
  i2 = loadImage ("assets/citymusic.jpg");
  i3 = loadImage ("assets/wavemusic.jpg");
  imageMode(CENTER);
}

function draw() {

  background(100);
  
  switch (state) {

    case-1:
    text("please click to start",100,100);
    break;

    case 0:
      background('green');
      image(i1, width/2, height/2 - 10, 595, 567);
      text("This song is called All That", 100, 100);
      if(!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      background('orange');
      image(i2, width/2, height/2 - 10, 595, 567);
      text("This song is called Creative Minds", 100, 100);
      if(!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      background('red');
      image(i3, width/2, height/2 - 10, 595, 567);
      text("This song is called Dreams", 100, 100);
      if(!s3.isPlaying()){
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;
}

  function touchStarted() {
    getAudioContext().resume();

}