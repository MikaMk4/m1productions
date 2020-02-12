class Button {

  constructor(x, y, width, height, colorR, colorG, colorB, text, textSize) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.text = text;

  }

  show() {

    stroke(this.colorR, this.colorG, this.colorB);
    fill(this.colorR, this.colorG, this.colorB);
    rect(this.x, this.y, this.width, this.height);

    stroke(0);
    textSize(this.textSize);
    text(this.text, this.x + this.width / 2, this.y + this.height / 2);

  }

}
