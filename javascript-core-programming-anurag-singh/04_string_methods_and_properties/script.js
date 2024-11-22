// Indexing

const message = "Hello, world";
console.log(message[0]);

console.log(message[-1]); // negative indexing does not work in js

// accessing last character of a string using .length property
console.log(message[message.length - 1]);
console.log(message[2]);

// Index out of range
console.log(message[10]);

// String Methods | Method Chaining

let username = "Shubham Kumar Gupta";

// String Methods without Arguments --> toUpperCase, toLowerCase, trim, trimStart, trimEnd

// toUpperCase
username_upper = username.toUpperCase();
console.log(username);
console.log(username_upper);
// toLowerCase
username_lower = username.toLowerCase();
console.log(username);
console.log(username_lower);
// trim
username = "          Shubham Kumar Gupta               ";
console.log(username + " 123");
username = username.trim() + " 123";
console.log(username);
// trimStart
username = "          Shubham Kumar Gupta               ";
console.log(username + " 123");
username = username.trimStart().toLocaleLowerCase();
console.log(username + " 123");
// trimEnd
username = username.trimEnd().toLocaleUpperCase();
console.log(username + " 123");

// String Methods with Arguments --> includes, indexof, replace, replaceAll, concate, padStart, padEnd, charAt, charCodeAt, split

// includes
console.log(username);
console.log(username.includes("S"));
console.log(username.includes("s"));
console.log(username.includes("AM"));
console.log(username.includes("Am"));

// indexof
console.log(username.indexOf("K"));
console.log(username.indexOf(" "));
console.log(username.indexOf("z"));
console.log(username.indexOf("GUPTA"));
console.log(username.indexOf("MATHUR"));

// replace
username.replace("SHUBHAM", "ABHI");
console.log(username);

usernameReplaced = username.replace("SHUBHAM", "ABHI");
console.log(usernameReplaced);

usernameReplacedAgain = usernameReplaced.replace("abhi", "shubh");
console.log(usernameReplacedAgain);

// replaceAll
console.log(username.replaceAll("A", "a"));
console.log(usernameReplacedAgain.replaceAll(" ", "-"));

// concate

const firstName = "shubh";
const lastName = "gupta";
const middleName = "kumar";

let fullName = firstName.concat(" ", middleName, " ", lastName);
console.log(fullName);

// padStart
const lastFourDigits = "5678";
console.log(lastFourDigits.padStart("16", "*"));

const lastSixDigits = "654321";
console.log(lastSixDigits.padStart("12", "#"));

// padEnd
const firstFourDigits = "1234";
console.log(firstFourDigits.padEnd("16", "*"));

// charAt
console.log(fullName.charAt(12));
console.log(fullName.charAt(20));
console.log(fullName.charAt(8));

// charCodeAt
console.log(fullName.charCodeAt(fullName.indexOf("a")));
console.log(username.charCodeAt(username.indexOf("A")));

// split
console.log(fullName.split(""), typeof fullName.split(""));
console.log(fullName.split(" "));
console.log(fullName.split("-"));

// String Template Literal

const templateString = `Last four digits of my account number is ${lastFourDigits}.`;
console.log(templateString);

const templateString2 = `My account number is ${lastFourDigits.padStart(
  "16",
  "*"
)}.`;
console.log(templateString2);

const backBalance = 987;
const templateString3 = `I have ₹${backBalance} in my bank account.`;
console.log(templateString3);
