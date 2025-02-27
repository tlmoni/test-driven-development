export class RotatingShape {
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  static fromString(string) {
    return new RotatingShape(string.replace(/^[ \t]+|[ \t]+$/gm, "") + "\n");
  }

  toString() {
    return this.shape;
  }

  rotateRight() {
    const rows = this.shape.split("\n");
    return rows[0].split("").map((_, j) => rows.map((row) => row[j]).reverse().join("")).join("\n") + "\n";
  }

  rotateLeft() {
    const rows = this.shape.split("\n");
    return rows[0].split("").map((_, j) => rows.map(row => row[j]).join("")).reverse().join("\n") + "\n";
  }
}
