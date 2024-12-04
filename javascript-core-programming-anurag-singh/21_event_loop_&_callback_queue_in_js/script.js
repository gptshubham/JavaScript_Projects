/*
console.log('Hi-1')

function hello() {
  console.log('Hello, world!')
}

for (let i = 1; i <= 4; i++) {
  console.log(i)
}

// debugger
hello()

setTimeout(hello, 100)
setTimeout(function () {
  console.log('Hello!!!')
}, 200)

console.log('Hi-2')
*/

console.log('Hi-1')

function hello() {
  console.log('Hello, world!')
}

// debugger
hello()

setTimeout(hello, 1000)
setTimeout(hello, 2000)
setTimeout(function () {
  console.log('Hello!!!')
}, 3000)

for (let i = 1; i <= 4; i++) {
  console.log(i)
}

console.log('Hi-2')
