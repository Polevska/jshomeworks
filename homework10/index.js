const buttonsList = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (buttonsList.includes(e.key)) {
    playSound(e.key);
    displayLetter(e.key);
  }
}

function playSound(letter) {
  const audio = new Audio(`./wav/${letter}.wav`);
  audio.play();
  displayLetter(letter);
}

function displayLetter(letter) {
  const currentBtn = document.querySelector(`.${letter}-btn`);
  currentBtn?.focus();

  const currentLetter = document.querySelector(".current-letter");
  currentLetter.innerHTML = letter.toUpperCase();
}
