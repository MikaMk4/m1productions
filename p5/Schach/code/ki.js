class Bot {

  constructor(denktiefe) {

    this.denktiefe = denktiefe;
  }
}

function chooseMove(state, spieler, tiefe) {

  if (tiefe == 0) {

    return [state, state.bewerten()];
  }

  if (spieler == 2) {

    let possibleMoves = state.getNextGamestates(2);

    let besterMove;
    let besterWert = Infinity;

    let cacheList = [];
    let nextList = [];

    for (let i = 0; i < possibleMoves.length; i++) {

      nextList = [];

      for (let j = 0; j < state.listOfFigures.length; j++) {

        append(nextList, new Figur(state.listOfFigures[j].x, state.listOfFigures[j].y, state.listOfFigures[j].figur, state.listOfFigures[j].seite, state.listOfFigures[j].type, state.listOfFigures[j].ifUnmoved));
      }

      for (let j = 0; j < nextList.length; j++) {

        if (possibleMoves[i][1] == nextList[j].x && possibleMoves[i][2] == nextList[j].y) {

          nextList.splice(j, 1);
          break;
        }
      }

      nextList[possibleMoves[i][0]].x = possibleMoves[i][1];
      nextList[possibleMoves[i][0]].y = possibleMoves[i][2];
      nextList[possibleMoves[i][0]].ifUnmoved = false;

      append(cacheList, new Gamestate(nextList));
    }

    shuffle(cacheList, true);

    for (let i = 0; i < cacheList.length; i++) {

      let wert = chooseMove(cacheList[i], 1, tiefe - 1)[1];

      if (wert < besterWert) {

        besterWert = wert;
        besterMove = i;
      }
    }

    return [cacheList[besterMove], besterWert];
  } else if (spieler == 1) {

    let possibleMoves = state.getNextGamestates(1);

    let besterMove;
    let besterWert = -Infinity;

    let cacheList = [];
    let nextList = [];

    for (let i = 0; i < possibleMoves.length; i++) {

      nextList = [];

      for (let j = 0; j < state.listOfFigures.length; j++) {

        append(nextList, new Figur(state.listOfFigures[j].x, state.listOfFigures[j].y, state.listOfFigures[j].figur, state.listOfFigures[j].seite, state.listOfFigures[j].type, state.listOfFigures[j].ifUnmoved));
      }

      for (let j = 0; j < nextList.length; j++) {

        if (possibleMoves[i][1] == nextList[j].x && possibleMoves[i][2] == nextList[j].y) {

          nextList.splice(j, 1);
          break;
        }
      }

      if (nextList[possibleMoves[i][0]] == undefined) {

        continue;
      }

      nextList[possibleMoves[i][0]].x = possibleMoves[i][1];
      nextList[possibleMoves[i][0]].y = possibleMoves[i][2];
      nextList[possibleMoves[i][0]].ifUnmoved = false;

      append(cacheList, new Gamestate(nextList));
    }

    shuffle(cacheList, true);

    for (let i = 0; i < cacheList.length; i++) {

      let wert = chooseMove(cacheList[i], 2, tiefe - 1)[1];

      if (wert > besterWert) {

        besterWert = wert;
        besterMove = i;
      }
    }

    return [cacheList[besterMove], besterWert];
  }
}
