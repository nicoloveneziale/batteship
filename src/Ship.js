class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunken = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    this.sunken = this.hits >= this.length;
  }
}

export default Ship;
