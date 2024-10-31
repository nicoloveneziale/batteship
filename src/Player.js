import GameBoard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameBoard = new GameBoard();
  }

  addScore(points) {
    this.score += points;
  }
}

export default Player;
