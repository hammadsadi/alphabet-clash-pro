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
