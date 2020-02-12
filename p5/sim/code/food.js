class Food {

  constructor(x, y, eff) {

    this.x = x;
    this.y = y;
    this.eff = eff;
    this.size = eff * 10;

  }

  show() {

    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size, this.size);

  }

}
