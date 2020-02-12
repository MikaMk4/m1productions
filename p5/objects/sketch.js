// Mikails lustiges Spiel
function setup() {
  // Canvas erstellen
  createCanvas(windowWidth, windowHeight);
  fs = fullscreen();
  fullscreen(fs);

  background(0);
  // Liste an "Bubbles" erstellen
  bubbles = [];
  bubbleAmount = 50;

  for (i = 0; i <= bubbleAmount; i++) {

    append(bubbles, new Bubble(random(0, windowWidth), random(0, windowHeight)));

  }

}
// Main Funktion
function draw() {

  background(0);
  // Bubbles bewegen und darstellen
  for (i = 0; i < bubbles.length; i++) {

    bubbles[i].move();
    bubbles[i].show();

    if (bubbles[i].x > windowWidth || bubbles[i].x < 0 || bubbles[i].y > windowHeight || bubbles[i].y < 0) {

      bubbles.splice(i, 1);
      i--;
      continue;

    }

  }
  // Überprüfen, ob Bubbles sich überschneiden
  for (i = 0; i < bubbles.length; i++) {

    iC = false;

    for (j = 0; j < bubbles.length; j++) {

      if (bubbles[i].overlap(bubbles[j]) && i != j) {

        if (bubbles[i].r < bubbles[j].r) {

          bubbles[j].r += bubbles[i].r/2;
          bubbles.splice(i, 1);
          iC = true;
          continue;

        } else if (bubbles[i] > bubbles[j]) {

          bubbles[i].r += bubbles[j].r/2;
          bubbles.splice(j, 1);
          iC = false;
          continue;

        }

      }

    }

    if (iC) {

      i--;
      continue;

    }

  }

  if (bubbles.length < 50) {

    append(bubbles, new Bubble(random(windowWidth, windowHeight)));

  }

}

class Bubble {
  // Attribute eines Bubbles
  constructor(x, y) {

    this.x = x
    this.y = y
    this.speed = 5;
    this.r = random(10);
    this.col = 255;

  }
  // Bewegung
  move() {

    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

  }
  // Darstellung
  show() {

    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r *  2);

  }
  // Gibt als Boolean an, ob sich zwei Bubbles überschneiden
  overlap(other) {

    var d = dist(this.x, this.y, other.x, other.y);

    if (d <= this.r + other.r) {

      return true;

    } else {

      return false;

    }

  }
  // Wechselt zufällig die Farbe des Bubbles
  changeColor() {

    this.col = color(random(255), random(255), random(255));

  }

}
// Wenn geklickt wird, wird ein neuer Bubble erstellt
function mousePressed() {

  append(bubbles, new Bubble(mouseX, mouseY));

}
// Ist immer fullscreen
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
