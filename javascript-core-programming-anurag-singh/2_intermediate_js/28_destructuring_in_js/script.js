'use strict';

// Destructuring Array

const colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black'];

// const color1 = colors[0];
// console.log(color1);
// const color2 = colors[1];
// console.log(color2);
// const color3 = colors[2];
// console.log(color3);

// now, doing the same thing using destructuring

const [color1, color2, color3, ...rest] = colors;
// also, we have combined rest param with destructuring to store remaining elements into a different array
console.log(color1);
console.log(color2);
console.log(color3);
console.log(rest);
console.log(colors);

// What if we only want blue to be stored in a variable called color

const [, , colorBlue] = colors;

console.log(colorBlue);

// What if we need yellow ? ==> Destructuring Array Like an Object
const { 5: colorYellow } = colors;
console.log(colorYellow);

// Destructuring Object

const user = {
  name: 'SKG',
  age: 50,
  address: {
    residential_address: {
      city: 'Wasseypur',
      state: 'Euphoria',
      country: 'Music',
    },
    permanentAddress: {
      city: 'Mirzaput',
      state: 'Coma',
      country: 'metaverse',
    },
  },
};

// age, name with a different variable name, something that's not a key of Object
const { name: username, age, job } = user;
console.log(username); // different variable name than the key of Object
console.log(age);
console.log(job); // not a key in object

// state --> residential_address ==> Multi Level Destructuring
const {
  address: {
    residential_address: { state },
  },
} = user;
console.log(state);

// Alternatively --> Not so efficient way
const { address } = user;
console.log(address);
const { residential_address } = address;
console.log(residential_address);
const { state: province } = residential_address;
console.log(province);

//

// Destructuring with Function

function intro({
  name,
  address: {
    permanentAddress: { country },
  },
}) {
  // console.log(name);
  // console.log(country);
  console.log(`Hello, I'm ${name}. I'm from ${country}.`);
}

intro(user);

function printColor([, g, b, , , y]) {
  console.log(g, b, y);
}

printColor(colors);

// Tricky Example 1

const { a, b, ...restOfTheEntries } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a, b, restOfTheEntries);

// Tricky Example 3
const obj = { 'user name': 'ProCodrr' };

const { 'user name': newUsername } = obj;
console.log(newUsername);
