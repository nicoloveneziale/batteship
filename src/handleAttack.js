function handleAttack(gameBoard, onMiss, checkWin, delay, gameText) {
  const gridList = document.querySelectorAll(".game-cell");

  function setEventListeners() {
    gridList.forEach((cell) => {
      cell.addEventListener("click", tryHit);
    });
  }

  async function tryHit(event) {
    const cell = event.target;
    const [x, y] = [cell.id.slice(0, 1), cell.id.slice(1)];
    gameText.innerHTML = "Your fire!...";
    await delay(800);
    if (gameBoard.receiveAttack(x, y) === true) {
      gameText.innerHTML = "... and its a hit!";
      cell.classList.add("hit");
      if (checkWin() != false) removeEventListeners();
      await delay(800);
    } else if (gameBoard.isValidAttack(x, y) == true) {
      removeEventListeners();
      gameText.innerHTML = "... and miss";
      cell.classList.add("miss");
      await delay(800);
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
