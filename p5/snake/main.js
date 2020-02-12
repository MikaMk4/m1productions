let cellAmount = 30;
let cellSize = 30;

let cells = [];
let snake_head;

let dirs = [-1, -cellSize, 1, cellSize];

function setup() {

  snake_head = floor(random(cellAmount * cellAmount));

  createCanvas(cellAmount * cellSize, cellAmount * cellSize);

  for (i = 0; i < cellAmount * cellAmount; i++) {
    let col = abs(i - cellAmount);
    let row;

    append(cells, new Cell();
  }

  cells[snake_head].changeType("snake_head");
  snake_head = cells[floor(random(cellAmount * cellAmount))];
}

function draw() {

  snake_head.move();

  background(0);

  for (i = 0; i < cells.length; i++) {

    cells[i].show();
  }
}
