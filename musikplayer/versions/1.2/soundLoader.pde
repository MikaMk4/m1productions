void fileSelected(File selection) {

  if (!dirIsChecked) {

    if (selection != null) {

      if (audio != null) {

        audio.stop();
        loopIsChecked = false;
        loopChecked[0] = 255;
        loopChecked[1] = 0;
        loopChecked[2] = 0;
        currentTrack = "nichts...";
      }

      currentTrack = "lädt...";

      audio = new SoundFile(this, selection.getPath());
      currentTrack = selection.getPath();
      audio.amp(vol / 100);
      audio.rate(pbRate);
      audio.play();
      prevTime = second();

      fft = new FFT(this, bands);

      fft.input(audio);
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
          currentTrack = "nichts...";
        }

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
