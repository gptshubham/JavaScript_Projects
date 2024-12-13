// Higher Order Function and Callback Function
/*
function a(b) {
  console.dir(b);
  b();
}

function sayHi() {
  console.log('Hiiiiii.....');
}

// Function as an Argument to a Higher Order Function --> Callback Function
a(sayHi); // a is a higher order function

// Anonymous Function as an argument to a Higher Order Function --> Callback Function
a(function () {
  console.log('BBBBByyyyyyyyyyeeeeeeeeeee.....');
});
*/

/*
const x = sayHi

sayHi()
x()

a(x)

x.age = 76
*/

// console.log(a)
// console.log(typeof a)

// function is an object - Proof
// console.dir(a)
// console.dir('Shubham')
// console.dir(15)
// a.age = 87

// Returning Functions with Closures
/*
function outer() {
  const a = 4;
  function parent() {
    const b = 6;
    return function () {
      console.log(a + b);
    };
  }
  return parent();
}

// console.dir(add);
// ReferenceError: add is not defined

const add1 = outer();

console.dir(add1);
*/
// Programming Exercise 1

/*
function outerFunction() {
  let outerVar = 10;

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

let closureFunc = outerFunction();
// let closureFunc = innerFunction
closureFunc();
// innerFunction() // 10
*/

// Programming Exercise 2
/*
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}
debugger;
let counter1 = createCounter();

let counter2 = createCounter();

console.log(counter1());

console.log(counter2());
*/

// Programming Exercise 3
/*
let message = 'Global';
debugger;
function outerFunction() {
  let message = 'Outer';

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

let closureFunc = outerFunction();
// let closureFunc = innerFunction;
closureFunc();
// innerFunction()
*/

// Programming Exercise 4
/*
let num = 5;

function outerFunc() {
  let num = 10;

  setTimeout(function () {
    console.log(num);
  }, 1000);
}

outerFunc();
*/

// Programming Exercise 5
let a = 1;

function outerFunc() {
  let b = 2;

  function innerFunc() {
    let c = 3;

    console.log(a + b + c);
  }

  return innerFunc;
}

let closureFunc = outerFunc();

closureFunc();
