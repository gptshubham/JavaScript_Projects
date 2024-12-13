// Deep Copy vs Shallow Copy

// string
const userName1 = 'Shubham'
let userName2 = userName1
console.log(userName1)
console.log(userName2)

userName2 = userName2 + ' Gupta'
console.log(userName2)

// Array
const fruits = ['Mango', 'Apple', 'Orange']

const myFruits = fruits
myFruits.push('Dates')
myFruits.push('Grapes')

console.log(fruits)
console.log(myFruits)
console.log(fruits === myFruits)

// Object Literal
const user1 = {
  firstName: 'Shubham',
  lastName: 'Gupta',
}

const user2 = user1
user1.lastName = 'Mathur'

console.log(user1)
console.log(user2)
console.log(user1 === user2)

// NOTE: in case of array and object literal, both the variables refer to the same memory address, hence modification in one reflects on the other too.
// However, in case  of Strings even though initially both the variables refer to the same memory address, when we modify the second one, it simply creates a new string and assigns it, so now the second variable refers to the memory address of the newly created string.

// Shallow Copy

// How to Duplicate an Object , so that modifications in one do not reflect on the other

// Method 1 - Obsolete
const user3 = {}
Object.assign(user3, user1)
user3.lastName = 'Gupta'

console.log(user1)
console.log(user3)
console.log(user1 === user3)

// Method 2 - spread operator {...} ==> ES6 (most popular)

const user4 = { ...user1 }
user4.lastName = 'Gupta'
console.log(user1)
console.log(user4)
console.log(user1 === user4)

// How to Duplicate an array , so that modifications in one do not reflect on the other

// Method 1 : Object.assign() --> works but not recommended for arrays

// Method 2 : spread operator --> (Recommended)
const fruitsList = [...fruits]
fruitsList.push('Pine Apple')
fruitsList.push('Guava')
console.log(fruits)
console.log(fruitsList)
console.log(fruits === fruitsList)

// Method 3 : concat()

const fruitsList2 = [].concat(fruits)
fruitsList2.pop()
fruitsList2.shift()

console.log(fruits)
console.log(fruitsList2)
console.log(fruits === fruitsList2)

// Method 4 : slice()
const fruitsList3 = fruits.slice()
fruitsList3.push('Pine Apple')
fruitsList3.unshift('Guava')
console.log(fruits)
console.log(fruitsList3)
console.log(fruits === fruitsList3)

// Problem with Shallow Copy

user1.pata = {
  city: 'Zombie City',
  Zip: '420420',
  state: 'Euphoria',
}
console.log(user1)

const user5 = { ...user1 }
user5.lastName = 'Gupta'
console.log(user1)
console.log(user5)

user5.pata.city = 'Ghost City'

console.log(user1.pata)
console.log(user5.pata)

// Note: nested non-primitives still refer to the same memory address and hence change in one is reflected by the other.

// Deep Copy: using structuredClone()
const user6 = structuredClone(user1)

user6.pata.city = 'Zombie City'
console.log(user1.pata)
console.log(user6.pata)
