class Gamestate {

  constructor(listOfFigures) {

    this.listOfFigures = listOfFigures;
    this.isFinal = false;
  }

  bewerten() {

    let wert = 0;

    for (let i = 0; i < this.listOfFigures.length; i++) {

      if (this.listOfFigures[i].seite == "w") {

        if (this.listOfFigures[i].type == "bauer") {

          wert++;
        } else if (this.listOfFigures[i].type == "springer") {

          wert += 3;
        } else if (this.listOfFigures[i].type == "turm" || this.listOfFigures[i].type == "laufer") {

          wert += 5;
        } else if (this.listOfFigures[i].type == "dame") {

          wert += 10;
        } else if (this.listOfFigures[i].type == "koenig") {

          wert += 10000;
        }
      } else if (this.listOfFigures[i].seite == "s") {

        if (this.listOfFigures[i].type == "bauer") {

          wert--;
        } else if (this.listOfFigures[i].type == "springer") {

          wert -= 3;
        } else if (this.listOfFigures[i].type == "turm" || this.listOfFigures[i].type == "laufer") {

          wert -= 5;
        } else if (this.listOfFigures[i].type == "dame") {

          wert -= 10;
        } else if (this.listOfFigures[i].type == "koenig") {

          wert -= 10000;
        }
      }
    }

    return wert;
  }

  changeGamestate(newList) {

    this.listOfFigures = newList;
  }

  getNextGamestates(spieler) {

    if (spieler == 2) {

      paths = [];
      let list = [];

      for (let i = 0; i < this.listOfFigures.length; i++) {

        this.listOfFigures[i].showPaths();

        for (let j = 0; j < paths.length; j++) {

          if (paths[j][0] >= 0 && paths[j][0] < feldGroesse * 8 && paths[j][1] >= 0 && paths[j][1] < feldGroesse * 8 && this.listOfFigures[i].seite == "s") {

            append(list, [i, paths[j][0], paths[j][1]]);
          }
        }

        paths = [];
      }

      return list;
    } else if (spieler == 1) {

      paths = [];
      let list = [];

      for (let i = 0; i < this.listOfFigures.length; i++) {

        this.listOfFigures[i].showPaths();

        for (let j = 0; j < paths.length; j++) {

          if (paths[j][0] >= 0 && paths[j][0] < feldGroesse * 8 && paths[j][1] >= 0 && paths[j][1] < feldGroesse * 8 && this.listOfFigures[i].seite == "w") {

            append(list, [i, paths[j][0], paths[j][1]]);
          }
        }

        paths = [];
      }

      return list;
    }
  }
}
