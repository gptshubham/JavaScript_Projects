"use strict";
// number data type

console.log(`data type of 7 is ${typeof 7}`);
console.log(`data type of 7.7 is ${typeof 7.7}`);

// string data type

console.log(`data type of 'hello' is ${typeof "hello"}`);
console.log(`data type of 'a' is ${typeof "a"}`);
console.log(
  `data type of 'In this video we will learn about Primitive Data Types' is ${typeof "In this video we will learn about Primitive Data Types"}`
);
console.log(`data type of '' is ${typeof ""}`);
console.log(`hello
from
JavaScript`);

// Type Conversion between number and string

const num = `100`;
console.log(typeof num);

console.log(num + 10);
console.log(num - 10);
console.log(num * 2);
console.log(num / 2);
console.log(num ** 2);
console.log(num % 15);
console.log("skg" + "skg");
console.log("skg" - "10");
console.log(`skg` * 5);

console.log(parseInt`100skg`);
console.log(parseInt`skg100`);

console.log(parseFloat("10.1010skg"));

// String function
console.log(typeof String(100));

// toString function
console.log(typeof toString(200));

// alternative way of converting number into string without using String function
console.log(typeof (100 + ""));
console.log(1.999999999999999999999999);

// boolean data type
console.log(typeof true);
console.log(typeof false);

console.log(Number(true));
console.log(Number(false));

// undefined data type
let fname;
console.log(fname);
console.log(undefined);

let lname = undefined;
console.log(lname);
console.log(Number(undefined));

// null data type
console.log(null);

let sname = null;
console.log(sname);
console.log(Number(null));

console.log(typeof null);
// it's a bug but they kept it that way for legacy's sake

console.log(parseInt(undefined));
console.log(parseInt(null));
console.log(parseInt(true));

// bigint data type --> skipped

// symbol data type --> do it yourself
