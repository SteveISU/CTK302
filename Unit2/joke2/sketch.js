let state =0;
let timer=0;

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
    background('green');
    text("Plagiarism!", width/2, height/2);
    timer++;
   if(timer > 3 * 60 ){
    timer=0;
    state = 5;
    if (state > 4 )
      state=0;
    }
    break;
  }
   }


