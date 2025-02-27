export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.createBoard();
  }

  createBoard() {
    this.board = Array.from({ length: this.height }, () => ".".repeat(this.width)).join("\n") + "\n";
  }

  drop() {
    const shape = `X`;
    const index = Math.floor(this.width / 2);
    const updatedBoard = this.board.substring(0, index) + shape + this.board.substring(index + 1);
    this.board = updatedBoard;
    this.location = index;
  }

  tick() {
    const initialLocation = this.location;
    const updatedLocation = this.location + this.width + 1;
    const updatedBoard =
      this.board.substring(0, initialLocation) +
      "." +
      this.board.substring(initialLocation + 1, updatedLocation) +
      "X" +
      this.board.substring(updatedLocation + 1);
    this.board = updatedBoard;
  }

  toString() {
    return this.board;
  }
}
