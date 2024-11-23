// mathematical operators ==> skipped (too basic)

// Math Object

// Properties

// PI
const pi = Math.PI;
console.log(pi);

// sqrt2
const sqrt2 = Math.SQRT2;
console.log(sqrt2);

// Methods

// sqrt()
const sqrt16 = Math.sqrt(16);
console.log(sqrt16);

// pow()
let result = Math.pow(2, 6);
console.log(result);

// floor()  ==> round down
result = Math.floor(100 / 6);
console.log(result);

result = Math.floor(2.9999999999999999);
console.log(result);
// here result is 3 bcz of JavaScript and not bcz of Math.floor()
result = 2.9999999999999999;
console.log(result);

result = Math.floor(-2.5);
console.log(result);

// ceil()
result = Math.ceil(100 / 3);
console.log(result);

result = Math.ceil(-100 / 3);
console.log(result);

// round()
result = Math.round(100 / 9);
console.log(result);

result = Math.round(100 / 8);
console.log(result);

result = Math.round(-100 / 9);
console.log(result);

result = Math.round(-100 / 8);
console.log(result);

// random()  --> mostly used

let value = Math.random();
console.log(value);

value = Math.random();
console.log(value);

value = Math.random();
console.log(value);

value = Math.random();
console.log(value);

// Problem Statement 1 : get a random integer between 0 and 20 [0,20]
let guess = Math.floor(Math.random() * 21);
console.log(guess);

// Problem Statement 2 : get a random integer between 10 and 20 [10,20]
const max = 20;
const min = 10;

result = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(result);

// Division by Zero
result = 8 / 0;
console.log(result);
console.log(typeof result);
result = -8 / 0;
console.log(result);
console.log(typeof result);
result = 0 / 0;
console.log(result);
console.log(typeof result);

// Program 1 : take height and width of rectangle from user and calculate it's area

// const height = Number(prompt("Enter the height of rectangle"));
// const width = Number(prompt("Enter the width of rectangle"));
// const areaOfRectangle = height * width;
// console.log(areaOfRectangle);

// Alternative way to convert input string into number using + operator
const height1 = +prompt("Enter the height of rectangle");
const width1 = +prompt("Enter the width of rectangle");
const areaOfRectangle1 = height1 * width1;
console.log(areaOfRectangle1);

// displaying the result of above program on your page
document.write(`Area of the Rectangle: ${height1 * width1}`);
