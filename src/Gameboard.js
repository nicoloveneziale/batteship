class Gameboard {
  constructor() {
    this.board = [
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];
    this.attacks = [
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];
    this.shipTiles = 0;
  }

  placeShip(x, y, ship, direction) {
    if (this.isValidPlace(x, y, ship, direction) == true) {
      if (ship.length == 1) {
        this.changeCell(x, y, ship);
        this.shipTiles++;
      } else {
        if (direction == "horizontal") {
          for (var i = 0; i < ship.length; i++) {
            this.changeCell(x, y, ship);
            x++;
            this.shipTiles++;
          }
        } else {
          for (var j = 0; j < ship.length; j++) {
            this.changeCell(x, y, ship);
            y++;
            this.shipTiles++;
          }
        }
      }
    }
  }

  isValidPlace(x, y, ship, direction) {
    if (
      (direction == "horizontal" && x + ship.length > 10) ||
      (direction == "vertical" && y + ship.length > 10)
    ) {
      return false;
    }
    return true;
  }

  receiveAttack(x, y) {
    if (this.isValidAttack(x, y) == true) {
      this.attacks[y][x] = true;
      if (this.board[y][x].length != 0) {
        const ship = this.board[y][x];
        ship.hit();
        ship.isSunk();
        this.shipTiles--;
        return true;
      }
      return false;
    }
  }

  isValidAttack(x, y) {
    if (this.attacks[y][x].length == 0) {
      return true;
    }
    return false;
  }

  changeCell(x, y, content) {
    this.board[y][x] = content;
  }

  checkAllSunk() {
    if (this.shipTiles == 0) return true;
    return false;
  }
}

export default Gameboard;
