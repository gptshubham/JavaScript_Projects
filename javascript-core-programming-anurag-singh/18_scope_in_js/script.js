'use strict'
// debugger

// Global vs Local vs Lexical Scope

const username = 'Shubham'
let userAge = 22
var a = 50

function add() {
  const username = 'SKG'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function addition() {
  debugger
  const x = 15
  const y = 18
  const z = 95
  console.log(x + y)
  console.log(username)

  function added() {
    const sum = 2 + 3
    // block scope
    {
      const num1 = 78
      console.log(num1)
      var num2 = 98
      console.log(num2)
      // num3 = 120 // window scope (global) --> if not using strict mode.
      // ReferenceError: num3 is not defined --> if using strict mode
    }
    // console.log(num1) // ReferenceError: num1 is not defined
    console.log(num2)

    console.log(sum)
    console.log(z)
    console.log(username)
    console.log(a)
    console.log(x)
    console.log(y)

    function toAdd() {
      const total = 32 + 18
      console.log(total)
      console.log(sum)
      console.log(x)
      console.log(z)
      console.log(username)
    }

    toAdd()
  }

  added()
  // toAdd() // ReferenceError: toAdd is not defined
  // console.log(num2) // ReferenceError: num2 is not defined
}

console.log(username)
// add()
addition()
// console.log(x) // ReferenceError: x is not defined
// console.log(y) // ReferenceError: y is not defined
// console.log(num3) // window scope (global) --> if not using strict mode.
// ReferenceError: num3 is not defined --> if using strict mode
console.log('Program Ended...')
