let timer = 0;
let m = 32;
function setup() {
  let canvas = createCanvas(750, 750);
}
let state = 0;
function draw() {
  switch (state) {
    case 0:
      background("black");
      for (let j = 0; j < 100; j++) {
        for (let i = 0; i < 100; i++) {
          //  push();
          fill("rgb(185,1,185)");
          let d = dist(i * m, j * m, width / 2, height / 2);
          rect(i * m, j * m, d / m, d / m);
          print(d / m);
          //  pop();
        }
      }
      break;

    case 1:
      background("grey");
      let flip = -1;
      let inc = 15;
      let colorState = 1;
      let circleRadius = 300;
      for (let j = 0; j < 1050; j += inc) {
        for (let i = 0; i < 1050; i += inc) {
          push();
          switch (colorState) {
            case 1:
              stroke("black");
              fill("orange");
              circle(j, i, circleRadius);
              break;
            case 2:
              stroke("black");
              fill("black");
              circle(j, i, circleRadius);
              break;
            case 3:
              stroke("black");
              fill("#3C00FF");
              circle(j, i, circleRadius);
              break;
            default:
              colorState = 0;
              break;
          }
          colorState++;

          pop();
        }
      }

      break;
    case 2:
      background(220);
      let circleSize = 50;
      let incTwo = 10;
      background("#130573");
      for (let i = 1; i < 200; i += incTwo) {
        for (let j = 1; j < 250; j += incTwo) {
          for (let k = 1; k < 10; k += incTwo / 2) {
            stroke("#8a231e");
            fill("#fc443a");
            circle(4 * PI * i, 4 * PI * j + k, circleSize);
          }
        }
      }
      break;
    case 3:
      timer++;
      if (timer > 2) {
        timer = 0;
      let circleSize2 = 700;
      let incThree = 50;
      background("gold");
      for (let i = 1; i < 200; i += incThree) {
        for (let j = 1; j < 350; j += incThree) {
          for (let k = 1; k < 500; k += incThree / 2) {
            stroke("black");
            fill(random(165), random(28), random(555));
            circle(2 * PI * k, 2 * PI * i + j, circleSize2);
          }
        }
      }
      }

      break;
    case 4:
      timer++;
      if (timer > 2) {
        timer = 0;
        background("black");
        for (let j = 0; j < height; j += 55) {
          for (let i = 0; i < width; i += 25) {
            fill(random(255));
            rect(i, j, 20, 20);
          }
        }
      }
      break;
  }
}
function mouseReleased() {
  if (state < 4) {
    state++;
  } else {
    state = 0;
  }
}
