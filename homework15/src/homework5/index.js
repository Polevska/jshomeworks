// #1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив
// випадкових цілих чисел. У функції є параметри: length - довжина масиву, min –
// мінімальне значення цілого числа, max – максимальне значення цілого числа.

export function getRandomArray(length, min, max) {
  const result = [...Array(length)].map(() => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  });

  return result;
}

const a = getRandomArray(15, 1, 50);
console.log("Task #1: ", a);

//#3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх
//переданих в неї аргументів.

export function getAverage(...numbers) {
  return (
    numbers.reduce((accum, item, index, arr) => {
      if (Number(item) === item && item % 1 === 0) {
        return accum + item;
      }
      return accum;
    }, 0) / numbers.length
  );
}

const b = getAverage(54, 23, 9, 110, 654, 7, 32, 89, 4, 1);
console.log("Task #3: ", b);

//#4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї
//аргументів.

export function getMedian(...numbers) {
  const middleIndex = Math.floor(numbers.length / 2);
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  return numbers.length % 2 !== 0
    ? sortedNumbers[middleIndex]
    : (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
}

const c = getMedian(3, 8, 12, 45, 63, 6, 98, 105, 4);
console.log("Task #4: ", c);

// #5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані
// як аргументи функції.

export function filterEvenNumbers(...numbers) {
  return numbers.filter((item) => {
    if (item % 2 === 0) {
      return false;
    } else {
      return true;
    }
  });
}

const d = filterEvenNumbers(5, 4, 1, 2, 55, 5, 4, 8, 4, 5, 7, 5);
console.log("Task #5: ", d);

//#6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел
//більших

export function countPositiveNumbers(...numbers) {
  return numbers.filter((item) => {
    return item >= 0;
  }).length;
}

const e = countPositiveNumbers(65, 0, 2, -5, 4, 986, -46, -92, 76, -8);
console.log("Task #6: ", e);

//#7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в
//масиві та залишить тільки ті, які діляться на ціло на 5 Приклад:

export function getDividedByFive(...numbers) {
  return numbers.filter((item) => {
    return item % 5 === 0;
  });
}

const f = getDividedByFive(1, 5, 125, 76, 84, -5, 225, 90, 8, 16, 49, 75);
console.log("Task #7: ", f);
