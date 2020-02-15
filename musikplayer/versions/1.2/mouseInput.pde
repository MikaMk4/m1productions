void mousePressed() {

  if (!paused) {

    if (mouseX > 325 * 1.28 && mouseX < 475 * 1.28 && mouseY > 380 && mouseY < 420) {

      if (!dirIsChecked) {

        selectInput("Eine Audio-Datei aussuchen", "fileSelected");
      } else {

        selectFolder("Einen Ordner aussuchen (Er darf nur Audio-Dateien enthalten!)", "fileSelected");
      }
    } else if (mouseX > 325 * 1.28 && mouseX < 475 * 1.28 && mouseY > 480 && mouseY < 520) {

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
    } else if (mouseX > 325 * 1.28 && mouseX < 475 * 1.28 && mouseY > 580 && mouseY < 620) {

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
