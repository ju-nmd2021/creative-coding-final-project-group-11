//Defining variables
let shapes;
let colors;

//Setup Canvas
function setup() {
  createCanvas(300, 400);
  noStroke();
  shapes = ["triangle", "ellipse", "rectangle"];
  colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
}

function draw() {
  background(232, 228, 214);
  fill(colors[floor(random(0, 3))]);
  let randomShape = shapes[floor(random(0, 3))];
  if (randomShape == "triangle") {

  }
  if (randomShape == "ellipse") {
    ellipse(random(100, 250), random(150, 250), random(80, 120), random(80, 120));
  }
  if (randomShape == "rectangle") {
    rect(random(100, 250), random(150, 250), random(80, 120), random(80, 120));
  }
  noLoop();
}

function mousePressed() {
  loop();
}
