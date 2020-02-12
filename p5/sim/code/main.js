var amountBlobs = 100;
var a = 0;
var foodExist = false;

geschlechter = ["mann", "frau"];
sexualitaeten = ["hetero", "hetero", "hetero", "hetero", "homo"];
blobs = [];
houses = [];

function setup() {

  createCanvas(1800, 800);
  background(220);

  for (i = 0; i < amountBlobs; i++) {

    append(blobs, new Blob(i * 15 + 5, 100, 10, random(geschlechter), random(sexualitaeten), random(50, 100), random(5, 10), random(1000, 1500), i));

  }

}

function draw() {

  background(220);

  for (i = 0; i < houses.length; i++) {

    houses[i].show();

  }

  if (amountBlobs == 0) {

    background(255, 0, 0, 120);
    noLoop();

  }

  for (i = 0; i < amountBlobs; i++) {

    if (blobs[i].surviveTime <= 0) {

      blobs.splice(i, 1);
      amountBlobs -= 1;
      continue;

    } else {

      blobs[i].show();

      if (blobs[i].fed >= 0) {

        blobs[i].fed -= 1;

        if (blobs[i].speed < 0) {

          blobs[i].speed = 0;

        }

      } else {

        blobs[i].surviveTime -= 1;

        if (blobs[i].speed <= 10) {

          blobs[i].speed += 0.1;

        }

        if (blobs.speed > 10) {

          blobs[i].speed = 10;

        }

      }

    }

    /*for (j = 0; j < houses.length; j++) {

      if (houses[j].capacity == 0) {

        append(houses[j].members, blobs[i].id);
        houses[j].capacity = 1;

      } else if (houses[j].capacity == 1) {

        if (!blobs[houses[j].members[0]].id == blobs[i] && !blobs[houses[j].members[0]].geschlecht == blobs[i].geschlecht && blobs[i].sexualitaet == "hetero") {

          append(houses[j].members, blobs[i].id);
          houses[j].capacity = 1;

        }

      }

    }*/

  }

}

function mousePressed() {

  append(houses, new House(mouseX, mouseY, 50));

}
