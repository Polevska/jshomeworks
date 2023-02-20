const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// ---------------------- Function 1 ------------------------------------

export function getSubjects(student) {
  const subjects = Object.keys(student.subjects);
  return subjects.map((item) => {
    const subjectName = item.toLowerCase().replace("_", " ");
    return subjectName[0].toUpperCase() + subjectName.slice(1);
  });
}

const subs = getSubjects(students[0]);
console.log("Function #1 :", subs);

// ---------------------- Function 2 ------------------------------------

export function getAverageMark(student) {
  const marks = Object.values(student.subjects).flat();

  const sum = marks.reduce((accum, item) => {
    return accum + item;
  }, 0);
  return Number((sum / marks.length).toFixed(2));
}

const avg = getAverageMark(students[0]);
console.log("Function #2 :", avg);

// ---------------------- Function 3 ------------------------------------

export function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    average: getAverageMark(student),
  };
}

const info = getStudentInfo(students[0]);
console.log("Function #3 :", info);

// ---------------------- Function 4 ------------------------------------

export function getStudentsNames(students) {
  return students
    .map((item) => {
      return item.name;
    })
    .sort();
}

const name = getStudentsNames(students);
console.log("Function #4 :", name);

// ---------------------- Function 5 ------------------------------------

export function getBestStudent(students) {
  return students
    .map((item) => {
      return {
        name: item.name,
        average: getAverageMark(item),
      };
    })
    .sort((a, b) => {
      return a.average - b.average;
    })
    .pop().name;
}

console.log("Function #5 :", getBestStudent(students));

// ---------------------- Function 6 ------------------------------------

export function calculateWordLetters(word) {
  return word.split("").reduce((accum, letter, index, arr) => {
    const obj = { ...accum };
    obj[letter] = arr.filter((item) => {
      if (item === letter) {
        return true;
      }
      return false;
    }).length;
    return obj;
  }, {});
}

console.log("Function #6 :", calculateWordLetters("test"));
