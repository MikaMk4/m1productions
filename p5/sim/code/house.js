class House {

  constructor(x, y, size) {

    this.x = x;
    this.y = y;
    this.size = size;
    this.capacity = 0;
    this.members = [];

  }

  show() {

    fill(0);
    rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);

  }

}
