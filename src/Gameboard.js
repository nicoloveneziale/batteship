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
    if (!this.isValidPlace(x, y, ship, direction)) {
      return false;
    }

    if (ship.length === 1) {
      this.changeCell(x, y, ship);
      this.shipTiles++;
    } else {
      if (direction === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          this.changeCell(x + i, y, ship);
          this.shipTiles++;
        }
      } else {
        for (let j = 0; j < ship.length; j++) {
          this.changeCell(x, y + j, ship);
          this.shipTiles++;
        }
      }
    }
    return true;
  }

  cellIntercept(x, y, ship, direction) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
      return true;
    }

    if (ship.length === 1) {
      return this.board[y][x].length > 0;
    }

    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= 10) return true;
        if (this.board[y][x + i].length > 0) {
          return true;
        }
      }
    } else {
      for (let j = 0; j < ship.length; j++) {
        if (y + j >= 10) return true;
        if (this.board[y + j][x].length > 0) {
          return true;
        }
      }
    }
    return false;
  }

  isValidPlace(x, y, ship, direction) {
    if (x < 0 || y < 0 || x >= 10 || y >= 10) {
      return false;
    }

    if (direction === "horizontal" && x + ship.length > 10) {
      console.log(93);
      return false;
    }
    if (direction === "vertical" && y + ship.length > 10) {
      return false;
    }

    return !this.cellIntercept(x, y, ship, direction);
  }

  receiveAttack(x, y) {
    if (this.isValidAttack(x, y) == true) {
      if (this.board[y][x].length > 0) {
        const ship = this.board[y][x][0];
        ship.hit();
        ship.isSunk();
        this.shipTiles--;
        this.attacks[y][x] = true;
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
    this.board[y][x] = [content];
  }

  checkAllSunk() {
    if (this.shipTiles == 0) return true;
    return false;
  }
}

export default Gameboard;
