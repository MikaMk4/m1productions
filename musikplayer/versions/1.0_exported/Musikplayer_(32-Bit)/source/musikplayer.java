import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.sound.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class musikplayer extends PApplet {



SoundFile audio;
String currentTrack = "nichts...";

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

public void setup() {

  

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

public void draw() {

  if (paused) {

    image(pause, 300, 100, 200, 200);
    audio.pause();
  } else {

    floor(vol);

    background(0);
    fill(255);
    rectMode(CENTER);
    rect(400, 400, 150, 40, 10);
    fill(loopChecked[0], loopChecked[1], loopChecked[2]);
    rect(400, 500, 150, 40, 10);
    fill(dirChecked[0], dirChecked[1], dirChecked[2]);
    rect(400, 600, 150, 40, 10);

    textSize(15);
    fill(0);
    text("Suche deinen Song", 330, 400);
    text("Dauerschleife", 330, 500);
    text("Playlist aussuchen", 330, 600);
    fill(255);
    text("Aktuell:", 0, 790);
    text(currentTrack, 60, 790);

    if (vol == 0) {

      image(muted, 700, 700, 100, 100);
    } else if (vol < 33) {

      image(silent, 700, 700, 100, 100);
    } else if (vol > 33 && vol < 66) {

      image(normal, 700, 700, 100, 100);
    } else if (vol > 66 && vol < 100) {

      image(loud, 700, 700, 100, 100);
    } else if (vol == 100) {

      image(max, 700, 700, 100, 100);
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
          } else {

            audio = new SoundFile(this, playList.get(0).getPath());
            currentTrack = playList.get(0).getPath();
            playListIndex = 0;
            audio.amp(vol / 100);
            audio.rate(pbRate);
            audio.play();
            prevTime = second();
          }
        }
      }
    }
  }
}

public void mousePressed() {

  if (!paused) {

    if (mouseX > 325 && mouseX < 475 && mouseY > 380 && mouseY < 420) {

      if (!dirIsChecked) {

        selectInput("Eine Audio-Datei aussuchen", "fileSelected");
      } else {

        selectFolder("Einen Ordner aussuchen (Er darf nur Audio-Dateien enthalten!)", "fileSelected");
      }
    } else if (mouseX > 325 && mouseX < 475 && mouseY > 480 && mouseY < 520) {

      if (!loopIsChecked) {

        loopChecked[0] = 0;
        loopChecked[1] = 255;
        loopChecked[2] = 0;
        loopIsChecked = true;
      } else {

        loopChecked[0] = 255;
        loopChecked[1] = 0;
        loopChecked[2] = 0;
        loopIsChecked = false;
      }
    } else if (mouseX > 325 && mouseX < 475 && mouseY > 580 && mouseY < 620) {

      if (!dirIsChecked) {

        dirChecked[0] = 0;
        dirChecked[1] = 255;
        dirChecked[2] = 0;
        dirIsChecked = true;
      } else {

        dirChecked[0] = 255;
        dirChecked[1] = 0;
        dirChecked[2] = 0;
        dirIsChecked = false;
      }
    }
  }
}

public void keyPressed() {

  if (audio != null) {

    if (key == 'w' || key == 'W' || keyCode == UP) {

      pbRate += 0.1f;
      audio.pause();
      audio.rate(pbRate);
      audio.play();
    } else if (key == 's' || key == 'S' ||keyCode == DOWN) {

      pbRate -= 0.1f;
      audio.pause();
      audio.rate(pbRate);
      audio.play();
    } else if (key == 'd' || key == 'D') {

      if (vol != 0) {

        vol -= 5;
        audio.pause();
        audio.amp(vol / 100);
        audio.play();
      }
    } else if (key == 'e' || key == 'E') {

      if (vol != 100) {

        vol += 5;
        audio.pause();
        audio.amp(vol / 100);
        audio.play();
      }
    } else if (key == ' ') {

      if (!paused) {

        paused = true;
      } else {

        paused = false;
        audio.play();
      }
    }
  }
}

public void fileSelected(File selection) {

  if (!dirIsChecked) {

    if (selection != null) {

      if (audio != null) {

        audio.stop();
        loopIsChecked = false;
        loopChecked[0] = 255;
        loopChecked[1] = 0;
        loopChecked[2] = 0;
      }

      currentTrack = "lädt...";

      audio = new SoundFile(this, selection.getPath());
      currentTrack = selection.getPath();
      audio.amp(vol / 100);
      audio.rate(pbRate);
      audio.play();
      prevTime = second();
    }
  } else {

    if (selection != null) {

      if (selection.isDirectory()) {

        File[] selectedDir = selection.listFiles();

        for (int i = 0; i < selectedDir.length; i++) {

          playList.add(selectedDir[i]);
        }

        if (audio != null) {

          audio.stop();
        }

        audio = new SoundFile(this, playList.get(0).getPath());
        currentTrack = playList.get(0).getPath();
        playListIndex = 0;
        audio.amp(vol / 100);
        audio.rate(pbRate);
        audio.play();
        prevTime = second();
      }
    }
  }
}
  public void settings() {  size(800, 800); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "musikplayer" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
