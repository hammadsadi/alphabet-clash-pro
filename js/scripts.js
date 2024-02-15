// Continue The Game
function continuegame() {
  let alphabet = generateRandomAlphabet();
  let showAlphabet = (document.getElementById("showAlphabet").innerText =
    alphabet);
  heigLightKeyById(alphabet);
}

// Game Over
function gameOver() {
  gameEnd();
  hideElementById("play");
  showElementById("score");
  // Remove Key Heigh Light
  let alphabet = getElementByIdForSelect("showAlphabet").innerText;
  removeColorById(alphabet);
  // Set Last Score
  let currentScore = getElementByIdForSelect("current-score").innerText;
  let lastScore = getElementByIdForSelect("last-score");
  lastScore.innerText = currentScore;
}

// Get Key Press Button
document.addEventListener("keyup", function (e) {
  let userPressedKey = e.key;
  // Skip The Game
  if (userPressedKey === "Escape") {
    gameOver();
  }
  let expextedKey = document.getElementById("showAlphabet").innerText;
  let targetKey = expextedKey.toLowerCase();

  // Match Key
  if (userPressedKey === targetKey) {
    gameWin();
    removeColorById(userPressedKey);
    let score = elementGetById("current-score");
    let updateScore = score + 1;
    setValueById("current-score", updateScore);
    continuegame();
  } else {
    gameFailed();
    let currentLife = elementGetById("curren-life");
    let updateLife = currentLife - 1;
    setValueById("curren-life", updateLife);

    // Game Over
    if (updateLife === 0) {
      gameOver();
    }
  }
});

// Game Start
function gameStart() {
  hideElementById("home");
  showElementById("play");
  continuegame();
  hideElementById("score");
  setValueById("current-score", 0);
  setValueById("curren-life", 5);
}
