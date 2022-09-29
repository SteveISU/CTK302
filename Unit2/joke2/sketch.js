let state =0;
let timer=0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize( 25);
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
    break;
  }


    timer++;
   if(timer > 3 * 60 ){
    timer=0;
    state++; 
    if (state > 1)
      state=0;
    }
    
  }
   


