function renderBoard(gameBoard) {
  const gameGrid = document.createElement("div");
  gameGrid.classList.add("game-grid");
  for (const y in gameBoard.board) {
    for (const x in gameBoard.board[y]) {
      const button = document.createElement("button");
      button.classList.add("game-cell");
      button.id = "" + x + y;
      gameGrid.appendChild(button);
    }
  }
  return gameGrid;
}

export default renderBoard;
