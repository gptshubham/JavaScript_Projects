/*
console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)
// Note: and there goes the DRY Principle
*/

// Function Definition
function introduceMe(
  name = 'ProCoderr',
  country = 'USA',
  profession = 'Software Engineer'
) {
  console.log(`Hello!`);
  console.log(`I'm ${name} from ${country}.`);
  console.log(`I'm a ${profession}.`);
  console.log('***************************');
}

// Function Call
introduceMe('Shubham', 'India', 'Web Developer');
introduceMe('Donald Trump', 'USA', 'President');
introduceMe('Virat Kohli', 'India', 'Cricketer');

const returnValue = introduceMe();
console.log(returnValue);

// return keyword in JS

// Program: function that adds two numbers

function addTwoNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}
let total = addTwoNumbers(10, 15);
console.log(total);
console.log(addTwoNumbers());

total = addTwoNumbers(16 + 4, 12 + 18);
console.log(total);

total = addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12));
console.log(total);

// Functions vs Methods

// Methods --> function defined within an object
const maths = {
  e: Math.E,
  add: function (a, b) {
    return a + b;
  },
  square: function (n) {
    return n * n;
  },
  // latest way of defining a method in js
  subtract(a, b) {
    return a - b;
  },
  cube(n) {
    return n ** 3;
  },
};

let result = maths.add(2, 3);
console.log(result);

result = maths.square(5);
console.log(result);

result = maths.subtract(2, 4);
console.log(result);

result = maths.cube(2);
console.log(result);

// Arrow Functions

// // Function Declaration
// function square(num) {
//   return num * num;
// }

// // Function Expression - Anonymous Function
// const square = function(num) {
//   return num * num
// }

// Arrow Function Expression

// const square = (num) => {
//   return num * num;
// };

// const square = (num) => num * num; // Implicit Return
const square = (num) => {
  return num * num; // Explicit Return
};
// we don't even need to use () in case of single argument, however Prettier doesn't allow that to maintain uniformity throughout the code
console.log(square(4));

// Commonly used as callback function --> A combination of anonymous and arrow functions
const delayedSquare = setTimeout(() => console.log('Hi!'), 2000);

// Program: Generating a random number between 1 and 10
const random = () => Math.floor(Math.random() * 10 + 1);
console.log(random());
