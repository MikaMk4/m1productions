class Blob {

  constructor(x, y, size, geschlecht, sexualitaet, staerke, speed, surviveTime, id) {

    this.x = x;
    this.y = y;
    this.size = size;
    this.geschlecht = geschlecht;
    this.sexualitaet = sexualitaet;
    this.staerke = staerke;
    this.speed = speed;
    this.geliebter = null;
    this.vergeben = false;
    this.id = id;
    this.surviveTime = surviveTime;
    this.fed = 0;

    if (this.geschlecht == "mann") {

      this.colorR = 0;
      this.colorG = 0;
      this.colorB = 255;
      this.surviveTime = 0.95 * this.surviveTime;

    } else if (this.geschlecht == "frau") {

      this.colorR = 220;
      this.colorG = 0;
      this.colorB = 150;
      this.speed = this.speed * 0.9;

    }

  }

  show() {

    fill(this.colorR, this.colorG, this.colorB);
    ellipse(this.x, this.y, this.size, this.size);

  }

  move(newX, newY) {

    if (dist(this.x, 0, newX, 0) > this.speed) {

      if (this.x < newX) {

        this.x += this.speed;

      } else if (this.x > newX) {

        this.x -= this.speed;

      }

    } else {

      this.x = newX;

    }

    if (dist(0, this.y, 0, newY) > this.speed) {

      if (this.y < newY) {

        this.y += this.speed;

      } else if (this.y > newY) {

        this.y -= this.speed;

      }

    } else {

      this.y = newY;

    }

  }

}
