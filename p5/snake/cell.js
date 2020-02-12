class Cell {

  constructor(x, y, type, index) {

    this.x = x;
    this.y = y;
    this.type = type;
    this.color = [232, 214, 214];
    this.dir = random(dirs);
    this.index = index;
  }

  show() {

    fill(this.color);
    rect(this.x, this.y, cellSize, cellSize);
  }

  move() {

    cells[this.index + this.dir].changeType("snake_head");
    cells[this.index].changeType("normal");
  }

  changeType(type) {

    this.type = type;

    if (this.type == "normal") {

      this.color = [232, 214, 214];
    } else if (this.type == "snake_head" || this.type == "snake_tail") {

      this.color = [255, 0, 0];
    }
  }
}
