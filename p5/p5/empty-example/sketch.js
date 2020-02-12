function setup() {

  canvasWidth = 1500;
  canvasHeight = 800;

  createCanvas(canvasWidth, canvasHeight);

  circleWidth = 150;
  circleHeight = 150;

  circleX = circleWidth / 2;
  circleY = circleHeight / 2;
  circleSpeed = 10;
  circleSpeedX = circleSpeed;
  circleSpeedY = circleSpeed;

}

function draw() {

  background(220);

  ellipse(circleX, circleY, circleWidth, circleHeight);

  if (circleX == canvasWidth - circleWidth / 2) {

    circleSpeedX = -10;

  } else if (circleX == 0 + circleWidth / 2) {

    circleSpeedX = 10;

  }

  if (circleY == canvasHeight - circleHeight / 2) {

    circleSpeedY = -10;

  } else if (circleY == 0 + circleHeight / 2) {

    circleSpeedY = 10;

  }

  circleX = circleX + circleSpeedX;
  circleY = circleY + circleSpeedY;
}
