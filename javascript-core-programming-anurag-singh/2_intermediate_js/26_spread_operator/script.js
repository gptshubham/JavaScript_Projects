'use strict';

const nums1 = [1, 2, 3, 4];
const nums2 = [5, 6, 7, 8];

// combining arrays

// using spread operator --> Preferred
const combinedNums = [...nums1, ...nums2, 9, 10, 11, 12];
console.log(combinedNums);

// alternatively using concat() array method
const concatenatedNums = nums1.concat(nums2, 9, 10, 11, 12);
console.log(concatenatedNums);

// spread operator with strings
const myName = 'Shubham';
const combinedArray = [...nums1, ...nums2, ...myName];
console.log(combinedArray);

// spread operator with objects
const user = {
  name: 'Shubham',
  age: 50,
};

const userUpdated = { ...user, city: 'Zombie Land' };
console.log(userUpdated);

// spread operator with function call

// Issue when function call is made with array as an arg without spread operator
function add() {
  console.log(arguments);
  let sum = 0;
  for (let el of arguments) {
    sum += el;
  }
  console.log(typeof sum);
  return sum;
}

let result = add(nums1);
console.log(result);

// Now lets resolve this bug using spread operator with the function call
function addition() {
  console.log(arguments);
  let sum = 0;
  for (let el of arguments) {
    sum += el;
  }
  console.log(typeof sum);
  return sum;
}

result = addition(...nums1);
console.log(result);
