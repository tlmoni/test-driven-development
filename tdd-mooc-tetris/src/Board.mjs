export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.location = 0;
    this.block = "";
    this.blockFalling = false;
    this.createBoard();
  }

  createBoard() {
    this.board = Array.from({ length: this.height }, () => ".".repeat(this.width)).join("\n") + "\n";
  }

  drop(block) {
    if (this.blockFalling) {
      throw "already falling";
    }

    this.block = block;
    const index = Math.floor(this.width / 2);
    const updatedBoard = this.board.substring(0, index) + this.block + this.board.substring(index + 1);
    this.board = updatedBoard;
    this.location = index;
    this.blockFalling = true;
  }

  tick() {
    const initialLocation = this.location;
    const updatedLocation = this.location + this.width + 1;
    if (this.width * this.height - this.location > this.width && this.board[this.location + this.width + 1] === ".") {
      this.location = updatedLocation;
      const updatedBoard =
        this.board.substring(0, initialLocation) +
        "." +
        this.board.substring(initialLocation + 1, updatedLocation) +
        this.block +
        this.board.substring(updatedLocation + 1);
      this.board = updatedBoard;
    } else {
      this.blockFalling = false;
    }
  }

  hasFalling() {
    return this.blockFalling;
  }

  toString() {
    return this.board;
  }
}
