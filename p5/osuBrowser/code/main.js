function setup() {

  createCanvas(windowWidth, windowHeight);

  bubbles = [];

  for (i = 0; i < 10; i++) {

    append(bubbles, new Bubble(random(1000), random(800), 100, 8, 41, 223, 16));

  }

  approachRate = 2;

}

function draw() {

  bubbles[0].outerCircleSize = bubbles[0].outerCircleSize - approachRate;

  background(0);
  bubbles[0].innerCircleShow();
  bubbles[0].outerCircleShow(bubbles[0].outerCircleSize);

  if (bubbles[0].outerCircleSize <= bubbles[0].size) {

    bubbles.splice(0, 1);

  }

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function mousePressed() {

  for (i = 0; i < bubbles.length; i++) {

    if (bubbles[i].clicked()) {

      bubbles.splice(i, 1);

    }

  }

}
