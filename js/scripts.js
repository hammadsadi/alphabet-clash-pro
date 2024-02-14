// Continue The Game
function continuegame() {
  let alphabet = generateRandomAlphabet();
  let showAlphabet = (document.getElementById("showAlphabet").innerText =
    alphabet);
  heigLightKeyById(alphabet);
}

// Get Key Press Button
document.addEventListener("keyup", function () {
  console.log("key press");
});

// Game Start
function gameStart() {
  hideElementById("home");
  showElementById("play");
  continuegame();
}
