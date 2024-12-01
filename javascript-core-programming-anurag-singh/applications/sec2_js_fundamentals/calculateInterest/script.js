// Function Definition

/**
 * calculates the interest earned on a savings account balance
 *
 * @param {Number} balance - represents the current balance in the savings account
 * @param {Number} rate - represents the annual interest rate (in decimal form)
 * @returns {Number} interest earned on a savings account balance at the given rate
 */
function calculateInterest(balance, rate) {
  if (!(typeof balance === 'number') || !(typeof rate === 'number')) {
    console.log(`Invalid Input! Please Enter A Valid Input!`)
  } else {
    return balance * rate
  }
}

// Function Call
const interest1 = calculateInterest(1000, 0.05)
console.log(interest1)
const interest2 = calculateInterest(5000, 0.03)
console.log(interest2)
const interest3 = calculateInterest('skg', 0.1)
console.log(interest3)
const interest4 = calculateInterest(10000, 'skg')
console.log(interest4)
