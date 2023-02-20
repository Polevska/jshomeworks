import "./index.css";
import "./planets.css";

export async function fetchInfo(url = "") {
  const response = await fetch(url);
  return await response.json();
}

export async function fetchCharacters(characterUrls) {
  const characterResponses = characterUrls.map(async (url) => {
    return await (await fetch(url)).json();
  });

  return await Promise.all(characterResponses);
}

export function renderLoader() {
  return `<div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>`;
}

export function renderHeader() {
  return `<div class="header header-photo">Photo</div>
          <div class="header">Name</div>
          <div class="header">Birth Year</div>
          <div class="header">Gender</div>`;
}

export function renderCharacter(character) {
  const randomNumber = Math.floor(Math.random() * (16 - 1 + 1) + 1);

  return `<div class="character">
            <img class="character-photo" src="./img/${randomNumber}.png" alt="Character photo">
          </div>
          <div class="character">${character.name}</div>
          <div class="character">${character.birth_year}</div>
          <div class="character">${character.gender}</div>`;
}

export function renderCharacters(characters) {
  return characters
    .map((character, index) => {
      return renderCharacter(character, index + 1);
    })
    .join("");
}

export async function handleGetEpisodeInfo() {
  const episodeNum = +document.querySelector(".episode-input").value;

  if (!isNaN(episodeNum) && episodeNum > 0 && episodeNum <= 6) {
    document.querySelector(".loader").style.display = "block";

    const episod = await fetchInfo(`https://swapi.dev/api/films/${episodeNum}`);
    const characters = await fetchCharacters(episod.characters);

    document.querySelector(".loader").style.display = "none";

    const header = renderHeader();
    const rows = renderCharacters(characters);

    const characterTable = document.querySelector(".character-table");
    characterTable.innerHTML = [header, rows].join("");
  }
}

export function handleNextButton() {
  const episodeNumber = +document.querySelector(".episode-input").value;

  if (!isNaN(episodeNumber) && episodeNumber > 0 && episodeNumber <= 6) {
    window.location.href = `${window.location.href}planets.html?episode=${episodeNumber}`;
  }
}
