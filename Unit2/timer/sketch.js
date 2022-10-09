let state = 0;
let timer = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
 // background(220);

  switch (state) {
    case 0:
      background("rgb(238,139,31)");
      timer++;
  if (timer > 5 * 60) {
    timer = 0;
    print(timer = 0);
    print("beep");
  }
text("Hello there!", 100, 100);
      break;

    case 1:
      background("rgb(253,46,83)");
      text("how are you doing", 100, 100);
      break;

    case 2:
      background("rgb(50,170,245)");
      text("today?", 100, 100);
      break;
  }
}


 