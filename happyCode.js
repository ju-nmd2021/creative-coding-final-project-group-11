//Defining variables
let shapes;
let colors;
let spacingX;
let spacingY;
let startX;
let startY;

//Setup Canvas
function setup() {
  firstDraw = false;
  createCanvas(353, 500);
  noStroke();
  shapes = ["ellipse", "half-ellipse"];
  colors = [color(255, 242, 0), color(255, 140, 0)];
  ellipseMode(CORNER);
  spacingX = 78;
  spacingY = 83;
  startX = 30;
  startY = 30;
}

function draw() {
  background(232, 228, 214);
  fill(255);
  for (let i = 0; i < 4; i += 1) {
    for (let l = 0; l < 5; l += 1) {
      fill(colors[floor(random(0, 2))]);
      let randomShape = shapes[floor(random(0, 2))];
      if (randomShape == "ellipse") {
        ellipse(startX + spacingX * i, startY + spacingY * l, random(40, 60));
      }
      if (randomShape == "half-ellipse") {
        let randomHalfEllipse = floor(random(0, 4));
        if (randomHalfEllipse == 0) {
          let startAngle = HALF_PI;
          let endAngle = -HALF_PI;
          arc(
            startX + spacingX * i,
            startY + spacingY * l,
            60,
            60,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 1) {
          let startAngle = PI;
          let endAngle = 0;
          arc(
            startX + spacingX * i,
            startY + spacingY * l,
            60,
            60,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 2) {
          let startAngle = -HALF_PI;
          let endAngle = HALF_PI;
          arc(
            startX + spacingX * i,
            startY + spacingY * l,
            60,
            60,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 3) {
          let startAngle = 0;
          let endAngle = PI;
          arc(
            startX + spacingX * i,
            startY + spacingY * l,
            60,
            60,
            startAngle,
            endAngle,
            PIE
          );
        }
      }
    }
  }

  push();
  strokeWeight(2);
  stroke(0);
  line(30, 450, 320, 450);
  pop();

  fill(0);
  textSize(18);
  text("Happiness", 30, 470);
  text("2023", 280, 470);
  noLoop();
}
