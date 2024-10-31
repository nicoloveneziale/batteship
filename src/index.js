import "./styles.css";
import { renderEntryPage, startButton } from "./entryPage.js";

import Player from "./Player";
import Ship from "./Ship.js";
import ComputerPlayer from "./ComputerPlayer.js";

renderEntryPage();
let name = "";

startButton.addEventListener("click", () => {
  name = document.querySelector("#name").value;
  document.querySelector("body").innerHTML = "";
});
