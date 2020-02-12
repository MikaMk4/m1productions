class Bubble {

  constructor(x, y, size, colorR, colorG, colorB, strokeWidth) {

    this.x = x;
    this.y = y;
    this.size = size;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.strokeWidth = strokeWidth;
    this.outerCircleSize = size * 2.5;

  }

  innerCircleShow() {

    stroke(this.colorR, this.colorG, this.colorB);
    strokeWeight(this.strokeWidth);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);

  }

  outerCircleShow(size) {

    stroke(this.colorR, this.colorG, this.colorB);
    strokeWeight(1);
    noFill();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, size, size);

  }

  clicked() {

    return dist(this.x, this.y, mouseX, mouseY) < this.size / 2;

  }

}
