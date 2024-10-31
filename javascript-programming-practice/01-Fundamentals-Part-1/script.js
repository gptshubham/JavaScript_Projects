// logging to console
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Shubham");
console.log(23);

let firstName = "Shubham";
console.log(firstName);

firstName = "Saurabh";
console.log(firstName);

// Variable Naming Conventions

firstName = "Shubham";
// let 3years = 3;
// let first&name = "shubham"
let first_name = "Shubham";
let first$name = "Shubham";
// let new = 27;
// let name = "Shubham";  --> Unconventional
// let FirstName = "Shubham";  --> Unconventional
let PI = 3.14; // constant
let myFirstJob = "Programmer"; // Self Explanatory
let myCurrentJob = "Developer"; // Self Explanatory

console.log(myFirstJob);
*/

// Data Types
/*
// Boolean
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof false);
console.log(typeof javascriptIsFun);

// Number
console.log(typeof 10);
console.log(typeof 10.5);

// String
console.log(typeof "Shubham");

// Dynamic Typing
console.log(typeof javascriptIsFun);
javascriptIsFun = 1;
console.log(typeof javascriptIsFun);
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year); // value : undefined
console.log(typeof year); // type : undefined

year = 2001;
console.log(typeof year);

// typeof null --> bug/error in JS, never corrected for legacy reasons
console.log(typeof null);
*/

// Declaration of Variables --> let, const and var
/*
// Mutable Variables / Empty Variables
let age = 30;
age = 31;

// Immutable / Constant Variable
const birth_year = 2001;
// birth_year = 2002;

var job = "programmer"; // var was used before ES6
job = "developer";

lastName = "Gupta";
console.log(lastName);
// not a variable in current scope, instead a property on the Global object
*/

// Operators in JavaScript
/*
// Arithmetic Operators

const now = 2037;
const ageMohit = now - 1991;
const ageRohan = now - 2018;
console.log(ageMohit, ageRohan);

console.log(ageMohit * 2, ageMohit / 10, 2 ** 3);

const firstName = "Shubham";
const lastName = "Gupta";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x -= 5;
console.log(x);
x *= 2;
console.log(x);
x /= 10;
console.log(x);
x **= 2;
console.log(x);

// Increment / Decrement
x++;
console.log(x);
x--;
console.log(x);

// Comparison Operators
console.log(ageMohit > ageRohan);
console.log(ageMohit < ageRohan);
console.log(ageRohan >= 18);
console.log(ageRohan <= 19);
console.log(ageMohit == ageRohan);
console.log(ageMohit === ageRohan)

const isFullAge = ageRohan >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2018);

// Operator Precedence

const now = 2037;
const ageMohit = now - 1991;
const ageRohan = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageMohit + ageRohan) / 2;
console.log(averageAge);
console.log(ageMohit, ageRohan);
*/

// String and Template Literals
/*
const firstName = "Shubham";
const job = "programmer";
const birthYear = 1947;
const year = 2124;

const shubham =
  "I'm " + firstName + " a " + (year - birthYear) + " years old " + job + ".";
console.log(shubham);
const shubhamNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;
console.log(shubhamNew);

console.log(`Just a regular string...`);

// Multi-line String
console.log(
  "string with \n\
multiple lines \n\
using conventional method..."
);

// Alternatively using String Literal --> preferred
console.log(`String with
multiple lines
using string literal...`);
*/

// if-else Statements
/*
let age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Rohan can start driving license");
}

if (age >= 18) {
  console.log("Rohan can start driving license");
}

age = 15;
if (age >= 18) {
  console.log("Rohan can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Rohan is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1947;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Type Conversion - Explicit Conversion
/*
// Example
const birth_year = "2002";
console.log(Number(birth_year), birth_year);
console.log(birth_year + 18);
console.log(Number(birth_year) + 18);

console.log(Number("Shubham"));
console.log(typeof NaN);
// NaN is actually means an invalid number

console.log(String(23), 23);
*/

// Type Coercion - Implicit Conversion
/*
// Example
// + converts the Number into String
console.log("I'm " + 22 + " years old.");
console.log("23" + "10" + 3);
// - converts the String into Number
console.log("23" - "10" - 3);
// *,/,** functions convert String to Number
console.log("23" * "2");
console.log("23" * 2);
console.log("23" / "2");
console.log("23" / 2);
console.log("23" ** "2");
console.log("23" ** 2);

// Guess the type
let n = "1" + 1;
console.log(n);
n = n - 1;
console.log(n);
console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

// Truthy and Falsy Values
/*
// 5 Falsy Values -> 0, '', undefined, null, NaN
// Everything else is Truthy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Shubham"));
console.log(Boolean({}));
console.log(Boolean(""));

// 2 Scenarios when JS does Type Coercion to Booleans
// logical operators and
// if-else conditions

// Example 1
const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

// Example 2
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

height = 172;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// Equality Operators == vs. ===
/*
let age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became and adult :D (loose)");

age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became and adult :D (loose)");

console.log(18 === 18);
console.log("18" === 18);
console.log("18" == 18);
// loose equality operator (==) can introduce many hard to find bugs in our code.
// So, as a general rule for clean code avoid loose equality operator as much as you can
// when comparing values always use the strict equality operator (===)

// Favourite Number Example
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 7) console.log("Cool! 7 is an amazing number!");
if (favourite === 7) {
  console.log("Cool! 7 is an amazing number!");
} else if (favourite === 22) {
  console.log("22 is also a cool number");
} else {
  console.log("Number is not 7 or 22");
}

if (favourite !== 22) {
  console.log("Why not 22?");
}
*/

// Boolean Logic
/*
// Example
let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("You should drive.");
} else {
  console.log("Someone Else should drive!");
}

hasDriversLicense = true;
hasGoodVision = false;

if (hasDriversLicense && hasGoodVision) {
  console.log("You should drive.");
} else {
  console.log("Someone Else should drive!");
}

let isTired = true;
if (hasDriversLicense || (hasGoodVision && !isTired)) {
  console.log("You should drive.");
} else {
  console.log("Someone Else should drive!");
}

hasGoodVision = true;
isTired = false;
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You should drive.");
} else {
  console.log("Someone Else should drive!");
}
*/

// The Switch Statement
/*
// Weekdays Example - map one activity to each day
const day = "thursday";

switch (day) {
  case "monday": // day == 'monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

// Alternative: if-else statement
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/

// Ternary Operator
/*
const age = 22;
age >= 18 ? console.log("wine 🍷") : console.log("cola 🥤");

age >= 18
  ? console.log("Wine 🍷")
  : age >= 13
  ? console.log("cola 🥤")
  : age >= 3
  ? console.log("water 💧")
  : console.log("milk 🍼");

// Using ternary operator to declare a variable
let drink = age >= 18 ? "Wine 🍷" : "cola 🥤";
console.log(drink);

// Using ternary operator inside a template literal
console.log(`I want to drink ${age >= 18 ? "wine 🍷" : "cola 🥤"}`);
*/
