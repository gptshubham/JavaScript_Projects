// Creating an Array

// Empty Array
const emptyArray = []
console.log(emptyArray)

// fruitsCollection Array
const fruitsCollection = ['Apple', 'Banana', 'Guava', 'Grapes', 'Orange']

console.log(fruitsCollection)

// Type of Array in JavaScript
console.log(typeof fruitsCollection)

// Accessing Elements of Array
console.log(fruitsCollection[0])
console.log(fruitsCollection[3])
// Accessing last element of an array
console.log(fruitsCollection[fruitsCollection.length - 1])

// Updating Values of an Array
fruitsCollection[3] = 'Mango'
console.log(fruitsCollection)

// fruitsCollection = []
// Uncaught TypeError: Assignment to constant variable.

// Adding element at the end of the array
fruitsCollection[fruitsCollection.length] = 'Pine Apple'
console.log(fruitsCollection)

// Alternative of the above code : Adding element at the end of the array
fruitsCollection.push('Kiwi')
console.log(fruitsCollection)

// Adding Element in an index that is out of range of Array's Index
fruitsCollection[20] = 'Dates'
console.log(fruitsCollection)
//  ['Apple', 'Banana', 'Guava', 'Mango', 'Orange', 'Pine Apple', empty × 14, 'Dates']

// Heterogenous Data Types of Elements of an Array
fruitsCollection[6] = 108
console.log(fruitsCollection)

fruitsCollection[7] = true
console.log(fruitsCollection)

fruitsCollection[8] = null
console.log(fruitsCollection)

fruitsCollection[9] = undefined
console.log(fruitsCollection)

/* Array inside Array --> 2D Array */
vegCollection = ['Potato', 'Carrot']
fruitsCollection[10] = vegCollection
console.log(fruitsCollection)

console.log(fruitsCollection[10][0])

// value contained in empty * 8 elements
console.log(fruitsCollection[15]) // undefined

/* object inside array */
fruitsCollection[11] = {
  king: 'Mango',
  myFavorite: 'Orange',
}
console.log(fruitsCollection)
// accessing values of an object contained in an array using . notation
console.log(fruitsCollection[11].king)
console.log(fruitsCollection[11].myFavorite)

// accessing values of an object contained in an array using [] notation
console.log(fruitsCollection[11]['king'])
console.log(fruitsCollection[11]['myFavorite'])

// Accessing Index out of Range of Array
console.log(fruitsCollection[100]) // undefined

/* Storing Elements in an Array in Key:Value Format (Cheating 😂) */
// Proceed at your own risk 😂 ==> (Not Recommended at any cost)
const newArray = []
newArray.firstName = 'Shubham'
console.log(newArray)
newArray.lastName = 'Gupta'
console.log(newArray)
// Accessing Elements from previous array
console.log(newArray.firstName)
console.log(newArray.lastName)
// However, length of this array always shows 0 ==> we can not iterate over it
console.log(newArray.length)

/* Array Methods */

// push()
// Adding Element in the end of the array
const fruitsCollection2 = ['Apple', 'Banana', 'Guava']
fruitsCollection2.push('Grapes', 'Orange', 'Mango', 'Pine Apple', 'Kiwi')
console.log(fruitsCollection2)

// pop()
// Removing the last element of an array
fruitsCollection2.pop()
console.log(fruitsCollection2)

fruitsCollection2.pop('Grapes')
console.log(fruitsCollection2)
// pine apple (last element of array) was removed instead of Grapes (not the last element of array)

// output of pop() is the element that was popped
console.log(`Popped Item: ${fruitsCollection2.pop()}`)

// Popping out an empty array gives you undefined as output
console.log(emptyArray.pop())

// shift()
// removing first element of an Array
console.log(fruitsCollection.shift())
console.log(fruitsCollection)

// unshift()
// adding element at the start of an Array
fruitsCollection.unshift('Apple')
console.log(fruitsCollection)

// Note: shift and unshift are too expensive and are not recommended to be used casually

// concat()
// adding two arrays
let oddNumbers = [1, 3, 5, 7, 9, 11, 13]
let animals = ['Dog', 'Cat', 'Rat', 'Duck', 'cat']
let evenNumbers = [2, 4, 6, 8, 10, 12]
let newArray1 = oddNumbers.concat(animals, evenNumbers)
console.log(newArray1)
let newArray2 = animals.concat(oddNumbers, evenNumbers)
console.log(newArray2)

// indexOf()
let elementIndex = fruitsCollection.indexOf('Orange')
console.log(elementIndex)

elementIndex = fruitsCollection.indexOf('Pine Apple')
console.log(elementIndex)

elementIndex = fruitsCollection.indexOf('Papaya')
console.log(elementIndex) // -1

// includes()
let isIncluded = fruitsCollection.includes('Apple')
console.log(isIncluded)

isIncluded = fruitsCollection.includes()
console.log(isIncluded) // we have 8 empty slots

isIncluded = fruitsCollection.includes('Papaya')
console.log(isIncluded)

// reverse()
console.log(fruitsCollection.reverse())
console.log(fruitsCollection)
// Note: Modifies the original array

// sort()
const sortedAnimals = animals.sort()
console.log(sortedAnimals)
// Note: Modifies the original array
// Note: sorts based on unicode value (UTF-16)
// we will revisit sort() in functions

const countArray = oddNumbers.concat(evenNumbers)
console.log(countArray)
const sortedCount = countArray.sort()
console.log(sortedCount)
// doesn't seem very useful with Numbers

// slice()
const slicedArray = countArray.slice(3, 6)
console.log(slicedArray)

const slicedArrayNegativeIndexing = countArray.slice(-6, -3)
console.log(slicedArrayNegativeIndexing)

const slicedArrayOneArgumentOnly = countArray.slice(6)
console.log(slicedArrayOneArgumentOnly)

// splice()
let newAnimals = animals.concat(['Lion', 'Tiger', 'Zebra', 'Monkey'])
console.log(newAnimals)

let splicedArray = newAnimals.splice(2, 5)
console.log(splicedArray)
console.log(newAnimals)

let temp = splicedArray.splice(2, 2, 'Bear')
console.log(temp)
console.log(splicedArray)

temp = newAnimals.splice(1, 2, 'Elephant', 'Beer')
console.log(temp)
console.log(newAnimals)

// Multi-Dimensional Array

// 2D Array
const nameAndNumberList = [
  ['Shubham', 80],
  ['Abhi', 85],
  ['Mohit', 90],
  ['Adarsh', 70],
  ['Akash', 75],
]

console.log(nameAndNumberList[0])
console.log(nameAndNumberList[nameAndNumberList.length - 1])
console.log(nameAndNumberList[1][1])

const ticTacToe = [
  ['X', null, null],
  [null, null, 'O'],
  ['O', null, 'X'],
]

console.log(ticTacToe[0])
console.log(ticTacToe[1])
console.log(ticTacToe[2])
