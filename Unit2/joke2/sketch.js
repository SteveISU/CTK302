let state =0;
timer=0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
    background('white');
    text("I invented a new word!", width/2, height/2);
    break;
     
    case 1:
    background('grey');
    text("Plagiarism!", 250, 250);
    break;
  }
   timmer++;
   if(timer > 4*60 ){
    timer=0;
    state++;
    if (state > 4 )
      state=0;
    }
   }


