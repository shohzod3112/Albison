// LOOP

// while

// let x = 10;

// while (x > 0) {
//   console.log(`bu while ${x}`);
//   x--;
// }

// for
// for (let i = 1; i < 10; i = i++) {
//   console.log(`bu for ${i}`);
// }

// do while
// let b = 15;

// do {
//   console.log(b);
//   b--;
// } while (false);

function nimadir(x = 100) {
  for (let i = 1; i <= x; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

// nimadir();

function masala1(k, n) {
  for (let i = 0; i < n; i++) {
    console.log(k);
  }
}

// masala1(3, 4);
// masala1(31, 41);

function sum(a, b) {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(2, 6));
