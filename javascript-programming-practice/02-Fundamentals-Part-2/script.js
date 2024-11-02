"use strict";
// activating Strict Mode

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)

// const private = 111;
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:11:7)

// const if = 'skg';
// Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)

// Note: These errors won't be caught without strict mode
*/

// Fucntions
/*
// Example 1: calc Function
function calC(arg1, arg2, operation) {
  let result;
  if (operation === "+") {
    result = arg1 + arg2;
  } else if (operation === "-") {
    result = arg1 - arg2;
  } else if (operation === "*") {
    result = arg1 * arg2;
  } else if (operation === "/") {
    result = arg1 / arg2;
  } else if (operation === "**") {
    result = arg1 ** arg2;
  } else if (operation === "%") {
    result = arg1 % arg2; 
  } else {
    result = "Unsupported Operation!";
  }
  return result;
}

const sum = calC(10, 20, "+");
console.log(sum);
const diff = calC(20, 10, "-");
console.log(diff);
const prod = calC(10, 20, "*");
console.log(prod);
const div = calC(20, 10, "/");
console.log(div);
const pow = calC(10, 2, "**");
console.log(pow);
const rem = calC(20, 8, '%')
console.log(rem)
*/

// Funciton Declaration vs Function Expression
/*
// Funciton Declaration --> Normal Function
const sum2 = addition(20, 30);
console.log(sum2);
// a major difference between function declaration and function expression is that we can call function declaration before they are defined in the code, even though that may not be a good idea, but it's possible. Can't do the same with function expressions

function addition(arg1, arg2) {
  return arg1 + arg2;
}

const sum1 = addition(10, 20);
console.log(sum1);

// Function Expression --> Anonymous Function

// const diff2 = difference(20, 10);
// console.log(diff2);
// Uncaught ReferenceError: Cannot access 'difference' before initialization at script.js:74:15

const difference = function (arg1, arg2) {
  return arg1 - arg2;
};

const diff1 = difference(20, 10);
console.log(diff1);
*/

// Arrow Funciton
/*
// Example 1: diff function
const diff = (arg1, arg2) => arg1 - arg2;
const diff2 = diff(20, 10);
console.log(diff2);

// Example 2: Years left till retirement
const timeLeftTillRetirement = (bYear, cYear) => {
  const age = cYear - bYear;
  const retirement = 60;
  const timeBeforeRetirement = retirement - age;
  return timeBeforeRetirement;
};

const birthYear = 2002;
const curYear = 2024;
console.log(timeLeftTillRetirement(2002, 2024));
*/

// Function calling other Funciton
/*
const sum = (num1, num2) => num1 + num2;
const diff = (num1, num2) => num1 - num2;
const prod = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const rem = (num1, num2) => num1 % num2;
const pow = (num1, num2) => num1 ** num2;

function calC(arg1, arg2, op) {
  let result;
  if (op === "+") {
    result = sum(arg1, arg2);
  } else if (op === "-") {
    result = diff(arg1, arg2);
  } else if (op === "*") {
    result = prod(arg1, arg2);
  } else if (op === "/") {
    result = div(arg1, arg2);
  } else if (op === "%") {
    result = rem(arg1, arg2);
  } else if (op === "**") {
    result = pow(arg1, arg2);
  } else {
    result = 0;
  }
  return result;
}

const total = calC(10, 20, "+");
console.log(total);
*/

// Reviewing Fucnton

// Arrow Fucntion
/*
const calcAge = (birthYear, currentYear) => currentYear - birthYear;
// Anonymous Fucntion
const yearsLeftTillRetirement = function (bYear, cYear) {
  // Fucntion Calling Another Function
  const age = calcAge(bYear, cYear);
  const retirement = 60;
  const timeBeforeRetirement = retirement - age;
  // Ternary Operator
  const result =
    timeBeforeRetirement > 0
      ? timeBeforeRetirement
      : "You have already retired!";
  return result;
};

const birthYear = 2002;
const curYear = 2024;
// Fucntion Calling Another Function
console.log(yearsLeftTillRetirement(2002, 2024));
console.log(yearsLeftTillRetirement(1960, 2024));
*/

/* Arrays */
/*
// The Literal Syntax - More usual way
const canProgram = ["Python", "JavaScript", "Rust", "C++"];
console.log(canProgram);

// using Array Funciton - An Alternate of the Literal Syntax
let years = new Array(2001, 2008, 2020, 2024);
console.log(years);
// Note: used let to explain the reassignment of arrays (it is recommended to use const to declare array, in that case reassignment won't be possible)

// Data Type of Arrays in JavaScript
console.log(typeof canProgram, typeof years);
// Remember: Everything in JavaScript except Primitives are Objects

// Accessing Values of Array : Indexing
console.log(canProgram[0]);
console.log(canProgram[-1]); // Negative Indexing does not work
console.log(years[2]);
console.log(years[10]); // Index out of Range --> undefined

// length of Array
console.log(canProgram.length, years.length);

// Accessing Elements Backwards using length property
// last element
console.log(years[years.length - 1]);
// second last element
console.log(years[years.length - 2]);

// Mutability and Arrays
years[0] = 1947;
console.log(years);

// Reassignment vs. Mutability
// canProgram = ["Python", "JavaScript", "Rust", "C++"];
// console.log(canProgram);  // TypeError: Assignment to constant variable.
years = [1947, 2014];
console.log(years);
// Note: in case of Mutability we are changing the values of array, adding new values and removing the existing ones. Whereas, in case of reassignment we are reassigning a new array to an existing array's variable name (subject to let or const used when the original array was declared.)

// Array can contain Heterogeneous Values
const firstName = "Shubham";
const lastName = "Gupta";
const shubham = [
  firstName,
  "Kumar",
  lastName,
  2024 - 2002,
  "Web Developer",
  canProgram,
];
console.log(shubham);
console.log(shubham.length);

// Exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

years = [1990, 1947, 2002, 2008, 2020, 2024];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ageArray = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ageArray);
*/

// Note: Array in JavaScript does not support scalar operatoions

// Basic Array Methods
/*
// Adding Elements to the array
// push --> adds elements to the end of the array
const programingLanguages = ["Python", "JavaScript", "Rust"];

console.log(programingLanguages);
console.log(programingLanguages.push("Java"));
// we can store the output of the above line in a separate variable and use it as the line outputs the new lenght of the array
// const newLenghth = programingLanguages.push("Rust");
console.log(programingLanguages);

// shift --> adds elements at the beginning of the array
let newLength = programingLanguages.unshift("C++");
console.log(newLength);
console.log(programingLanguages);

// Removing Elements of the array
// pop --> removes the element fromt the last
const popped = programingLanguages.pop();
console.log(popped);
console.log(programingLanguages);
// shift --> removes element form the front
const shifted = programingLanguages.shift();
console.log(shifted);
console.log(programingLanguages);

// finding index position of a particular element in the array : indexof
let indexPosition = programingLanguages.indexOf("Rust");
console.log(indexPosition);

// checking if an element is present in the array : includes --> (checks Strict Equality)
let isPresent = programingLanguages.includes("JavaScript");
console.log(isPresent);
isPresent = programingLanguages.includes("Java");
console.log(isPresent);
programingLanguages.push("20");
console.log(programingLanguages.includes(20));

if (programingLanguages.includes("JavaScript")) {
  console.log(`You can program in JavaScript.`);
}
*/
