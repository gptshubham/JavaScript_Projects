'use strict';
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

/* Arrays - used for more ordered data */
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

// unshift --> adds elements at the beginning of the array

let newLength = programingLanguages.unshift("C++");
console.log(newLength);
console.log(programingLanguages);

// Removing Elements of the array

// pop --> removes the element fromt the last

const popped = programingLanguages.pop();
console.log(popped);
console.log(programingLanguages);

// shift --> removes element form the beginning

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

/* Objects -- used for more unstructured data */
/*
const shubhamArray = [
  'Shubham',
  'Gupta',
  2024 - 2002,
  'Programmer',
  ['Pytho', 'JavaScript', 'Rust'],
];

// Object Literal Syntax
const shubhamObject = {
  firstName: 'Shubham',
  lastName: 'Gupta',
  age: 2024 - 2002,
  job: 'Programmer',
  programmingLanguages: ['Python', 'JavaScript', 'Rust'],
};

// Dot vs Bracket Notation

console.log(shubhamObject);

console.log(shubhamObject.lastName);

console.log(shubhamObject['lastName']);

const nameKey = "Name";

console.log(shubhamObject['first' + nameKey]);  // more common
console.log(shubhamObject['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Shubham? Choose between firstName, lastName, age, job, and programmingLanguages");

console.log(shubhamObject.interestedIn);  // undefined
console.log(shubhamObject[interestedIn]); 

if (shubhamObject[interestedIn]) {
  console.log(shubhamObject[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job, and programmingLanguages");
};

// Adding New Properties

// using Dot Notation

shubhamObject.location = 'Bengaluru';
console.log(shubhamObject);
console.log();

// using brackets

shubhamObject['salary'] = 50000;
console.log(shubhamObject);
console.log();

// Exercise: "Shubham knows 3 programmign languages, and he has best command over Python"
console.log(
  `${shubhamObject.firstName} knows ${shubhamObject.programmingLanguages.length} programming languages, and he has best command over ${shubhamObject.programmingLanguages[0]}.`
);
*/

/* Object Methods */

const shubhamObject = {
  firstName: 'Shubham',
  lastName: 'Gupta',
  birthYear: 2002,
  job: 'Programmer',
  programmingLanguages: ['Python', 'JavaScript', 'Rust'],
  hasDriversLicense: true,
  // function as key-value pair
  // Method 1:
  // calcAge: function(birthYear) {
  //   return 2024 - birthYear;
  // }
  // Method 2:
  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // },
  // Method 3: (Preferred)
  calcAge: function () {
    // creating a key-value pair out of function output - Method 3 (Preferred)
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

// // accessing fucntion property of object

// // calling fucntion from object and assinging the value as key-value pair back to the object itselt - Method 1
// shubhamObject['age'] = shubhamObject.calcAge();
// console.log(shubhamObject.age);

// // calling function form the object and assigning the value as key-value pair back to the object itself - Method 2
// shubhamObject.age2 = shubhamObject['calcAge']();
// console.log(shubhamObject.age2);

// // Method 3
// console.log(shubhamObject.calcAge());
// console.log(shubhamObject.age);

// // Exercise: getSummary function within shubhamObject
// shubhamObject.getSummary();
// console.log(shubhamObject.summary);

// Loops - for loops

// // for loop keeps running while the condition is TRUE
// for (let rep = 5; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}.`);
// }

// Looping through Arrays

const shubham = [
  'Shubham',
  'Gupta',
  2024 - 2002,
  'Programmer',
  ['Pytho', 'JavaScript', 'Rust'],
];

// for in loop
for (let item in shubham) {
  console.log(item, ' : ', shubham[item]);
}

// for of loop
for (let item of shubham) {
  console.log(item);
}

// Nested Loop

// nested for in loop
let types = [];
for (let i in shubham) {
  types[i] = typeof shubham[i];
  if (typeof shubham[i] === 'object') {
    for (let j in shubham[i]) {
      console.log(shubham[i][j]);
    }
  }
}
console.log();
console.log(types);
console.log();

// nested for of loop
types = [];
for (let i of shubham) {
  types.push(typeof i);
  if (typeof i === 'object') {
    for (let j of i) {
      console.log(j);
    }
  }
}
console.log();
console.log(types);
console.log();

// Example: calculate ages for all the birth years

const years = [1991, 2008, 1947, 2020];

const currentYear = 2024;

let ages = [];

for (let year of years) {
  ages.push(currentYear - year);
}
console.log(ages);

// continue
console.log('---ONLY STRING---');
for (let i in shubham) {
  if (typeof shubham[i] != 'string') {
    continue;
  } else {
    console.log(shubham[i]);
  }
}

// break
console.log('---BREAK WITH NUMBER---');
for (let i in shubham) {
  if (typeof shubham[i] === 'number') {
    break;
  } else {
    console.log(shubham[i]);
  }
}
