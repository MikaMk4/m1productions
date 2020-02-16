import processing.sound.*;

void visualizer() {

  rectMode(CORNER);

  float[] spectrum = new float[bands];

  float curH;
  float prevH = 0;

  if (fft != null) {

    fft.analyze(spectrum);
  } else {

    feedbackLine1 = "Die Datei konnte nicht richtig geladen werden.";
    feedbackLine2 = "Damit der Visualizer funktioniert, muss das Programm neu geladen werden.";
    
    audio = null;
    return;
  }

  for (int i = 0; i < spectrum.length; i++) {

    curH = lerp(map(spectrum[i], 0, 1, 0, height) * 20, prevH, 0.8);
    prevH = curH;

    noFill();
    stroke(r, g, b);
    strokeWeight(1);
    rect(i * 8, 0, 4, curH);
  }

  if (!rDown) {

    r++;
  } else {

    r--;
  }

  if (!gDown) {

    g++;
  } else {

    g--;
  }

  if (!bDown) {

    b++;
  } else {

    b--;
  }

  if (r == 255) {

    rDown = true;
  } else if (r == 0) {

    rDown = false;
  }

  if (g == 255) {

    gDown = true;
  } else if (g == 0) {

    gDown = false;
  }

  if (b == 255) {

    bDown = true;
  } else if (b == 0) {

    bDown = false;
  }
}
