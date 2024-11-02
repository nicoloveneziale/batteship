function placeShip(player, ship, direction) {
  const gridList = document.querySelectorAll(".game-cell");
  const gameBoard = player.gameBoard;

  function getShipCells(startX, startY, ship, direction) {
    const cells = [];
    const length = ship.length;

    for (let i = 1; i < length; i++) {
      if (direction === "horizontal") {
        const newX = parseInt(startX) + i;
        if (newX >= 11) continue;
        const cell = document.getElementById(`${newX}${startY}`);
        if (cell) cells.push(cell);
      } else {
        const newY = parseInt(startY) + i;
        if (newY >= 11) continue;
        const cell = document.getElementById(`${startX}${newY}`);
        if (cell) cells.push(cell);
      }
    }
    return cells;
  }

  const cellListeners = new Map();

  function handleShipHover(cell, isHovering) {
    const cellId = cell.id;
    const [xVal, yVal] = [cellId.slice(0, 1), cellId.slice(1)];

    cell.classList.toggle("ship-hover", isHovering);

    if (ship.length > 1) {
      const adjacentCells = getShipCells(xVal, yVal, ship, direction);
      adjacentCells.forEach((adjacentCell) => {
        adjacentCell.classList.toggle("ship-hover", isHovering);
      });
    }
  }

  function handleShipPlacement(cell) {
    const cellId = cell.id;
    const [xVal, yVal] = [
      parseInt(cellId.slice(0, 1)),
      parseInt(cellId.slice(1)),
    ];

    gameBoard.placeShip(xVal, yVal, ship, direction);

    if (gameBoard.isValidPlace(xVal, yVal, ship, direction)) {
      cell.classList.add("ship");
      const adjacentCells = getShipCells(xVal, yVal, ship, direction);
      adjacentCells.forEach((adjacentCell) => {
        adjacentCell.classList.add("ship");
      });

      removeAllEventListeners();
    }
  }

  function removeAllEventListeners() {
    gridList.forEach((cell) => {
      handleShipHover(cell, false);
      const listeners = cellListeners.get(cell);
      if (listeners) {
        cell.removeEventListener("mouseover", listeners.mouseoverFn);
        cell.removeEventListener("mouseleave", listeners.mouseleaveFn);
        cell.removeEventListener("click", listeners.clickFn);
      }
    });
    cellListeners.clear();
  }

  gridList.forEach((cell) => {
    const mouseoverFn = () => handleShipHover(cell, true);
    const mouseleaveFn = () => handleShipHover(cell, false);
    const clickFn = () => handleShipPlacement(cell);

    cellListeners.set(cell, {
      mouseoverFn,
      mouseleaveFn,
      clickFn,
    });

    cell.addEventListener("mouseover", mouseoverFn);
    cell.addEventListener("mouseleave", mouseleaveFn);
    cell.addEventListener("click", clickFn);
  });
  return removeAllEventListeners;
}

export default placeShip;
