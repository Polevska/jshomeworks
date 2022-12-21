//---------------------- Function 1 --------------------------

//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та
//виводить найбільшу цифру в цьому числі.Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
  let result = 0;
  const digitArr = Array.from(String(number));
  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[i] > result) {
      result = digitArr[i];
    }
  }
  return result;
}

console.log("Task # 1: ", getMaxDigit(6574));

//------------------------ Function 2 ----------------------------

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" ->
//"Влад", "вЛАД" -> "Влад" і так далі);

function capitalizeName(name) {
  let newArray = [];
  const nameArr = Array.from(String(name));
  for (let i = 0; i < nameArr.length; i++) {
    if (i === 0) {
      newArray.push(nameArr[i].toUpperCase());
    } else {
      newArray.push(nameArr[i].toLowerCase());
    }
  }
  return newArray.join("");
}

console.log("Task # 3: ", capitalizeName("juLia"));

//------------------------ Function 3 ----------------------------

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
//Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(from, to) {
  const randomNumber = Math.floor(Math.random() * (to - from + 1) + from);
  return randomNumber;
}

console.log("Task # 5: ", getRandomNumber(15, 450));

//------------------------ Function 4 ----------------------------

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
//Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
  const wordArray = word.split("");
  let count = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log("Task # 6: ", countLetter("a", "Astalavista"));

//------------------------ Function 5 ----------------------------

//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a',
//"blablabla") -> "blblbl"

function deleteLetters(letter, word) {
  const wordArray = word.split("");
  const resultArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLowerCase() !== letter.toLowerCase()) {
      resultArray.push(wordArray[i]);
    }
  }
  return resultArray.join("");
}

console.log("Task # 11: ", deleteLetters("e", "Example"));

//------------------------ Function 6 ----------------------------

//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
//Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicteLetter(sentence) {
  const splitedSentence = sentence.split("");
  const resultSentence = [];
  for (let i = 0; i < splitedSentence.length; i++) {
    if (countLetter(splitedSentence[i], sentence) <= 1) {
      resultSentence.push(splitedSentence[i]);
    }
  }
  return resultSentence.join("");
}

console.log(
  "Task # 13: ",
  deleteDuplicteLetter("I like watching films and listening to music")
);
