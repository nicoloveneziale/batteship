import "./styles.css";
import { renderEntryPage, startButton } from "./entryPage.js";
import renderBoard from "./renderBoard.js";
import placeShip from "./placeShip.js";
import Player from "./Player";
import Ship from "./Ship.js";
import ComputerPlayer from "./ComputerPlayer.js";
import handleAttack from "./handleAttack.js";

const body = document.querySelector("body");
renderEntryPage();

startButton.addEventListener("click", startGameInitial);

function startGameInitial() {
  startGame(document.querySelector("#name").value);
}

function startGame(name) {
  const ships = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];

  const gameState = {
    direction: "horizontal",
    currentShipIndex: 0,
    ships: ships,
    player: new Player(name),
    computer: new ComputerPlayer(),
    removeListeners: null,
  };

  body.innerHTML = "";
  const selectionGameGrid = renderBoard(gameState.player.gameBoard, true);
  const placeText = document.createElement("p");
  placeText.innerHTML = `Place your ships ${name}!`;
  placeText.id = "place-text";

  body.append(placeText, selectionGameGrid);
  body.classList.add("flex-col");

  function handleRotation(event) {
    if (event.key.toLowerCase() === "r") {
      gameState.direction =
        gameState.direction === "horizontal" ? "vertical" : "horizontal";

      if (gameState.removeListeners) {
        gameState.removeListeners();
      }

      if (gameState.currentShipIndex < gameState.ships.length) {
        gameState.removeListeners = handleShipPlacement();
      }
    }
  }

  function handleShipPlacement() {
    return placeShip(
      gameState.player,
      gameState.ships[gameState.currentShipIndex],
      gameState.direction,
      onShipPlaced,
    );
  }

  function onShipPlaced() {
    gameState.currentShipIndex++;

    if (gameState.currentShipIndex < gameState.ships.length) {
      const shipLength = gameState.ships[gameState.currentShipIndex].length;
      placeText.innerHTML = `Place your ${shipLength}-unit ship, ${name}!`;

      gameState.removeListeners = handleShipPlacement();
    } else {
      placeText.innerHTML = "All ships placed! Game starting...";
      window.removeEventListener("keypress", handleRotation);

      body.innerHTML = "";

      const gameText = document.createElement("h1");
      gameText.id = "game-text";

      gameText.innerHTML = "Your attack first " + gameState.player.name + "!";

      const boardDiv = document.createElement("div");
      boardDiv.classList.add("flex-row");

      selectionGameGrid.classList.add("player-board");
      boardDiv.appendChild(selectionGameGrid);
      boardDiv.id = "board-div";

      body.append(gameText, boardDiv);

      let computerShips = [
        new Ship(5),
        new Ship(4),
        new Ship(3),
        new Ship(3),
        new Ship(2),
      ];

      function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
      }

      for (let s = 0; s < computerShips.length; s++) {
        let ship = computerShips[s];
        let placed = false;
        while (!placed) {
          let direction = "vertical";
          if (Math.random() > 0.5) {
            direction = "horizontal";
          }
          placed = gameState.computer.gameBoard.placeShip(
            getRandomInt(1, 10),
            getRandomInt(1, 10),
            ship,
            direction,
          );
        }
      }

      const winModal = document.createElement("dialog");

      const winner = document.createElement("h1");
      winner.id = "winner-header";

      const playAgainText = document.createElement("p");
      playAgainText.id = "play-text";
      playAgainText.innerHTML = "Play again?";

      const playAgainButton = document.createElement("button");
      playAgainButton.innerHTML = "Start Game";
      playAgainButton.addEventListener("click", restartGame);

      function restartGame() {
        startGame(name);
      }

      winModal.append(winner, playAgainText, playAgainButton);

      body.appendChild(winModal);

      winModal.close();

      function checkWin() {
        if (
          gameState.player.gameBoard.shipTiles > 0 &&
          gameState.computer.gameBoard.shipTiles > 0
        )
          return false;
        if (gameState.player.gameBoard.shipTiles > 0) {
          body.appendChild(winModal);
          winner.innerHTML = name + " wins!";
          winModal.show();
        } else {
          body.appendChild(winModal);
          winner.innerHTML = "Computer wins!";
          winModal.show();
        }
      }

      const delay = (delayInms) => {
        return new Promise((reslove) => setTimeout(reslove, delayInms));
      };

      async function handleComputerAttack() {
        computerGameGrid.classList.remove("currentBoard");
        selectionGameGrid.classList.add("currentBoard");
        gameText.innerHTML = "The computer attacks...";
        let [x, y] = [getRandomInt(0, 9), getRandomInt(0, 9)];
        while (gameState.player.gameBoard.isValidAttack(x, y) != true) {
          [x, y] = [getRandomInt(0, 9), getRandomInt(0, 9)];
        }
        await delay(2000);
        if (gameState.player.gameBoard.receiveAttack(x, y) === true) {
          gameText.innerHTML = "... and hits your ship";
          document.getElementById("" + x + y).classList.add("hit");
          await delay(700);
          handleComputerAttack();
        } else {
          gameText.innerHTML = "... and misses";
          document.getElementById("" + x + y).classList.add("miss");
          selectionGameGrid.classList.remove("currentBoard");
          await delay(700);
          gameText.innerHTML = "Its your attack now...";
          if (checkWin() == false) startAttacks();
        }
      }

      const computerGameGrid = renderBoard(gameState.computer.gameBoard, true);
      boardDiv.append(computerGameGrid);

      function startAttacks() {
        computerGameGrid.classList.add("currentBoard");
        const setPlayerAttack = handleAttack(
          gameState.computer.gameBoard,
          handleComputerAttack,
          checkWin,
          delay,
          gameText,
        );

        setPlayerAttack();
      }

      startAttacks();
    }
  }

  window.addEventListener("keypress", handleRotation);
  gameState.removeListeners = handleShipPlacement();
}
