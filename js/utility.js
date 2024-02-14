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
  let alphabetString = "abcdefghjklmnopqrstuvwxyz";
  let alphabetArray = alphabetString.split("");

  // Random Alphabet
  let index = Math.round(Math.random() * 26);
  return alphabetArray[index];
}

// Heigh Light Key By id
function heigLightKeyById(elementId) {
  let element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}
