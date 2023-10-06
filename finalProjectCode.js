//Defining variables
let shapes;
let colors;

//Setup Canvas
function setup() {
  createCanvas(353, 500);
  noStroke();
  shapes = ["triangle", "ellipse", "rectangle"];
  colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
}

function draw() {
  background(232, 228, 214);
  for (let i = 0; i < 4; i += 1) {
    for (let l = 0; l < 7; l += 1) {
      fill(colors[floor(random(0, 3))]);
      let randomShape = shapes[floor(random(0, 3))];

      if (randomShape == "ellipse") {
        ellipse(40 + 60 * i, 40 + 50 * l, random(30, 40));
      }
      if (randomShape == "rectangle") {
        rect(40 + 60 * i, 40 + 50 * l, random(30, 40), random(20, 40));
      }
    }
  }
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
