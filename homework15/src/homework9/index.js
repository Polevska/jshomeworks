import "./index.css";

export function generateBlocks(count) {
  return [...Array(count)].map(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const tag = document.createElement("div");
    tag.className = "item";
    tag.style.backgroundColor = "#" + randomColor;
    return tag;
  });
}

export function generateBlocksInterval() {
  const container = document.querySelector(".container");
  container.replaceChildren(...generateBlocks(25));
}

generateBlocksInterval();

setInterval(() => {
  generateBlocksInterval();
}, 1000);
