import a from "./wav/a.wav";
import s from "./wav/s.wav";
import d from "./wav/d.wav";
import f from "./wav/f.wav";
import g from "./wav/g.wav";
import h from "./wav/h.wav";
import j from "./wav/j.wav";
import k from "./wav/k.wav";
import l from "./wav/l.wav";
import "./index.css";

const buttonsList = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
document.addEventListener("keydown", handleKeyDown);

const getFileByName = (name) => {
  switch (name) {
    case "a":
      return a;
    case "s":
      return s;
    case "d":
      return d;
    case "f":
      return f;
    case "g":
      return g;
    case "h":
      return h;
    case "j":
      return j;
    case "k":
      return k;
    case "l":
      return l;
    default:
  }
};

export function handleKeyDown(e) {
  if (buttonsList.includes(e.key)) {
    playSound(e.key);
    displayLetter(e.key);
  }
}

export const playSound = (letter) => {
  const audio = new Audio(getFileByName(letter));
  audio.play();
  displayLetter(letter);
};

export function displayLetter(letter) {
  const currentBtn = document.querySelector(`.${letter}-btn`);
  currentBtn?.focus();

  const currentLetter = document.querySelector(".current-letter");
  currentLetter.innerHTML = letter.toUpperCase();
}
