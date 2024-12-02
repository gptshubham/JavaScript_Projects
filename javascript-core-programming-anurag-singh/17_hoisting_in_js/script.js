debugger
/* Hoisting of Variables */
console.log(a)
// console.log(b) // ReferenceError:
// console.log(c) // ReferenceError:
// Note: since b and c are declared using const and let, hence they are in the Temporal Dead Zone and can not be accessed before initialization

var a = 'Shubham'
const b = 'Gupta'
let c = 'Kumar'

console.log(a)
console.log(b)
console.log(c)

/* Hoisting of Normal Function */
add()

// Function Definition: Function Declaration
function add() {
  console.log(2 + 3)
}

add()

/* Hoisting of Anonymous Function - variable name declared using const/let */

addition() // ReferenceError: Cannot access 'addition' before initialization

// Function Definition: Function Expression
const addition = function () {
  console.log(6 + 4)
}

addition()

/* Hoisting of Anonymous Function - variable name declared using var */

added() // TypeError: added is not a function

// Function Definition: Function Expression
var added = function () {
  console.log(12 + 8)
}

added()
