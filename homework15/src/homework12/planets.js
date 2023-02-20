export async function fetchInfo(url = "") {
  const response = await fetch(url);
  return await response.json();
}

export async function fetchPlanets(planetUrls) {
  const planetResponses = planetUrls.map(async (url) => {
    return await (await fetch(url)).json();
  });

  return await Promise.all(planetResponses);
}

export function renderPlanets(planets) {
  return planets
    .map((planet, index) => {
      return `<div class="planet">${planet.name}</div>`;
    })
    .join("");
}

export async function handlePageLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const episodeNumber = urlParams.get("episode");

  const episodeInfo = await fetchInfo(
    `https://swapi.dev/api/films/${episodeNumber}`
  );
  const planets = await fetchPlanets(episodeInfo.planets);

  const rows = renderPlanets(planets);

  const planetsTable = document.querySelector(".planets-table");
  planetsTable.innerHTML = rows;
}
