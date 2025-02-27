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

  drop() {
    let shape = `X`;
    let index = Math.floor(this.width / 2);
    let updatedBoard = this.board.substring(0, index) + shape + this.board.substring(index + 1);
    this.board = updatedBoard;
    this.location = index;
  }

  toString() {
    return this.board;
  }
}
