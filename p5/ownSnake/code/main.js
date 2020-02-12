var grid = [];
var cols, rows, speed;
var cellSize = 20;
var player;
var current = 0;

function setup() {

  frameRate(3);

  createCanvas(800, 800);
  cols = width / cellSize;
  rows = height / cellSize;

  for (var x = 0; x < rows; x++) {

    for (var y = 0; y < cols; y++) {

      grid.push(new Cell(x, y));

    }

  }

  player = grid[current];
  speed = cols;

}

function draw() {

  background(180);

  for (var i = 0; i < grid.length; i++) {

    grid[i].status = "none";
    player.status = "snake";

    grid[i].show();

  }

  player = grid[current + 1];
  current += speed;

}

function keyPressed() {

  if (key == "w") {

    speed = -1;
    draw();

  }

}
