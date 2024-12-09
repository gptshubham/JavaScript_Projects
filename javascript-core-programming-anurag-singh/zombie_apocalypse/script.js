'use strict';
// Increase Temperature by 2 and generate a new array and assign the data to fixedTemperatures variable
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];

const fixedTemperatures = celsiusTemperatures.map((temp) => temp + 2);
console.log(fixedTemperatures);

// convert the data in fixedTemperatures to Fahrenheit.
const fahrenheitTemperatures = fixedTemperatures.map(
  (temp) => temp * (9 / 5) + 32
);
console.log(fahrenheitTemperatures);

// filter out healthy people in a new array and save it in a variable called healthyPeople. temperature should be less than 104 degrees Fahrenheit to be considered healthy.

const healthyPeople = fahrenheitTemperatures.filter((temp) =>
  temp < 104 ? temp : undefined
);
console.log(healthyPeople);

// You have the weight of each container that the food is kept in kgs you need to calculate the total kgs of food in the warehouse

const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81];

const totalFood = warehouse.reduce(
  (accumulator, current) => accumulator + current
);
console.log(totalFood);

// it turns out now one more person decided to join the camp. And you already checked he is healthy. Just need to update the list of healthyPeopledata and add his actual temperature which is 98.6 Fahrenheit showing he is healthy and is permitted to enter.
healthyPeople.push(98.6);
console.log(healthyPeople);

// ome people from the quarantine are okay they just had normal fevers now they can enter the camp but to do that you need to enter their temperatures. And the data is given for the new people free from quarantine.

const newPeople = [95, 93.2, 100.4, 98.6, 102.2, 91.4, 95.5];

for (let el of newPeople) {
  healthyPeople.push(el);
}

console.log(healthyPeople);
