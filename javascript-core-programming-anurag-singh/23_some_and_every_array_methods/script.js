'use strict';

const evenNumbers = [0, 2, 4, 6, 8];
/*
// some()

// Technical Syntax of some()
// evenNumbers.some((num, index, arr) => console.log(num, index, arr));

console.log(evenNumbers.some((num) => console.log(num))); // false
// debugger;
console.log(evenNumbers.some((num) => num)); // true

console.log(evenNumbers.some(() => null)); // false

console.log(evenNumbers.some((num) => num >= 8)); // true

console.log(evenNumbers.some((num) => num > 10)); // false

const newArray = evenNumbers.some((num) => num + 1);
console.log(newArray); // true
// it has a boolean return value
*/

const evenNumbers1 = [0, 2, 3, 4, 6, 8];

/*
let result = evenNumbers1.some((num) => num % 2 === 1);
console.log(result); // true
// it simply means that there's at least one element in the entire array which is not even

// How can we find the index position of the odd element
let indexPosition = -Infinity;
result = evenNumbers1.some((num, index) =>
  num % 2 === 1 ? (indexPosition = index) : undefined
);
console.log(indexPosition);
console.log(result);
*/

// every()

/*
let output = evenNumbers.every((num) => num % 2 === 0);
console.log(output); // true

let indexPosition = -Infinity;
output = evenNumbers1.every((num, index) =>
  num % 2 === 1 ? (indexPosition = index) : true
);
console.log(output); // true
console.log(indexPosition); // 2
*/

// Program:

const examScores = [75, 80, 85, 90, 95];

// Use any method to check if all student passed the exam (scored 70 or higher).

const didEveryStudentPass = examScores.every((num) => num >= 70);

console.log(didEveryStudentPass);
