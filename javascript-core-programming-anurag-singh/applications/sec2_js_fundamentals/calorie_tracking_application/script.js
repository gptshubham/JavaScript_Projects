// Function Definition

function calculateCaloriesBurned(activities) {
  // checking provided input is an array
  if (!Array.isArray(activities)) {
    console.log('Invalid Input! Please Enter An Array of Numbers!')
    return
  }
  // checking array contains numbers only
  if (!activities.every((act) => typeof act === 'number')) {
    console.log('Invalid Input! Please Enter An Array of Numbers!')
    return
  }
  let total_calories_burned = 0
  for (i of activities) {
    total_calories_burned += i
  }
  return total_calories_burned
}

// Function Call
const caloriesBurned1 = calculateCaloriesBurned([100, 150, 200])
console.log(caloriesBurned1)
const caloriesBurned2 = calculateCaloriesBurned([50, 75, 100, 150])
console.log(caloriesBurned2)
const caloriesBurned3 = calculateCaloriesBurned([50, 75, 100, 150, 'skg'])
console.log(caloriesBurned3)
const caloriesBurned4 = calculateCaloriesBurned(50, 75)
console.log(caloriesBurned4)
