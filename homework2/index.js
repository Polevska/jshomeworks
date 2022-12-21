let n;
let m;

do {
  n = +prompt("Could you please enter an integer number");
} while (!Number.isInteger(n) || n <= 0);

do {
  m = +prompt(
    "Could you please enter another bigger integer number than previous one"
  );
} while (!Number.isInteger(m) || m <= n);

const even = confirm("Do you want to skip even numbers?");

let sum = 0;

for (let i = n; i <= m; i++) {
  if (even && i % 2 === 0) {
    continue;
  }

  sum = sum + Number(i);
}

alert(`Result: ${sum}`);
