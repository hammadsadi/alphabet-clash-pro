// Hide Element By Id
function hideElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("hidden");
}
// Show element By Id
function showElementById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// Generate Random Alphabet
function generateRandomAlphabet() {
  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = alphabetString.split("");

  // Random Alphabet
  let index = Math.round(Math.random() * 25);
  return alphabetArray[index];
}

// Heigh Light Key By id
function heigLightKeyById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}

// Remove Key Color By ID
function removeColorById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

// Get Element By Id
function elementGetById(elementId) {
  let element = document.getElementById(elementId);
  let elementValue = parseInt(element.innerText);
  return elementValue;
}

// Set Value By Id
function setValueById(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

//  Get Element By Id
function getElementByIdForSelect(elementId) {
  let element = document.getElementById(elementId);
  return element;
}

// Game Win
function gameWin() {
  let winGam = new Audio("/sound/win.mp3");
  winGam.play();
}

// Game Win
function gameFailed() {
  let failedGam = new Audio("/sound/failed.mp3");
  failedGam.play();
}

// Game End
function gameEnd() {
  let endGam = new Audio("/sound/end.mp3");
  endGam.play();
}
