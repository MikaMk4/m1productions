class Cell {

  constructor(col, row) {

    this.col = col;
    this.row = row;
    this.status = "none";

  }

  show() {

    if (this.status == "none") {

      fill(255, 255, 255, 100);
      rect(cellSize * this.col, cellSize * this.row, cellSize, cellSize);

    } else if (this.status == "snake") {

      fill(0, 255, 0);
      rect(cellSize * this.col, cellSize * this.row, cellSize, cellSize);

    }

  }

}
