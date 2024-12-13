// Empty Object
const emptyObject = {}

// Creating Object
const user1 = {
  firstName: 'Shubham',
}
console.log(user1)

// Accessing value from object using . (Dot Notation)
console.log(user1.firstName)

// Accessing value from object using [] (Bracket Notation)
console.log(user1['firstName'])

// Adding Key-Value Pair to an object using . (Dot Notation)
user1.lastName = 'Gupta'
console.log(user1)

user1.age = 22
console.log(user1)

// Adding Key-Value Pair to an object using [] (Bracket Notation)
user1['city'] = 'Bengaluru'
console.log(user1)

// Updating Value in an Object using . (Dot Notation)
user1.firstName = 'Abhi'
console.log(user1)

// Updating Value in an Object using [] (Bracket Notation)
user1['firstName'] = 'Shubham'
console.log(user1)

const user2 = {
  firstName: 'Shubham',
  lastName: 'Gupta',
  age: 22,
  city: 'Bengaluru',
}
console.log(user1)

console.log(user1 === user2)
// same objects have different memory addresses (confirmed with chrome dev tools memory tab)
// basically, when we compare two objects, we don't really compare their values, instead, we compare their addresses and hence they evaluate to false when equated.
// since same primitives with different variable names have same addresses (confirmed with chrome dev tools memory tab), they evaluate to true when equated
username1 = ''
username2 = ''
console.log(username1 === username2)

// Bracket Notation is more powerful than dot notation
const user3 = {
  firstName: 'Shubham',
  'last-name': 'Gupta',
  Shubham: 'Developer',
}

const myJob = 'Shubham'

console.log(user3.firstName)
console.log(user3.last - name) // NaN
console.log(user3['last-name']) // Gupta
console.log(user3.Shubham)
console.log(user3.myName) // undefined
console.log(user3[myJob]) // Developer

console.log(user3['fist']) // undefined
console.log(user3['first' + 'Name']) // Shubham

// Nested Object
const user4 = {
  firstName: 'Shubham',
  'last-name': 'Gupta',
  Shubham: 'Developer',
  address: {
    houseNumber: 9211,
    street: 'freakish street',
    city: 'Ghost Town',
    zipCode: 420420,
    state: 'Euphoria',
  },
}

console.log(user4)
console.log(user4.address)
console.log(user4.address.city)
console.log(user4['address']['state'])

// Deleting property of an object
delete user4.Shubham
console.log(delete user4.Shubham)
console.log(user4)

// Object.seal() --> you can not add or delete a property, but you can change an existing property
const user5 = {
  firstName: 'Shubham',
  lastName: 'Gupta',
  pata: {
    houseNumber: 9211,
    street: 'Freakish Street',
    city: 'Zombie Town',
    zipCode: 420420,
    state: 'Euphoria',
    moreDetails: {
      population: 12131415,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

Object.seal(user5)

console.log(user5)
delete user5.pata
console.log(delete user5.pata)
user5.firstName = 'Abhi'
console.log(user5)
user5.middleName = 'Kumar'
console.log(user5)

// Object.freeze() --> even more powerful than Object.seal()
// absolutely no changes are allowed .
const user6 = {
  firstName: 'Shubham',
  lastName: 'Gupta',
  pata: {
    houseNumber: 9211,
    street: 'Freakish Street',
    city: 'Zombie Town',
    zipCode: 420420,
    state: 'Euphoria',
    moreDetails: {
      population: 12131415,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

Object.freeze(user6)

delete user6.firstName
console.log(user6)

user6.firstName = 'Abhi'
console.log(user6)

user6.middleName = 'Kumar'
console.log(user6)

// in keyword --> used to check whether a particular key exists in an object or not
console.log('firstName' in user1)
console.log('middleName' in user1)
