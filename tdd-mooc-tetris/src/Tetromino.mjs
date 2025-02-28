export class Tetromino {
  shape;

  static T_SHAPE = new Tetromino(
`.T.
TTT
...
`)

  static I_SHAPE = new Tetromino(
`.....
.....
IIII.
.....
.....
`)

  static horizontalI =
`.....
.....
IIII.
.....
.....
`

  static verticalI =
`..I..
..I..
..I..
..I..
.....
`

  constructor(shape) {
    this.shape = shape;
  }

  toString() {
    return this.shape;
  }

  rotateRight() {
    if (this.shape === Tetromino.verticalI) {
      return new Tetromino(Tetromino.horizontalI)
    } else if (this.shape === Tetromino.horizontalI) {
      return new Tetromino(Tetromino.verticalI)
    } else {
      const rows = this.shape.split("\n");
      return new Tetromino(rows[0].split("").map((_, j) => rows.map((row) => row[j]).reverse().join("")).join("\n") + "\n");
    }
  }

  rotateLeft() {
    if (this.shape === Tetromino.verticalI) {
      return new Tetromino(Tetromino.horizontalI)
    } else if (this.shape === Tetromino.horizontalI) {
      return new Tetromino(Tetromino.verticalI)
    } else {
      const rows = this.shape.split("\n");
      return new Tetromino(rows[0].split("").map((_, j) => rows.map(row => row[j]).join("")).reverse().join("\n") + "\n");
    }
  }
}
