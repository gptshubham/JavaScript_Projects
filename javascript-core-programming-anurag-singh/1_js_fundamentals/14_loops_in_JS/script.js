'use strict';
/* while Loop */

/*
// Program: printing count from 1 to 100

console.log('Program Started')

// debugger

let count = 1
while (count <= 100) {
  console.log(count)
  count++
}
console.log('Program Ended')

// Program : Table of 2
console.log('Program Started')

// debugger

let counter = 2
while (counter <= 20) {
  console.log(counter)
  counter += 2
}
console.log('Program Ended')

// Iterating over an Array using while loop
console.log('Program Started')

let friends = ['Mohit', 'Saurabh', 'Rohit', 'Gaurabh', 'Sonu']

let i = 0
while (i < friends.length) {
  console.log(`${i + 1}. ${friends[i]}`)
  friends[i] += 'ProCoderr'
  i++
}

console.log(friends)
console.log('Program Ended')
*/

/* for loop */

/*
// Program: printing count from 1 to 10

console.log('Program Started')

// debugger

for (let i = 0; i < 10; i++) {
  console.log(i + 1)
}
console.log('Program Ended')

// Iterating over Array using for loop
let friendsList = ['Mohit', 'Saurabh', 'Rohit', 'Gaurabh', 'Sonu']
for (let i = 0; i < friendsList.length; i++) {
  console.log(`${i}. ${friendsList[i]}`)
}

// Even Numbers between 0 to 100
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i + 2)
  }
}
*/

/* Do While Loop in JS --> (Rarely Used) */

/*
console.log('Program Starts...')

// debugger

let i = 0
do {
  console.log(i + 1)
  i++
} while (i < 5)

console.log('Program Ended...')
// used when you must execute the loop at least once

// Note: for loop is mostly used
*/

// Write JavaScript code that calculates the sum of all the numbers from 1 to 1000 inclusive and prints the result.

/*
let sum = 0
for (let i = 0; i < 1000; i++) {
  sum += i + 1
}
console.log(sum)
*/

// Write JavaScript code that finds the maximum number in an array of numbers [5, 10, 2, 8, 15] and prints the result.

/*
let arr = [5, 10, 2, 8, 15]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
  }
}
console.log(max)
*/

// Write JavaScript code that takes a string "hello" as input and prints the string reversed ("olleh") using a for loop.

/*
let str = 'hello'
let reversedString = ''
for (let i = str.length - 1; i >= 0; i--) {
  reversedString += str[i]
}
console.log(reversedString)
*/

// Write JavaScript code that counts the number of vowels (a, e, i, o, u) in a string "javascript" and prints the result.

/*
let vowels = 'aeiou'

let js = 'javascript'

let count = 0

for (let i of js) {
  if (vowels.includes(i)) {
    count++
  }
}
console.log(count)
*/

// Write JavaScript code that prints the Fibonacci sequence up to the 10th term.

/*
let prev = 1
let secondPrev = 0

for (let i = 0; i < 10; i++) {
  let next = prev + secondPrev
  console.log(`${i + 1}. ${secondPrev}`)
  let temp = prev
  prev = next
  secondPrev = temp
}
*/

// Write JavaScript code that checks whether a given number is a prime number or not. Print "Prime" if it's a prime number, otherwise print "Not Prime".

/*
let num = 17
if (num < 2) {
  console.log(`Not Prime`)
} else if (num === 2) {
  console.log('Prime')
} else {
  let flag = true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`Not Prime`)
      flag = false
      break
    }
  }
  if (flag) {
    console.log(`Prime`)
  }
}
*/

// Write JavaScript code that generates a random password of length 8 consisting of uppercase letters, lowercase letters, and numbers. (Hint: You can use the Math.random() function to generate random numbers and convert them to characters.)

/*
// creating Alphabets object
let alphabets = {}
for (let i = 1; i <= 26; i++) {
  alphabets[i + 9] = String.fromCharCode(96 + i)
}
for (let i = 1; i <= 26; i++) {
  alphabets[35 + i] = String.fromCharCode(64 + i)
}
console.log(alphabets)
console.log(alphabets[10])

// generating password using for loop
let password = ''
for (let i = 0; i < 8; i++) {
  let randomNumber = Math.floor(Math.random() * 62)
  console.log(randomNumber)
  if (randomNumber < 10) {
    password += randomNumber.toString()
  } else {
    password += alphabets[randomNumber]
  }
}
console.log(password)
console.log(password.length)
*/

