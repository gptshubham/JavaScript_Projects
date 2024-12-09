'use strict';

// arguments keyword

// Named Function
function add(a, b) {
  console.log(arguments);
  return a + b;
}
add(2, 3);
// Arguments(2) [2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
add(2, 3, 4, 5, 6, 7, 8, 9);
// Arguments(8) [2, 3, 4, 5, 6, 7, 8, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Note: arguments keeps track of all the arguments passed, irrespective of number of parameters defined or numbers of arguments used.

// Anonymous Function
const addition = function (x, y) {
  console.log(arguments);
  return x + y;
};

addition(4, 6);
// Arguments(2) [4, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Arrow Function

// const toDdd = (a, b) => console.log(arguments);

// toDdd();
// // ReferenceError: arguments is not defined
// arguments keyword is not available for arrow functions

//

// Program: define a function that can accept infinite number of arguments and returns their sum

function sum() {
  let total = 0;
  for (let el of arguments) {
    total += el;
  }
  return total;
}

const result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
// Note: arguments also has length property also, we can use it to do the some using normal for loop, if specified in the problem statement.

// alternatively, we can do the same using rest operator
function sumWithRest(...rest) {
  let total = 0;
  for (let el of rest) {
    total += el;
  }
  return total;
}

const output = sumWithRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(output);

// rest operator also works with arrow function
const toSum = (...rest) => {
  let total = 0;
  for (let el of rest) {
    total += el;
  }
  return total;
};

const totalValue = toSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(totalValue);
