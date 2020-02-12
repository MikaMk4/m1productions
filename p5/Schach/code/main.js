let feldGroesse;

let figuren = [];
let ifKoenigS = true;
let ifKoenigW = true;

let koenigSBild;
let dameSBild;
let lauferSBild;
let springerSBild;
let turmSBild;
let bauerSBild;

let koenigWBild;
let dameWBild;
let lauferWBild;
let springerWBild;
let turmWBild;
let bauerWBild;

let clickedFigur;
let aktuellerSpieler = 1;

let paths = [];

let bot;
let gameState

function preload() {

  koenigSBild = loadImage("assets/koenigS.png");
  dameSBild = loadImage("assets/dameS.png");
  lauferSBild = loadImage("assets/lauferS.png");
  springerSBild = loadImage("assets/springerS.png");
  turmSBild = loadImage("assets/turmS.png");
  bauerSBild = loadImage("assets/bauerS.png");

  koenigWBild = loadImage("assets/koenigW.png");
  dameWBild = loadImage("assets/dameW.png");
  lauferWBild = loadImage("assets/lauferW.png");
  springerWBild = loadImage("assets/springerW.png");
  turmWBild = loadImage("assets/turmW.png");
  bauerWBild = loadImage("assets/bauerW.png");
}

function setup() {

  if (windowWidth <= windowHeight) {

    feldGroesse = floor(windowWidth / 8 - 5);
  } else {

    feldGroesse = floor(windowHeight / 8 - 5);
  }

  createCanvas(feldGroesse * 8, feldGroesse * 8);

  //Schwarze Figuren
  append(figuren, new Figur(0, 0, "turmS1", "s", "turm"));
  append(figuren, new Figur(feldGroesse, 0, "springerS1", "s", "springer"));
  append(figuren, new Figur(feldGroesse * 2, 0, "lauferS1", "s", "laufer"));
  append(figuren, new Figur(feldGroesse * 3, 0, "dameS", "s", "dame"));
  append(figuren, new Figur(feldGroesse * 4, 0, "koenigS", "s", "koenig"));
  append(figuren, new Figur(feldGroesse * 5, 0, "lauferS2", "s", "laufer"));
  append(figuren, new Figur(feldGroesse * 6, 0, "springerS2", "s", "springer"));
  append(figuren, new Figur(feldGroesse * 7, 0, "turmS2", "s", "turm"));
  append(figuren, new Figur(0, feldGroesse, "bauerS1", "s", "bauer"));
  append(figuren, new Figur(feldGroesse, feldGroesse, "bauerS2", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 2, feldGroesse, "bauerS3", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 3, feldGroesse, "bauerS4", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 4, feldGroesse, "bauerS5", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 5, feldGroesse, "bauerS6", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 6, feldGroesse, "bauerS7", "s", "bauer"));
  append(figuren, new Figur(feldGroesse * 7, feldGroesse, "bauerS8", "s", "bauer"));

  //Weiße Figuren
  append(figuren, new Figur(0, feldGroesse * 7, "turmW1", "w", "turm"));
  append(figuren, new Figur(feldGroesse, feldGroesse * 7, "springerW1", "w", "springer"));
  append(figuren, new Figur(feldGroesse * 2, feldGroesse * 7, "lauferW1", "w", "laufer"));
  append(figuren, new Figur(feldGroesse * 3, feldGroesse * 7, "dameW", "w", "dame"));
  append(figuren, new Figur(feldGroesse * 4, feldGroesse * 7, "koenigW", "w", "koenig"));
  append(figuren, new Figur(feldGroesse * 5, feldGroesse * 7, "lauferW2", "w", "laufer"));
  append(figuren, new Figur(feldGroesse * 6, feldGroesse * 7, "springerW2", "w", "springer"));
  append(figuren, new Figur(feldGroesse * 7, feldGroesse * 7, "turmW2", "w", "turm"));
  append(figuren, new Figur(0, feldGroesse * 6, "bauerW1", "w", "bauer"));
  append(figuren, new Figur(feldGroesse, feldGroesse * 6, "bauerW2", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 2, feldGroesse * 6, "bauerW3", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 3, feldGroesse * 6, "bauerW4", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 4, feldGroesse * 6, "bauerW5", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 5, feldGroesse * 6, "bauerW6", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 6, feldGroesse * 6, "bauerW7", "w", "bauer"));
  append(figuren, new Figur(feldGroesse * 7, feldGroesse * 6, "bauerW8", "w", "bauer"));

  bot = new Bot(3);
  gameState = new Gamestate(figuren);
}

