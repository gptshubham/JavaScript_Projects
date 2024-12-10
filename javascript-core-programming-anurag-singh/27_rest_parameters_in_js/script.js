'use strict';

// rest Params

function add(...rest) {
  // rest is just a variable name, we can have variable any name for that matter
  // console.log(arguments); // arguments is not recommended
  console.log(rest);
  // console.log(typeof rest);
  let sum = 0;
  for (let el of rest) {
    sum += el;
  }
  return sum;
}

const num1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

const total = add(...num1);
console.log(total);

// using rest param in combination with other params

function addition(a, b, c, ...rest) {
  console.log(rest); // [13, 14, 15, 16, 17, 18, 19, 20]
  // console.log(arguments);
  console.log(a, b, c);
}

addition(...num1, 21, 22, 23, 24, 25);

addition(8, 9, 10, ...num1, 31, 32, 33);

addition(8, 9, 10);

addition(8, 9);

// Alternative 1 --> using rest param (Recommended and widely used)
function toAdd(...rest) {
  return rest.reduce((acc, curr) => acc + curr);
}
let output = toAdd(...num1);
console.log(output);

// Alternative 2 --> using [...arguments]
function toAdd() {
  return [...arguments].reduce((acc, curr) => acc + curr);
}
output = toAdd(...num1);
console.log(output);

// Alternative 3 --> using Array.from(arguments)
function toAdd() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}
output = toAdd(...num1);
console.log(output);
