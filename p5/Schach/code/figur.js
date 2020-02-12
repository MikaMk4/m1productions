class Figur {

  constructor(x, y, figur, seite, type, ifUnmoved) {

    this.x = x;
    this.y = y;
    this.seite = seite;
    this.figur = figur;
    this.type = type;

    if (ifUnmoved == null || ifUnmoved == undefined) {

      this.ifUnmoved = true;
    } else {

      this.ifUnmoved = ifUnmoved;
    }

    if (this.figur == "koenigS") {

      this.bild = koenigSBild;
    } else if (this.figur == "dameS") {

      this.bild = dameSBild;
    } else if (this.figur == "lauferS1" || this.figur == "lauferS2") {

      this.bild = lauferSBild;
    } else if (this.figur == "springerS1" || this.figur == "springerS2") {

      this.bild = springerSBild;
    } else if (this.figur == "turmS1" || this.figur == "turmS2") {

      this.bild = turmSBild;
    } else if (this.figur == "bauerS1" || this.figur == "bauerS2" || this.figur == "bauerS3" || this.figur == "bauerS3" || this.figur == "bauerS4" || this.figur == "bauerS5" || this.figur == "bauerS6" || this.figur == "bauerS7" || this.figur == "bauerS8") {

      this.bild = bauerSBild;
    } else if (this.figur == "koenigW") {

      this.bild = koenigWBild;
    } else if (this.figur == "dameW") {

      this.bild = dameWBild;
    } else if (this.figur == "lauferW1" || this.figur == "lauferW2") {

      this.bild = lauferWBild;
    } else if (this.figur == "springerW1" || this.figur == "springerW2") {

      this.bild = springerWBild;
    } else if (this.figur == "turmW1" || this.figur == "turmW2") {

      this.bild = turmWBild;
    } else if (this.figur == "bauerW1" || this.figur == "bauerW2" || this.figur == "bauerW3" || this.figur == "bauerW3" || this.figur == "bauerW4" || this.figur == "bauerW5" || this.figur == "bauerW6" || this.figur == "bauerW7" || this.figur == "bauerW8") {

      this.bild = bauerWBild;
    }
  }

  show() {

    image(this.bild, this.x + floor(feldGroesse / 20), this.y + floor(feldGroesse / 20), feldGroesse - floor(feldGroesse / 10), feldGroesse - floor(feldGroesse / 10));
  }

  showPaths() {

    let back = false;

    if (this.type == "bauer" && this.seite == "w") {

      if (this.ifUnmoved) {

        for (let i = 0; i < 2; i++) {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x && figuren[j].y == this.y - (i + 1) * feldGroesse) {

              back = true;
            }
          }

          if (!back) {
            append(paths, [this.x, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
          }
        }

      } else {

        for (let i = 0; i < figuren.length; i++) {

          if (figuren[i].x == this.x && figuren[i].y == this.y - feldGroesse) {

            back = true;
          }
        }

        if (!back) {
          append(paths, [this.x, this.y - feldGroesse, [0, 0, 255, 255]]);
        }
      }

      for (let i = 0; i < 2; i++) {

        if (i == 0) {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x - feldGroesse && figuren[j].y == this.y - feldGroesse && figuren[j].seite != "w") {

              append(paths, [this.x - feldGroesse, this.y - feldGroesse, [255, 0, 0, 75]]);
            }
          }
        } else {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x + feldGroesse && figuren[j].y == this.y - feldGroesse && figuren[j].seite != "w") {

              append(paths, [this.x + feldGroesse, this.y - feldGroesse, [255, 0, 0, 75]]);
            }
          }
        }
      }
    } else if (this.type == "bauer" && this.seite == "s") {

      if (this.ifUnmoved) {

        for (let i = 0; i < 2; i++) {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x && figuren[j].y == this.y + (i + 1) * feldGroesse) {

              back = true;
            }
          }

          if (!back) {
            append(paths, [this.x, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
          }
        }

      } else {

        for (let i = 0; i < figuren.length; i++) {

          if (figuren[i].x == this.x && figuren[i].y == this.y + feldGroesse) {

            back = true;
          }
        }

        if (!back) {
          append(paths, [this.x, this.y + feldGroesse, [0, 0, 255, 255]]);
        }
      }

      for (let i = 0; i < 2; i++) {

        if (i == 0) {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x - feldGroesse && figuren[j].y == this.y + feldGroesse && figuren[j].seite != "s") {

              append(paths, [this.x + feldGroesse, this.y + feldGroesse, [255, 0, 0, 75]]);
            }
          }
        } else {

          for (let j = 0; j < figuren.length; j++) {

            if (figuren[j].x == this.x + feldGroesse && figuren[j].y == this.y + feldGroesse && figuren[j].seite != "s") {

              append(paths, [this.x + feldGroesse, this.y + feldGroesse, [255, 0, 0, 75]]);
            }
          }
        }
      }
    } else if (this.type == "turm") {

      for (let n = 0; n < 4; n++) {

        if (n == 0) {

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 1) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 2) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 3) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        }
      }
    } else if (this.type == "laufer") {

      for (let n = 0; n < 4; n++) {

        if (n == 0) {

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 1) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 2) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 3) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        }
      }
    } else if (this.type == "dame") {

      for (let n = 0; n < 8; n++) {

        if (n == 0) {

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 1) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 2) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 3) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 4) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 5) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 6) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x + (i + 1) * feldGroesse && figuren[j].y == this.y - (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x + (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x + (i + 1) * feldGroesse, this.y - (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        } else if (n == 7) {

          back = false;

          for (let i = 0; i < 8; i++) {

            for (let j = 0; j < figuren.length; j++) {

              if (figuren[j].x == this.x - (i + 1) * feldGroesse && figuren[j].y == this.y + (i + 1) * feldGroesse) {

                if (figuren[j].seite != this.seite) {

                  append(paths, [this.x - (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [255, 0, 0, 75]]);
                }

                back = true;
              }
            }

            if (!back) {

              append(paths, [this.x - (i + 1) * feldGroesse, this.y + (i + 1) * feldGroesse, [0, 0, 255, 255]]);
            } else {

              break;
            }
          }
        }
      }
    } else if (this.type == "springer") {

      for (let n = 0; n < 8; n++) {

        back = false;

        if (n == 0) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse && figuren[i].y == this.y - feldGroesse * 2) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse, this.y - feldGroesse * 2, [0, 0, 255, 255]]);
          }
        } else if (n == 1) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse && figuren[i].y == this.y - feldGroesse * 2) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse, this.y - feldGroesse * 2, [0, 0, 255, 255]]);
          }
        } else if (n == 2) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse * 2 && figuren[i].y == this.y - feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse * 2, this.y - feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 3) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse * 2 && figuren[i].y == this.y + feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse * 2, this.y + feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 4) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse && figuren[i].y == this.y + feldGroesse * 2) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse, this.y + feldGroesse * 2, [0, 0, 255, 255]]);
          }
        } else if (n == 5) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse && figuren[i].y == this.y + feldGroesse * 2) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse, this.y + feldGroesse * 2, [0, 0, 255, 255]]);
          }
        } else if (n == 6) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse * 2 && figuren[i].y == this.y + feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse * 2, this.y + feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 7) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse * 2 && figuren[i].y == this.y - feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse * 2, this.y - feldGroesse, [0, 0, 255, 255]]);
          }
        }
      }
    } else if (this.type == "koenig") {

      for (let n = 0; n < 9; n++) {

        back = false;

        if (n == 0) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse && figuren[i].y == this.y - feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse, this.y - feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 1) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x && figuren[i].y == this.y - feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x, this.y - feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 2) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse && figuren[i].y == this.y - feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse, this.y - feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 3) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse && figuren[i].y == this.y) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse, this.y, [0, 0, 255, 255]]);
          }
        } else if (n == 4) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x && figuren[i].y == this.y) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x, this.y, [0, 0, 255, 255]]);
          }
        } else if (n == 5) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse && figuren[i].y == this.y) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse, this.y, [0, 0, 255, 255]]);
          }
        } else if (n == 6) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x - feldGroesse && figuren[i].y == this.y + feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x - feldGroesse, this.y + feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 7) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x && figuren[i].y == this.y + feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x, this.y + feldGroesse, [0, 0, 255, 255]]);
          }
        } else if (n == 8) {

          for (let i = 0; i < figuren.length; i++) {

            if (figuren[i].x == this.x + feldGroesse && figuren[i].y == this.y + feldGroesse) {

              if (figuren[i].seite != this.seite) {

                append(paths, [figuren[i].x, figuren[i].y, [255, 0, 0, 75]]);
              }

              back = true;
              break;
            }
          }

          if (!back) {

            append(paths, [this.x + feldGroesse, this.y + feldGroesse, [0, 0, 255, 255]]);
          }
        }
      }
    }
  }
}
