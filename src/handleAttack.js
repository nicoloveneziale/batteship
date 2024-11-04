function handleAttack(gameBoard, onMiss, checkWin) {
  const gridList = document.querySelectorAll(".game-cell");

  function setEventListeners() {
    gridList.forEach((cell) => {
      cell.addEventListener("click", tryHit);
    });
  }

  function tryHit(event) {
    const cell = event.target;
    const [x, y] = [cell.id.slice(0, 1), cell.id.slice(1)];
    if (gameBoard.receiveAttack(x, y) === true) {
      cell.classList.add("hit");
      if (checkWin() != false) removeEventListeners();
    } else if (gameBoard.isValidAttack(x, y) == true) {
      removeEventListeners();
      cell.classList.add("miss");
      onMiss();
    }
  }

  function removeEventListeners() {
    gridList.forEach((cell) => {
      cell.removeEventListener("click", tryHit);
    });
  }

  return setEventListeners;
}

export default handleAttack;
