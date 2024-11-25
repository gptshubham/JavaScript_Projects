// Decision Making in JavaScript

// In this session, we have covered
// --> if-else statements,
// --> else-if statements,
// --> nested if-else statements and
// --> ternary operator

// 0 < age < 5 ==> Kid
// 5 <= age <= 17 ==> School Student
// 18 <= age <= 24 ==> College Student
// 24 < age < 60 ==> Working Professional
// 60 <= age ==> retired

// If Statement
/*
const username = prompt('Please Enter Your Name: ') || 'ProCoderr'
const userAge = parseInt(prompt('Please Enter Your Age: ')) || 22
const userGender = prompt('Please Enter Your Gender: ') || 'Male'

// printing user's name and age
console.log(`Name: ${username}`)
console.log(`Age: ${userAge}`)

// Condition 0 : Kid
if (userAge > 0 && userAge <= 4) {
  console.log(`${username} is a Kid`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he is playing.`)
  }
  if (userGender.trim().toLocaleLowerCase() == 'female') {
    console.log(`And she is playing.`)
  }
}

// Condition 1 : School Student
if (5 <= userAge && userAge <= 17) {
  console.log(`${username} is a school student.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he loves mathematics.`)
  }
  if (userGender.trim().toLocaleLowerCase() == 'female') {
    console.log(`And she loves mathematics.`)
  }
}

// Condition 2 : College Student
if (18 <= userAge && userAge <= 24) {
  console.log(`${username} is a college student.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he is learning computer science.`)
  }
  if (userGender.trim().toLocaleLowerCase() == 'female') {
    console.log(`And she is learning computer science.`)
  }
}

// Condition 3
if (25 <= userAge && userAge < 60) {
  console.log(`${username} is a working professional.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And she is a web developer.`)
  }
  if (userGender.trim().toLocaleLowerCase() == 'female') {
    console.log(`And she is a web developer.`)
  }
}

// Condition 4
if (60 <= userAge) {
  console.log(`${username} is retired.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he reads newspaper.`)
  }
  if (userGender.trim().toLocaleLowerCase() == 'female') {
    console.log(`And she reads newspaper.`)
  }
}

console.log('Program Ended...!!!')
*/

// If-Else , Else-if & Nested If-else Statements
/*
const username = prompt('Please Enter Your Name: ') || 'ProCoderr'
const userAge = parseInt(prompt('Please Enter Your Age: ')) || 22
const userGender = prompt('Please Enter Your Gender: ') || 'Male'
// However, it is not recommended to assign default values in the given case
// Instead, we can use if statement to handle the absence of input from user

console.log(`Name : ${username}`)
console.log(`Age : ${userAge}`)

// Condition 0 : User is a kid
if (userAge > 0 && userAge <= 4) {
  console.log(`${username} is a Kid`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he is playing.`)
  } else {
    console.log(`And she is playing.`)
  }
} else if (5 <= userAge && userAge <= 17) {
  // Condition 1 : User is a School Student
  console.log(`${username} is a school student.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he loves mathematics.`)
  } else {
    console.log(`And she loves mathematics.`)
  }
} else if (18 <= userAge && userAge <= 24) {
  // Condition 2 : User is a College Student
  console.log(`${username} is a college student.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he is learning computer science.`)
  } else {
    console.log(`And she is learning computer science.`)
  }
} else if (25 <= userAge && userAge < 60) {
  // Condition 3 : User is a Working Professional
  console.log(`${username} is a working professional.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And she is a web developer.`)
  } else {
    console.log(`And she is a web developer.`)
  }
} else if (60 <= userAge && userAge <= 120) {
  // Condition 4 : User is Retired
  console.log(`${username} is retired.`)
  if (userGender.trim().toLocaleLowerCase() == 'male') {
    console.log(`And he reads newspaper.`)
  } else {
    console.log(`And she reads newspaper.`)
  }
} else {
  // Condition 5 : Invalid Age
  console.log(`Invalid age! Please enter a valid age [Between 1 and 120].`)
}

console.log(`Program Ended...!!!`)
*/

// finding largest between three numbers.
/*
const a = 5
const b = 6
const c = 8

if (a >= b && a >= c) {
  console.log(a)
} else if (b >= c) {
  console.log(b)
} else {
  console.log(c)
}
*/

// Ternary Operator --> very popular, widely used

// // syntax
// const result = true ? 'Shubham' : 'ProCoderr'
// console.log(result)
// const result1 = false ? 'Shubham' : 'ProCoderr'
// console.log(result1)

// Example : typing user message based on his/her gender.
/*
const gender = 'F'
const userMessage = `${
  gender.toLocaleLowerCase() === 'f' ? 'She' : 'He'
} is a college student.`
console.log(userMessage)

// nested ternary operator
const result = 0 ? 'Shubham' : '' ? 12 : 0
console.log(result)
*/

// Program : largest of the three numbers
/*
const a = 5
const b = 6
const c = 8
const largest = a >= b && a >= c ? a : b >= c ? b : c
console.log(largest)
*/
