void fileSelected(File selection) {

  if (!dirIsChecked) {

    if (selection != null) {
      
      feedbackLine1 = "";

      if (audio != null) {

        audio.stop();
        loopIsChecked = false;
        loopChecked[0] = 255;
        loopChecked[1] = 0;
        loopChecked[2] = 0;
        currentTrack = "nichts...";
      }

      currentTrack = "lädt...";

      text(currentTrack, 60 * 1.28, 790 );

      audio = new SoundFile(this, selection.getPath());
      setCurrentTrack(selection);
      audio.amp(vol / 100);
      audio.rate(pbRate);
      audio.play();
      prevTime = second();

      fft = new FFT(this, bands);

      fft.input(audio);
    } else {

      feedbackLine1 = "Es wurde nichts ausgewählt";
      audio = null;
    }
  } else {

    if (selection != null) {
      
      feedbackLine1 = "";

      if (selection.isDirectory()) {

        File[] selectedDir = selection.listFiles();

        for (int i = 0; i < selectedDir.length; i++) {

          playList.add(selectedDir[i]);
        }

        if (audio != null) {

          audio.stop();
          currentTrack = "nichts...";
        }

        currentTrack = "lädt...";

        text(currentTrack, 60 * 1.28, 790 );

        audio = new SoundFile(this, playList.get(0).getPath());
        setCurrentTrack(playList.get(0));
        playListIndex = 0;
        audio.amp(vol / 100);
        audio.rate(pbRate);
        audio.play();
        prevTime = second();

        fft = new FFT(this, bands);

        fft.input(audio);
      }
    } else {

      feedbackLine1 = "Es wurde nichts ausgewählt";
    }
  }
}

void setCurrentTrack(File selection) {

  ArrayList<String> afterLastBackSlash = new ArrayList<String>();
  ArrayList<String> liste = new ArrayList<String>();

  for (int i = selection.getPath().toCharArray().length - 1; i >= 0; i--) {

    liste.add(str(selection.getPath().toCharArray()[i]));
  }

  for (String letter : liste) {

    if (!letter.equals("\\")) {

      afterLastBackSlash.add(letter);
    } else {

      break;
    }
  }

  for (int i = 0; i < afterLastBackSlash.size(); i++) {

    if (afterLastBackSlash.get(i).equals(".")) {

      afterLastBackSlash.remove(i);
      afterLastBackSlash.remove(i - 1);
      afterLastBackSlash.remove(i - 2);
      afterLastBackSlash.remove(i - 3);
    }
  }

  currentTrack = "";

  for (int i = afterLastBackSlash.size() - 1; i >= 0; i--) {

    currentTrack = currentTrack + afterLastBackSlash.get(i);
  }
}
