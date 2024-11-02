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
  const gameState = {
    direction: "horizontal",
    currentShip: new Ship(4),
    player: new Player(name),
    computer: new ComputerPlayer(),
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

      gameState.removeListeners();

      gameState.removeListeners = handleShipPlacement();
    }
  }

  function handleShipPlacement() {
    return placeShip(
      gameState.player,
      gameState.currentShip,
      gameState.direction,
    );
  }

  gameState.removeListeners = handleShipPlacement();

  window.addEventListener("keypress", handleRotation);
});
