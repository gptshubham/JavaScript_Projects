/* setTimeout() & setInterval() */
/*
// setTimeout()
// TypeError: Failed to execute 'setTimeout' on 'Window': 1 argument required, but only 0 present.

// setTimeout('Hi')
// ReferenceError: Hi is not defined

// const Hi = 'Hello'
// setTimeout('Hi')

// setTimeout('console.log(true)') // true
// setTimeout(
//   `console.log("Hi")
//   console.log("I am Shubham")`,
//   1000
// )
// // Note: setTimeout converts the string passed as arg into a js code and creates a VM file behind the scene

const timerId1 = setTimeout('console.log("Hi-1")', 1000) // possible but not used like this

const timerId2 = setTimeout('console.log("Hi-2")', 2000) // possible but not used like this
const timerId5 = setTimeout('console.log("Hi-3")', 0)

const timerId3 = setTimeout(a, 3000) // This is how it is used in 99% cases
const timerId4 = setTimeout(a, 4000, 'skg', 444, 99, 89.65, [1, 2, 3]) // possible but not used like this

// clearTimeout(timerId2) // "Hi-2" will never run
// clearInterval(timerId1) // "Hi-1" will never run, it works but not recommended to use against setTimeout()

function a() {
  // console.log(arguments[0]) // not used
  console.log('Hello, world!')
}

console.log('Shubham Kumar Gupta')

// SetInterval()

// const timerId6 = setInterval('console.log("Hi-1")', 1000)
const timerId7 = setInterval(a, 1000)
*/

// Most Common way to use setTimeout() and setInterval
/*
setTimeout(function () {
  console.log('skg-1')
}, 1000)
// Note: passing an Anonymous Function as an argument

setTimeout(function () {
  console.log('skg-2')
})
console.log('skg-3')
*/

let counter = 0

const intervalId = setInterval(() => {
  console.log(counter)

  counter++

  if (counter === 5) clearInterval(intervalId)
}, 1000)
