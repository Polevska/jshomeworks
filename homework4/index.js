const students = ["Андрій", "Анна", "Роман", "Оксана", "Володимир", "Олена"];
const themes = [
  "Утворення козацької держави",
  "Створення та діяльність УПА",
  "Видатні дослідники історії України",
];
const marks = [5, 4, 4, 5, 4, 3];

function getPairs(people) {
  const girls = people.filter((student, index) => {
    return student.endsWith("на");
  });

  const boys = people.filter((student, index) => {
    return !student.endsWith("на");
  });

  let pairs = [];
  for (let i = 0; i < people.length / 2; i++) {
    pairs.push([girls[i], boys[i]]);
  }
  return pairs;
}

const p = getPairs(students);
console.log("Pairs: ", p);

// --------------------------------------------------------------------------------------------------------------

function getPairsPlusThemes(pairs, topics) {
  return pairs.map((item, i) => {
    return [`${item[0]} i ${item[1]}`, topics[i]];
  });
}

const t = getPairsPlusThemes(p, themes);
console.log("Pairs, themes: ", t);

// -------------------------------------------------------------------------------------------------------------

function getStudentPlusMark(names, points) {
  return names.map((item, i) => {
    return [item, points[i]];
  });
}

const f = getStudentPlusMark(students, marks);
console.log("Names, marks: ", f);

// -------------------------------------------------------------------------------------------------------------

function getPairsWithMarks(pairs, points) {
  return pairs.map((item, i) => {
    const randomIndex = Math.floor(Math.random() * (5 - 0 + 1) + 0);
    return [...item, points[randomIndex]];
  });
}

const b = getPairsWithMarks(t, marks);
console.log("Pairs, themes, marks: ", b);
