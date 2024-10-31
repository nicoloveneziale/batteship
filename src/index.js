import "./styles.css";
import { renderEntryPage, startButton } from "./entryPage.js";
import renderBoard from "./renderBoard.js";

import Player from "./Player";
import Ship from "./Ship.js";
import ComputerPlayer from "./ComputerPlayer.js";

const body = document.querySelector("body");
renderEntryPage();
let name = "";

startButton.addEventListener("click", () => {
  name = document.querySelector("#name").value;
  const player = new Player(name);
  const computer = new ComputerPlayer();
  body.innerHTML = "";
  const selectionGameGrid = renderBoard(player.gameBoard);
  const placeText = document.createElement("p");
  placeText.innerHTML = "Place your ships " + name + "!";
  placeText.id = "place-text";
  body.append(placeText, selectionGameGrid);
  body.classList.add("flex");
});
