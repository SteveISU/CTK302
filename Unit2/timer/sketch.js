let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background("#79e336");

  switch (state) {

    case 0:
      background("rgb(238,139,31)");
      text("Hello there!", 100, 100);
      timer++;
      if (timer > 4 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
    background("rgb(253,46,83)");
      text("how are you doing today?",130, 200);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;


    case 2:
      background("#af36e3");
      text("Good?", 140, 400);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 3;
      }
      break;

      case 3:
        background("#fa5339");
      text("Oh...", 150, 300);
        timer++;
        if (timer > 1 * 60) {
          timer = 0;
          state = 4;
        }
          break;

        case 4:
        background("#79e336");
      text("GREAT ", 170, 200);
          timer++;
          if (timer > 5 * 60) {
            timer = 0;
            state = 5;
          }
          break;
  }
}



 