class Student {
  points = [];

  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.points = marks;
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, м.Одеса, ${this.fullName}`;
  }

  getAverageMark() {
    return (
      this.points.reduce((accum, mark) => {
        return accum + mark;
      }, 0) / this.points.length
    );
  }

  dismiss() {
    this.points = null;
  }

  recover() {
    this.points = [];
  }

  get marks() {
    return this.points;
  }

  set marks(value) {
    if (this.points !== null) {
      this.points.push(value);
    }
  }
}

const user = new Student(
  "Вищої Школи Психотерапії",
  1,
  "Остап Родоманський Бендер",
  [5, 4, 4, 5]
);

console.log("getInfo: ", user.getInfo());
console.log("get marks: ", user.marks);
user.marks = 5;
console.log("set marks: ", user.marks);
console.log("getAverageMark: ", user.getAverageMark());
user.dismiss();
console.log("user.dismiss()");
console.log("get marks: ", user.marks);
user.marks = 6;
console.log("set marks: ", user.marks);
user.recover();
console.log("user.recover()");
user.marks = 4;
console.log("set marks: ", user.marks);

// ----------------------------------------Advanced-----------------------------------------------------------

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setTimeout(() => {
      this.getScholarship();
    }, 30000);
  }

  getScholarship() {
    if (this.points != null && this.getAverageMark() >= 4) {
      console.log("Ви отримали 1400 грн. стипендії");
    }
  }
}

const budgetUser = new BudgetStudent(
  "Вищої Школи Психотерапії",
  1,
  "Олег Степанович Жук",
  [3, 4, 4, 4]
);

console.log("Advanced");
console.log("get marks: ", budgetUser.marks);
budgetUser.getScholarship();
console.log("budgetUser.getScholarship()");
budgetUser.getInfo();
budgetUser.marks = 5;
console.log("set marks: ", budgetUser.marks);
budgetUser.dismiss();
