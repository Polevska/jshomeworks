export function* createIdGenerator(prevNumber = 0) {
  const currentNumber = prevNumber + 1;
  yield currentNumber;

  yield* createIdGenerator(currentNumber);
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

console.log(
  "--------------------------- Advanced ------------------------------------"
);

export function* newFontGenerator(font) {
  let currentFont = font;
  while (true) {
    let value = yield currentFont;
    if (value === "up") {
      currentFont += 2;
    }
    if (value === "down") {
      currentFont -= 2;
    }
  }
}

const fontGenerator = newFontGenerator(14);

console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