// Write JavaScript code that prints all the prime numbers between 1 and 100.

/*
for (let i = 2; i <= 100; i++) {
  if (i === 2) {
    console.log(i)
  } else {
    let flag = true
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false
        break
      }
    }
    if (flag) {
      console.log(i)
    }
  }
}
*/

// Write JavaScript code that calculates the factorial of a given number. (The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.)

/*
let n = 6
let factorial = 1
for (let i = 1; i <= n; i++) {
  factorial *= i
}
console.log(factorial)
*/

/* for of loop */

/*
const fruits = ['apple', 'banana', 'peach', 'mango', 'grapes', 'kiwi'];

for (let fruit of fruits) {
  console.log(fruit);
}

console.log('------');

for (const fruit of fruits) {
  console.log(fruit);
}
// const is creating a new variable at every iteration

console.log('------');

const user = 'Shubham';
for (let letter of user) {
  console.log(letter);
}
*/

/* for in loop - used to iterate over Objects (performance heavy) */

/*
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  gender: 'Male',
  eyeColor: 'Red',
  city: 'Zombie Land',
};

for (let key in person) {
  console.log(key, '-', person[key]);
}

console.log('--------------------');

// How to iterate over objects using for of loop (Better Performance)

const personKeys = Object.keys(person);
console.log(personKeys);

// debugger;
for (let key of personKeys) {
  console.log(person[key]);
}

const personValues = Object.values(person);
console.log(personValues);

const personEntries = Object.entries(person);
console.log(personEntries);

console.log(personEntries[0][1]);
console.log(personEntries[1][1]);
*/

// Program: You are working on a JavaScript program where you have an object representing student information. The object student contains various properties such as name, age, and grade.Your task is to write a JavaScript code snippet using the for...in loop to iterate over each property of the student object and concatenate the property names into a string separated by commas.

/*
const student = {
  name: 'John Doe',
  age: 20,
  grade: 'A',
};

let properties = '';

for (let property in student) {
  properties += property + ',';
}

console.log(properties);
*/

// Program: Write a program to print all the keys and values of the below object.

/*
const student = {
  name: 'John Doe',
  age: 20,
  grade: 'A',
};

// i. Using for...of loop along with Object.entries()
const studentEntries = Object.entries(student);

for (let entry of studentEntries) {
  console.log(entry[0], ':', entry[1]);
}

// ii. Using for...in loop

for (let key in student) {
  console.log(key, ':', student[key]);
}
*/

// foreach Array Method

const fruits = ['apple', 'banana', 'peach', 'mango', 'grapes', 'kiwi'];

// anonymous function as an argument
fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log('-----');

// array function as an argument --> (most common)
fruits.forEach((fruit) => console.log(fruit));

console.log('-----');

// named function as an argument --> (not so common)
function logIt(el) {
  console.log(el);
}

fruits.forEach(logIt);

// Program: Using the forEach loop, write a JavaScript code snippet to calculate the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5];

let sum = 0
numbers.forEach(number => sum += number)
console.log(sum);

// Program: Given an array of strings, use the forEach method to count the number of times each string appears and store the result in an object.

const fruits1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = {};

// Your code here
// fruits1.forEach(function(fruit) {
//   if(fruit in fruitCount) {
//     fruitCount[fruit] += 1
//   } 
//   else {
//     fruitCount[fruit] = 1
//   }
// })

// ternary operator
fruits1.forEach(function (fruit) {
  fruit in fruitCount ? fruitCount[fruit] += 1 : fruitCount[fruit] = 1
})
console.log(fruitCount);

// Expected Output: { apple: 3, banana: 2, orange: 1 }

// Given an array of strings, use the forEach method to find the sum of the lengths of all strings in the array.

const fruits2 = ['apple', 'banana', 'cherry'];

let totalLength = 0;

// Your code here
fruits2.forEach(fruit => totalLength += fruit.length)

console.log(totalLength);

//Expected Output: 17