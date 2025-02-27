export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.createBoard()
  }

  createBoard() {
    this.board = Array.from({ length: this.height }, () => ".".repeat(this.width)).join("\n") + "\n";
  }

  toString() {
    return this.board;
  }
}
