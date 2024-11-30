/*
console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)

console.log(`Hello!`)
console.log(`I'm Shubham from India.`)
console.log(`I'm a Web Developer.`)
// Note: and there goes the DRY Principle
*/

// Function Definition
function introduceMe(
  name = 'ProCoderr',
  country = 'USA',
  profession = 'Software Engineer'
) {
  console.log(`Hello!`)
  console.log(`I'm ${name} from ${country}.`)
  console.log(`I'm a ${profession}.`)
  console.log('***************************')
}

// Function Call
introduceMe('Shubham', 'India', 'Web Developer')
introduceMe('Donald Trump', 'USA', 'President')
introduceMe('Virat Kohli', 'India', 'Cricketer')

const returnValue = introduceMe()
console.log(returnValue)

// return keyword in JS

// Program: function that adds two numbers

function addTwoNumbers(num1 = 0, num2 = 0) {
  return num1 + num2
}
let total = addTwoNumbers(10, 15)
console.log(total)
console.log(addTwoNumbers())

total = addTwoNumbers(16 + 4, 12 + 18)
console.log(total)

total = addTwoNumbers(addTwoNumbers(4, 6), addTwoNumbers(8, 12))
console.log(total)
