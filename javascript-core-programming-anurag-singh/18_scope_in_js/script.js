debugger

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
  const x = 15
  const y = 18
  console.log(x + y)
  console.log(username)
}

console.log(username)
add()
addition()
console.log(x) // ReferenceError: x is not defined
console.log(y) // ReferenceError: y is not defined

console.log('Program Ended...')
