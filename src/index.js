import "./styles.css";
import { renderEntryPage, startButton } from "./entryPage.js";
import renderBoard from "./renderBoard.js";
import placeShip from "./placeShip.js";
import Player from "./Player";
import Ship from "./Ship.js";
import ComputerPlayer from "./ComputerPlayer.js";

const body = document.querySelector("body");
renderEntryPage();
let name = "";

startButton.addEventListener("click", () => {
  name = document.querySelector("#name").value;
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
  const selectionGameGrid = renderBoard(gameState.player.gameBoard);
  const placeText = document.createElement("p");
  placeText.innerHTML = `Place your ships ${name}!`;
  placeText.id = "place-text";

  body.append(placeText, selectionGameGrid);
  body.classList.add("flex");

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
    }
  }

  window.addEventListener("keypress", handleRotation);
  gameState.removeListeners = handleShipPlacement();
});
