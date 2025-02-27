export class Tetromino {
  shape;

  static T_SHAPE = new Tetromino(
`.T.
TTT
...
`)

  constructor(shape) {
    this.shape = shape;
  }

  toString() {
    return this.shape;
  }

  rotateRight() {
    const rows = this.shape.split("\n");
    return new Tetromino(rows[0].split("").map((_, j) => rows.map((row) => row[j]).reverse().join("")).join("\n") + "\n");
  }

  rotateLeft() {
    const rows = this.shape.split("\n");
    return new Tetromino(rows[0].split("").map((_, j) => rows.map(row => row[j]).join("")).reverse().join("\n") + "\n");
  }
}
