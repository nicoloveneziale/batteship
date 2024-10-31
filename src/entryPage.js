import battleshipsImage from "./images/battleships.jpeg";

function renderEntryPage() {
  const body = document.querySelector("body");

  const mainDiv = document.createElement("div");
  mainDiv.id = "entry-div";

  const headingImage = document.createElement("img");
  headingImage.id = "entry-image";
  headingImage.src = battleshipsImage;

  const nameEntryForm = document.createElement("form");
  nameEntryForm.id = "name-form";

  const nameLabel = document.createElement("label");
  nameLabel.for = "name";

  const input = document.createElement("input");
  input.id = "name";
  input.name = "name";
  input.placeholder = "Seargent John Doe";

  nameEntryForm.append(nameLabel, input, startButton);

  const footer = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.innerHTML = "Created by Nicolo Veneziale";

  footer.append(footerText);

  mainDiv.append(headingImage, nameEntryForm, footer);
  body.appendChild(mainDiv);
}

const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.innerHTML = "START";
startButton.type = "button";

export { renderEntryPage, startButton };
