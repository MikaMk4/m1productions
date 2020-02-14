import processing.sound.*;

SoundFile audio;

FFT fft;
int bands = 128;

int r = 0;
int g = 255;
int b = 100;

boolean rDown = false;
boolean gDown = false;
boolean bDown = false;

String currentTrack = "nichts...";
String feedbackLine1 = "";
String feedbackLine2 = "";
String feedbackLine3 = "";

PImage muted, silent, normal, loud, max, pause;

float pbRate = 1;
float vol = 5;
int prevTime, curTime;
boolean paused = false;

int[] loopChecked = new int[3];
boolean loopIsChecked = false;

int[] dirChecked = new int[3];
boolean dirIsChecked = false;
ArrayList<File> playList = new ArrayList<File>();
int playListIndex;

void setup() {

  size(1024, 800);

  muted = loadImage("muted.png");
  silent = loadImage("silent.png");
  normal = loadImage("normal.png");
  loud = loadImage("loud.png");
  max = loadImage("max.png");
  pause = loadImage("pause.png");

  loopChecked[0] = 255;
  loopChecked[1] = 0;
  loopChecked[2] = 0;

  dirChecked[0] = 255;
  dirChecked[1] = 0;
  dirChecked[2] = 0;
}

void draw() {

  if (paused) {

    image(pause, 300 * 1.28, 100, 200 * 1.28, 200);
    audio.pause();
  } else {

    floor(vol);

    background(0);

    if (audio != null) {

      visualizer();
    }

    noStroke();

    fill(255);
    rectMode(CENTER);
    rect(400 * 1.28, 400, 150 * 1.28, 40, 10 * 1.28);
    fill(loopChecked[0], loopChecked[1], loopChecked[2]);
    rect(400 * 1.28, 500, 150 * 1.28, 40, 10 * 1.28);
    fill(dirChecked[0], dirChecked[1], dirChecked[2]);
    rect(400 * 1.28, 600, 150 * 1.28, 40, 10 * 1.28);

    textSize(15 * 1.28);
    fill(0);
    text("Suche deinen Song", 330 * 1.28, 400);
    text("Dauerschleife", 330 * 1.28, 500);
    text("Playlist aussuchen", 330 * 1.28, 600);
    fill(255);
    text("Pitch:", 0 * 1.28, 760);
    text(pbRate, 60 * 1.28, 760);
    text("Aktuell:", 0 * 1.28, 790);
    text(currentTrack, 60 * 1.28, 790 );
    text(feedbackLine1, 0, 15);
    text(feedbackLine2, 0, 35);
    text(feedbackLine3, 0, 55);

    if (vol == 0) {

      image(muted, 700 * 1.28, 700, 100 * 1.28, 100);
    } else if (vol < 33) {

      image(silent, 700 * 1.28, 700, 100 * 1.28, 100);
    } else if (vol > 33 && vol < 66) {

      image(normal, 700 * 1.28, 700, 100 * 1.28, 100);
    } else if (vol > 66 && vol < 100) {

      image(loud, 700 * 1.28, 700, 100 * 1.28, 100);
    } else if (vol == 100) {

      image(max, 700 * 1.28, 700, 100 * 1.28, 100);
    }

    if (loopIsChecked && audio != null) {

      if (!audio.isPlaying()) {

        audio.jump(0);
      }
    } else if (audio != null) {

      if (dirIsChecked) {

        if (!audio.isPlaying()) {

          if (playListIndex + 1 < playList.size()) {

            playListIndex++;
            audio = new SoundFile(this, playList.get(playListIndex).getPath());
            currentTrack = playList.get(playListIndex).getPath();
            audio.amp(vol / 100);
            audio.rate(pbRate);
            audio.play();
            prevTime = second();

            fft = new FFT(this, bands);

            fft.input(audio);
          } else {

            audio = new SoundFile(this, playList.get(0).getPath());
            currentTrack = playList.get(0).getPath();
            playListIndex = 0;
            audio.amp(vol / 100);
            audio.rate(pbRate);
            audio.play();
            prevTime = second();

            fft = new FFT(this, bands);

            fft.input(audio);
          }
        }
      }
    }
  }
}
