// Higher Order Function and Callback Function

function a(b) {
  console.dir(b)
  b()
}

function sayHi() {
  console.log('Hiiiiii.....')
}

// Function as an Argument to a Higher Order Function --> Callback Function
a(sayHi) // a is a higher order function

// Anonymous Function as an argument to a Higher Order Function --> Callback Function
a(function () {
  console.log('BBBBByyyyyyyyyyeeeeeeeeeee.....')
})

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
