void keyPressed() {

  if (audio != null) {

    if (key == 'w' || key == 'W' || keyCode == UP) {

      pbRate += 0.1;
      audio.pause();
      audio.rate(pbRate);
      audio.play();
    } else if (key == 's' || key == 'S' ||keyCode == DOWN) {

      pbRate -= 0.1;
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
