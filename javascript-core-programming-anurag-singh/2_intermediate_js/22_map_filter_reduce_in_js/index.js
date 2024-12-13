'use strict';
console.log(filteredStudents);
// since we have linked index.js below script.js , we can access script.js's variables from index.js
// it won't be the case if we link index.js above script.js, in that case we will be able to access index.js's variables from script.js

// reduce()

// Program: sum total of all elements of array
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accumulator, current, index) => {
  // console.log(index, current);
  // console.log(accumulator, current);
  // debugger;
  return accumulator + current;
});

console.log(sum);

const prod = nums.reduce((accumulator, current, index) => {
  // console.log(index, current);
  // console.log(accumulator, current);
  // debugger;
  return accumulator * current;
});

console.log(prod);
