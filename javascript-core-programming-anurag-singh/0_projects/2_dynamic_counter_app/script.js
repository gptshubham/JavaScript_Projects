// Selecting dom elements
const value = document.querySelector('#count')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')
const user_input = document.querySelector('input')
const reset = document.querySelector('#reset')

// adding event listeners

// for incrementing the count
increment.addEventListener('click', () => value.innerHTML = Number(value.innerHTML) + Number(user_input.value))

// fot decrementing the count
decrement.addEventListener('click', () => value.innerHTML -= user_input.value)

// for reset
reset.addEventListener('click', () => value.innerHTML = 0)
