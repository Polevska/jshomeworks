const buttonsList = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(e) {
  if (buttonsList.includes(e.key)) {
    playSound(e.key);

    const currentBtn = document.querySelector(`.${e.key}-btn`);
    currentBtn?.focus();

    const currentLetter = document.querySelector(".current-letter");
    currentLetter.innerHTML = e.key.toUpperCase();
  }
}

function playSound(letter) {
  const audio = new Audio(`./wav/${letter}.wav`);
  audio.play();
}
