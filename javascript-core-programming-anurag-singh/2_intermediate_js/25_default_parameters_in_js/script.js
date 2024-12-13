'use strict';

function product(a = 1, b = 1) {
  return a * b;
}

let result = product();
console.log(result);

result = product(10);
console.log(result);

result = product(7, undefined);
console.log(result);

result = product(7, null);
console.log(result);

result = product(10, 20);
console.log(result);

result = product(7, '');
console.log(result);

result = product('skg', 2);
console.log(result); // NaN ==> JS is not Python!

// Program: Die Roll

function rollADie(numberOfSides = 6) {
  return Math.floor(Math.random() * numberOfSides + 1);
}

let roll = rollADie(9);
console.log(roll);

roll = rollADie();
console.log(roll);

// what if we are not supposed to use default parameter
function dieRoll(numberOfSides) {
  // a ternary operator to handle cases when no argument is passed
  !numberOfSides ? (numberOfSides = 6) : undefined;
  // getting the random roll and returning it
  return Math.floor(Math.random() * numberOfSides + 1);
}

roll = dieRoll();
console.log(roll);
