// Continue The Game
function continuegame() {
  let alphabet = generateRandomAlphabet();
  let showAlphabet = (document.getElementById("showAlphabet").innerText =
    alphabet);
  heigLightKeyById(alphabet);
}

// Get Key Press Button
document.addEventListener("keyup", function (e) {
  let userPressedKey = e.key;
  let expextedKey = document.getElementById("showAlphabet").innerText;
  let targetKey = expextedKey.toLowerCase();

  // Match Key
  if (userPressedKey === targetKey) {
    removeColorById(userPressedKey);
    let score = elementGetById("current-score");
    let updateScore = score + 1;
    setValueById("current-score", updateScore);
    continuegame();
  } else {
    let currentLife = elementGetById("curren-life");
    let updateLife = currentLife - 1;
    setValueById("curren-life", updateLife);
  }
});

// Game Start
function gameStart() {
  hideElementById("home");
  showElementById("play");
  continuegame();
}
