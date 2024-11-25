// Program: Output which day it is based on the number 0 - 6

// using if-else and else-if statements
/*
const dayNumber = 3

if (dayNumber === 0) {
  console.log('It is Sunday Today')
} else if (dayNumber === 1) {
  console.log('It is Monday Today')
} else if (dayNumber === 2) {
  console.log('It is Tuesday Today')
} else if (dayNumber === 3) {
  console.log('It is Wednesday Today')
} else if (dayNumber === 4) {
  console.log('It is Thursday Today')
} else if (dayNumber === 5) {
  console.log('It is Friday Today')
} else if (dayNumber === 6) {
  console.log('It is Saturday Today')
} else {
  console.log('Please Enter a Valid Number!')
}
*/

// using Switch Statement
/*
const dayNumber = 3

switch (dayNumber) {
  case 0:
    console.log('It is Sunday Today')
    break
  case 1:
    console.log('It is Monday Today')
    break
  case 2:
    console.log('It is Tuesday Today')
    break
  case 3:
    console.log('It is Wednesday Today')
    break
  case 4:
    console.log('It is Thursday Today')
    break
  case 5:
    console.log('It is Friday Today')
    break
  case 6:
    console.log('It is Saturday Today')
    break
  default:
    console.log('Please Enter a Valid Number!')
}
console.log('Program Ended...!!!')
*/

// Program:
// User Example from one of the earlier lectures where user is considered
//  either a kid, a school student, a college student, a working professional,
//  or retired based on his age
/*
const username = 'Shubham'
const userAge = 5
const userGender = 'Male'

console.log(`Name : ${username}`)
console.log(`Age : ${userAge}`)

switch (true) {
  case 0 < userAge && userAge <= 4:
    console.log(`${username} is a Kid`)
    break
  case 5 <= userAge && userAge <= 17:
    console.log(`${username} is a school student.`)
    break
  case 18 <= userAge && userAge <= 24:
    console.log(`${username} is a college student.`)
    break
  case 25 <= userAge && userAge < 60:
    console.log(`${username} is a working professional.`)
    break
  case 60 <= userAge && userAge <= 120:
    console.log(`${username} is retired.`)
    break
  default:
    console.log(`Invalid age! Please enter a valid age [Between 1 and 120].`)
}

console.log('Program Ended...!!!')
*/

// Program: Score based on Grade
/*
const grade = 'S'

switch (grade) {
  case 'S':
    console.log('Your score is between 90% to 100%. You got a toppers badge.')
    break
  case 'A':
    console.log('Your score is between 80% to 90%')
    break
  case 'B':
    console.log('Your score is between 70% to 80%')
    break
  case 'C':
    console.log('Your score is between 60% to 70%')
    break
  case 'D':
    console.log('Your score is between 50% to 60%')
    break
  case 'E':
    console.log('Your score is between 40% to 50%')
    break
  case 'U':
    console.log('Your score is bellow 40%. You Failed')
    break
  case 'I':
    console.log('You were absent')
    break
  default:
    console.log('Please Enter a Valid Grade!')
}

console.log('Program Ended...!!!')
*/
