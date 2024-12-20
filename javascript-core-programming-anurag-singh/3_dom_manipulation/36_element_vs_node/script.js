console.log(document.body.children);

// element node
console.log(document.body.childNodes[1]);
console.dir(document.body.childNodes[1]);
console.log(typeof document.body.childNodes[1]);

// text node
console.log(document.body.childNodes[2]);
console.dir(document.body.childNodes[2]);
console.log(typeof document.body.childNodes[2]);

// comment node
console.log(document.body.childNodes[3]);
console.dir(document.body.childNodes[3]);
console.log(typeof document.body.childNodes[3]);

// attribute node
console.log(document.body.attributes.style);
console.dir(document.body.attributes.style);

// document node
console.log(document);
console.dir(document);

// let's change "Hello, world!" to "Hello, JS!"
let hello = document.querySelector('h1').nextSibling;

// console.log(hello);

hello.textContent = 'Hello, JS';

console.log(hello);

// hello.style.color = 'red';
// // TypeError: Cannot set properties of undefined (setting 'color')
// // any node other than element node, does not have style property

// alternatively, we can change "Hello, world!" chaining childNodes and nodeValue properties

document.body.childNodes[2].nodeValue = 'Hello, JavaScript!';
