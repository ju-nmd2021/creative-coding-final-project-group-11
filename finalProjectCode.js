//Defining variables
let shapes;
let colors;
let spacingX;
let spacingY;

//Setup Canvas
function setup() {
  createCanvas(353, 500);
  noStroke();
  shapes = ["half-ellipse", "ellipse", "rectangle"];
  colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
  ellipseMode(CORNER);
  spacingX = 45;
  spacingY = 55;
}

function draw() {
  background(232, 228, 214);
  fill(255);
  rect(30, 30, 293, 390);
  for (let i = 0; i < 5; i += 1) {
    for (let l = 0; l < 6; l += 1) {
      fill(colors[floor(random(0, 3))]);
      let randomShape = shapes[floor(random(0, 3))];
      if (randomShape == "ellipse") {
        ellipse(50 + spacingX * i, 40 + spacingY * l, random(30, 40));
      }
      if (randomShape == "rectangle") {
        rect(
          50 + spacingX * i,
          40 + spacingY * l,
          random(30, 40),
          random(20, 40)
        );
      }
      if (randomShape == "half-ellipse") {
        let randomHalfEllipse = floor(random(0, 4));
        if (randomHalfEllipse == 0) {
          let startAngle = HALF_PI;
          let endAngle = -HALF_PI;
          arc(
            50 + spacingX * i,
            40 + spacingY * l,
            30,
            30,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 1) {
          let startAngle = PI;
          let endAngle = 0;
          arc(
            50 + spacingX * i,
            40 + spacingY * l,
            30,
            30,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 2) {
          let startAngle = -HALF_PI;
          let endAngle = HALF_PI;
          arc(
            50 + spacingX * i,
            40 + spacingY * l,
            30,
            30,
            startAngle,
            endAngle,
            PIE
          );
        }
        if (randomHalfEllipse == 3) {
          let startAngle = 0;
          let endAngle = PI;
          arc(
            50 + spacingX * i,
            40 + spacingY * l,
            30,
            30,
            startAngle,
            endAngle,
            PIE
          );
        }
      }
    }
  }
  fill(0);
  textSize(18);
  text("Bauhaus", 150, 450);
  noLoop();
}

function mousePressed() {
  loop();
}

/*

        if (randomShape == "triangle") {
          triangle(100, 200, 150, 70, 200, 200);
        }
*/
