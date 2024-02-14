// Dinamically Get Element By Id
function getDinamicallyById(elementId) {
  let targetElement = document.getElementById(elementId);
  return targetElement;
}

// Game Start
function gameStart() {
  let hiddenHomeScreen = getDinamicallyById("home");
  let getPlayScreen = getDinamicallyById("play");
  hiddenHomeScreen.classList.add("hidden");
  getPlayScreen.classList.remove("hidden");
}
