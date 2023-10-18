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
  shapes = ["rectangle", "triangle"];
  colors = [color(0, 0, 0), color(138, 43, 226), color(0, 0, 255)];
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
      fill(colors[floor(random(0, 3))]);
      let randomShape = shapes[floor(random(0, 2))];
      if (randomShape == "rectangle") {
        rect(
          startX + spacingX * i,
          startY + spacingY * l,
          random(40, 60),
          random(40, 60)
        );
      }
      if (randomShape == "triangle") {
        let x1 = startX + i * spacingX;
        let y1 = startY + l * spacingY;
        let x2 = x1 + random(40, 60);
        let y2 = y1;
        let x3 = x1 + random(15, 25);
        let y3 = y1 + random(40, 60);
        triangle(x1, y1, x2, y2, x3, y3);
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
  text("Sadness", 30, 470);
  text("2023", 280, 470);
  noLoop();
}
