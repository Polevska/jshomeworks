const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// ---------------------- Function 1 ------------------------------------

export function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log("getMyTaxes :", getMyTaxes.call(ukraine, 2000));
console.log("************************************************************");

// ---------------------- Function 2 ------------------------------------

export function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

console.log("getMiddleTaxes - Ukraine :", getMiddleTaxes.call(ukraine));
console.log("getMiddleTaxes - Latvia :", getMiddleTaxes.call(latvia));
console.log("getMiddleTaxes - Litva :", getMiddleTaxes.call(litva));
console.log("************************************************************");

// ---------------------- Function 3 ------------------------------------

export function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log("getTotalTaxes - Ukraine :", getTotalTaxes.call(ukraine));
console.log("getTotalTaxes - Latvia :", getTotalTaxes.call(latvia));
console.log("getTotalTaxes - Litva :", getTotalTaxes.call(litva));
console.log("************************************************************");

// ---------------------- Function 4 ------------------------------------

export function getMySalary(country) {
  const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
  const taxes = salary * country.tax;
  return {
    salary,
    taxes,
    profit: salary - taxes,
  };
}

setInterval(() => {
  console.log("getMySalary :", getMySalary(ukraine));
}, 10000);