function draw() {

  gameState.changeGamestate(figuren);

  for (i = 0; i < figuren.length; i++) {

    if (figuren[i].seite == "w" && figuren[i].y == 0 && figuren[i].type == "bauer") {

      figuren[i].type = "dame";
      figuren[i].bild = dameWBild;
    } else if (figuren[i].seite == "s" && figuren[i].y == feldGroesse * 8 && figuren[i].type == "bauer") {

      figuren[i].type = "dame";
      figuren[i].bild = dameSBild;
    }
  }

  if (aktuellerSpieler == 2) {

    figuren = chooseMove(gameState, 2, 2)[0].listOfFigures;
    aktuellerSpieler = 1;
  }

  paths = [];

  background(100);

  for (i = 0; i < 8; i++) {

    for (j = 0; j < 8; j++) {

      if (i % 2 == 0 && j % 2 == 0) {

        fill(255);
      } else if (i % 2 == 0 && j % 2 != 0) {

        fill(0, 50, 10);
      } else if (i % 2 != 0 && j % 2 == 0) {

        fill(0, 50, 10);
      } else if (i % 2 != 0 && j % 2 != 0) {

        fill(255);
      }

      rect(j * feldGroesse, i * feldGroesse, feldGroesse, feldGroesse);
    }
  }

  for (i = 0; i < figuren.length; i++) {

    figuren[i].show();
  }

  if (clickedFigur != null || clickedFigur != undefined) {

    fill(0, 255, 0, 100);
    rect(clickedFigur.x, clickedFigur.y, feldGroesse, feldGroesse);

    paths = [];
    clickedFigur.showPaths();
  }

  for (i = 0; i < paths.length; i++) {

    fill(paths[i][2][0], paths[i][2][1], paths[i][2][2], paths[i][2][3]);
    rect(paths[i][0], paths[i][1], feldGroesse, feldGroesse);
  }

  if (gameState.bewerten() <= -10000 || gameState.bewerten() >= 10000) {

    alert("Das Spiel ist vorbei");
    noLoop();
  }
}

function mousePressed() {

  for (i = 0; i < figuren.length; i++) {

    if (figuren[i].x + feldGroesse > mouseX && figuren[i].x < mouseX && figuren[i].y + feldGroesse > mouseY && figuren[i].y < mouseY) {

      if (aktuellerSpieler == 1 && figuren[i].seite == "w") {

        clickedFigur = figuren[i];
        clickedFigurID = i;
        return;
      }
    }
  }

  for (i = 0; i < paths.length; i++) {

    if (mouseX > paths[i][0] && mouseX < paths[i][0] + feldGroesse && mouseY > paths[i][1] && mouseY < paths[i][1] + feldGroesse && mouseX > 0 && mouseX < feldGroesse * 8 && mouseY > 0 && mouseY < feldGroesse * 8) {

      clickedFigur.x = paths[i][0];
      clickedFigur.y = paths[i][1];
      clickedFigur.ifUnmoved = false;
      aktuellerSpieler = 2;

      for (j = 0; j < figuren.length; j++) {

        if (figuren[j].x == clickedFigur.x && figuren[j].y == clickedFigur.y && figuren[j] != clickedFigur) {

          figuren.splice(j, 1);
        }
      }
    }
  }

  clickedFigur = null;
}
