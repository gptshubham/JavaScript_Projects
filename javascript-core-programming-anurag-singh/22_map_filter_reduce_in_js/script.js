'use strict';
// map()
const months = ['January', 'February', 'March', 'April', 'May'];

let output = months.map((month) => console.log(month));
console.log(output);

// elements of months in uppercase
let monthUpperCase = months.map((month) => {
  console.log(month);
  return month.toUpperCase();
});

console.log(monthUpperCase);

// elements of monthUpperCase in lowercase
let monthLowerCase = monthUpperCase.map((month) => month.toLowerCase());

console.log(monthLowerCase);

// Accessing index of array through callback function using a second parameter
const monthsUpper = months.map((month, index, array) => {
  console.log(`${index + 1}. ${month}`);
  // console.log(array);
  return month.toUpperCase();
});

console.log(monthsUpper);

// filter()
let filteredMonths = months.filter((month, index, array) => {
  console.log(index + 1, month);
  return month.toUpperCase();
});

console.log(filteredMonths);
// ['Jan', 'Feb', 'Mar', 'Apr', 'May']

console.log(filteredMonths === months);

// when returning a falsy value, filter returns nothing
filteredMonths = months.filter((month, index, array) => {
  console.log(index + 1, month);
  return 0;
});

console.log(filteredMonths);

// filter filters elements based on a specified condition

// filtering months with name length of 5 or less letters
filteredMonths = months.filter((month, index, array) => {
  console.log(index + 1, month);
  return month.length <= 5;
});

console.log(filteredMonths);

// filtering months with name length of 5 or more letters
filteredMonths = months.filter((month, index, array) => {
  console.log(index + 1, month);
  return month.length >= 5;
});

console.log(filteredMonths);

// filter out months that has letter m/M in it's name
filteredMonths = months.filter(
  (month) => (month.toLowerCase().includes('m') ? month : undefined)
  // ternary operator to filter out months that have m/M in it's name
);

console.log(filteredMonths);

// filter out months with index value of 3 or more
filteredMonths = months.filter(
  (month, index) => (index >= 3 ? month : undefined)
  // ternary operator to filter out months that have index >= 5
);

console.log(filteredMonths);

// map and filter method chaining
const students = [
  {
    name: 'Shubham',
    age: 20,
  },
  {
    name: 'Saurabh',
    age: 17,
  },
  {
    name: 'Abhi',
    age: 22,
  },
  {
    name: 'Mohit',
    age: 16,
  },
  {
    name: 'Jacob',
    age: 18,
  },
];

let filteredStudents = students
  .filter((student) => (student.age >= 18 ? student : undefined))
  .map((student) => student.name)
  .filter((student) => (student.includes('A') ? student : undefined));

console.log(filteredStudents);
// Note: we filtered out objects which has age property >= 18,
// then we mapped the resulting array of objects to output student names
// then we filtered out students whose name starts with 'A'

// Program: Given an array of numbers, create a new array that contains the squares of each number.

/*
const numbers = [1, 2, 3, 4, 5];

// Your code here
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers);
// Expected Output: [1, 4, 9, 16, 25]
*/

// Given an array of numbers, filter out the even numbers and return a new array with only odd numbers.

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code here
const filteredNumbers = numbers.filter((number) =>
  number % 2 === 1 ? number : undefined
);
console.log(filteredNumbers);
// Expected Output: [1, 3, 5, 7, 9]
*/

// Given an array of numbers, find the product of all the elements in the array.

/*
const numbers = [1, 2, 3, 4, 5];

// Your code here
const productOfNumbers = numbers.reduce((accumulator, number) => {
  return accumulator * number;
});
console.log(productOfNumbers);
// Expected Output: 120
*/

// Given an array of numbers, create a new array that contains the squares of only the odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code here
const newNumbers = numbers
  .filter((number) => (number % 2 === 1 ? number : undefined))
  .map((number) => number ** 2);
console.log(newNumbers);
// Expected Output: [1, 9, 25, 49, 81]

// Given an array of strings, count the number of times each string appears and return an object with the string as the key and the count as the value.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Your code here
const fruitsCount = {};
fruits.map((fruit) => {
  if (fruit in fruitsCount) {
    fruitsCount[fruit] += 1;
  } else {
    fruitsCount[fruit] = 1;
  }
});
console.log(fruitsCount);
// Expected Output: { apple: 3, banana: 2, orange: 1 }

// Given an array of objects representing products with a price property, calculate the total cost of all products after applying a 10% discount.

const products = [
  { name: 'Product 1', price: 100 },

  { name: 'Product 2', price: 200 },

  { name: 'Product 3', price: 300 },
];

// Your code here
const totalCost = products
  .map(({ price }) => (price *= 0.9))
  .reduce((accumulator, price) => accumulator + price);
console.log(totalCost);
//Expected Output: 540

// Given three arrays, names, ages, and cities, write a program to combine them into one array of objects where each object contains a name, age, and city property.

const names = ['Alice', 'Bob', 'Charlie'];

const ages = [25, 30, 35];

const cities = ['New York', 'Los Angeles', 'Chicago'];

// Your code here

// Expected Output: [
const combinedArrayOfObjects = names.map((name, index) => {
  return {
    name: name,
    age: ages[index],
    city: cities[index],
  };
});
console.log(combinedArrayOfObjects);
// { name: 'Alice', age: 25, city: 'New York' },

// { name: 'Bob', age: 30, city: 'Los Angeles' },

// { name: 'Charlie', age: 35, city: 'Chicago' }

// ]

// Zombie Apocalypse - Special Questions
