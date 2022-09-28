let state =0;
timer=0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
    background('purple');
    text("I invented a new word!", width/2, height/2);
    break;
     
    case 1:
    background('grey');
    text("Plagiarism!", width/2, height/2);
    timmer++;
   if(timer > 2* 60 ){
    timer=0;
    state = 5;
    if (state > 4 )
      state=0;
    }
    break;
  }
   }


