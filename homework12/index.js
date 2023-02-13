async function fetchInfo(url = "") {
  const response = await fetch(url);
  return await response.json();
}

async function fetchCharacters(characterUrls) {
  const characterResponses = characterUrls.map(async (url) => {
    return await (await fetch(url)).json();
  });

  return await Promise.all(characterResponses);
}

function renderHeader() {
  return `<div class="header header-photo">Photo</div>
          <div class="header">Name</div>
          <div class="header">Birth Year</div>
          <div class="header">Gender</div>`;
}

function renderCharacter(character) {
  const randomNumber = Math.floor(Math.random() * (16 - 1 + 1) + 1);

  return `<div class="character">
            <img class="character-photo" src="./img/${randomNumber}.png" alt="Character photo">
          </div>
          <div class="character">${character.name}</div>
          <div class="character">${character.birth_year}</div>
          <div class="character">${character.gender}</div>`;
}

function renderCharacters(characters) {
  return characters
    .map((character, index) => {
      return renderCharacter(character, index + 1);
    })
    .join("");
}

async function handleGetEpisodeInfo() {
  const episodeNumber = +document.querySelector(".episode-input").value;

  if (!isNaN(episodeNumber) && episodeNumber > 0 && episodeNumber <= 6) {
    const episodeInfo = await fetchInfo(
      `https://swapi.dev/api/films/${episodeNumber}`
    );
    const characters = await fetchCharacters(episodeInfo.characters);

    const header = renderHeader();
    const rows = renderCharacters(characters);

    const characterTable = document.querySelector(".character-table");
    characterTable.innerHTML = [header, rows].join("");
  }
}

function handleNextButton() {
  const episodeNumber = +document.querySelector(".episode-input").value;

  if (!isNaN(episodeNumber) && episodeNumber > 0 && episodeNumber <= 6) {
    window.location.href = `${window.location.href}/planets.html?episode=${episodeNumber}`;
  }
}
