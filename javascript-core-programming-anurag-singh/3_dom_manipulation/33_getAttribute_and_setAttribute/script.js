const attribute1 = document.querySelector('[title="Frontend Roadmap"]');

console.log(attribute1);

const attribute2 = document.querySelectorAll('[title]');

console.log(attribute2);

const attribute3 = document.querySelectorAll('[href]');

console.log(attribute3);

console.log(attribute1.attributes);

console.log(attribute1.src); // well, we can only access and set commonly used html attributes like this
// alternatively
console.log(attribute1.attributes.src.value);

console.log(attribute1.alt);
attribute1.alt = 'Frontend';
console.log(attribute1.alt);
// alternatively
console.log(attribute1.attributes.alt.value);

// getAttribute()

console.log(document.querySelector('[alt]').alt);
console.log(document.querySelector('[alt]').getAttribute('alt'));

// setAttribute()

const firstP = document.querySelector('p');
console.log(firstP);

firstP.setAttribute('hello', 'world');
firstP.setAttribute('class', 'p-element');
firstP.setAttribute('id', 'first-p-element');

const heading = document.querySelector('h1');
// console.log(heading);

heading.id = 'heading';

heading.className = 'page-heading';

// heading.hello = 'world'
// // since hello is not a popular html attribute, we need to set is using setAttribute()
heading.setAttribute('hello', 'world');
