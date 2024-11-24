// Equality Operator
const userAge1 = 18;
const userAge2 = 25;
const userAge3 = "18";
const userAge4 = 55;
const userAge5 = 65;

// ==  (Loose Equality Operator) --> [does type coercion]
// type coercion ==> Implicit Type Conversion
/*
console.log(userAge1 == userAge2);

console.log(userAge1 == userAge3);

// However, it is not recommended to rely on Loose Equality for type coercion,
// instead, it is recommended to perform explicit type conversion and use
// === (Strict Equality Operator)
console.log(userAge1 === userAge2);
console.log(userAge1 === userAge3);

// Explicit type conversion - Method 1 (using + operator)
console.log(userAge1 === +userAge3);

// Explicit type conversion - Method 1 (using parseInt)
console.log(userAge1 === parseInt(userAge3));

// !=
console.log(userAge1 != userAge2);
console.log(userAge1 != userAge3);
// !==
console.log(userAge1 !== userAge3);
*/

// greater than / less than  --> [does type coercion]
// > , < , >= , <=
/*
console.log(userAge1 > userAge2);
console.log(userAge1 < userAge2);
console.log(userAge2 > userAge3);

console.log(userAge1 >= userAge2);
console.log(userAge1 >= userAge3);

console.log(userAge3 <= userAge2);
console.log(userAge1 <= userAge3);
*/

// Logical Operators

// && and ||
console.log(5 < 7 && 8 > 4);
console.log(5 > 7 && 8 > 4);

// youth
// As per UN, a youth is someone within the age range of [15, 24]
let isYouth = userAge1 >= 15 && userAge1 <= 24;
console.log(isYouth);

isYouth = userAge2 >= 15 && userAge2 <= 24;
console.log(isYouth);

// senior citizen
// As per Income Tax Act of India, a Senior Citizen is some within the age range of [50,60]
let isSeniorCitizen = userAge4 >= 50 && userAge4 <= 60;
console.log(isSeniorCitizen);
isSeniorCitizen = userAge5 >= 50 && userAge5 <= 60;
console.log(isSeniorCitizen);

// return value of Logical Operators ==> truthy or falsy values

// Tricky Scenario 1
const andResult = 0 && 2;
console.log(andResult);
console.log(Boolean(0 && 2));

// Tricky Scenario 2
const orResult = 0 || 2;
console.log(orResult);
console.log(Boolean(0 || 2));

// Tricky Scenario 3
const andResult2 = "" && "Hello"; // "" or 0
console.log(andResult);
const orResult2 = "" || "Hello";
console.log(orResult2);

// Tricky Scenario 4
const andResult3 = "Hello" && null;
console.log(andResult3);
const orResult3 = "Hello" || null;
console.log(orResult3);

// Tricky Scenario 5
const andResult4 = "Hello" && 4 + 8;
console.log(andResult4);
const orResult4 = "Hello" || 4 + 8;
console.log(orResult4);
const orResult5 = undefined || 4 + 8;
console.log(orResult5);

// Tricky Scenario 6
const andResult6 = "Hello" && console.log("Hello");
console.log(andResult6);
const orResult6 = undefined || console.log("Hello");
console.log(orResult6);

// !
console.log(!null);
console.log(!!null);

console.log(!"hello");
console.log(!!"hello");
