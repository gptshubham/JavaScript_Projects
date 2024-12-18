// DOM Traversal - Accessing Parent, Sibling and Children Elements

const firstLink = document.querySelector(
  'body > p:nth-child(3) > a:nth-child(2)'
);

console.log(firstLink);

// .parentElement, parentNode
console.log(firstLink.parentElement);
console.log(firstLink.parentElement.parentElement);
console.log(firstLink.parentElement.parentElement.parentElement);
console.log(firstLink.parentElement.parentElement.parentElement.parentElement);
console.log(firstLink.parentElement.parentElement.parentElement.parentNode);

// .children
console.log(firstLink.children);
console.log(firstLink.parentElement.parentElement.children);
console.log(firstLink.parentElement.parentElement.childNodes);

// .nextElementSibling
console.log(firstLink.nextElementSibling);
console.log(firstLink.nextElementSibling.nextElementSibling);
console.log(firstLink.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(
  firstLink.nextElementSibling.nextElementSibling.nextElementSibling
    .nextElementSibling
);

// .previousElementSibling
console.log(firstLink.previousElementSibling);
console.log(firstLink.previousElementSibling.previousElementSibling);

//
console.log(firstLink.nextSibling);
console.log(typeof firstLink.nextSibling);
console.log(firstLink.nextSibling.nextSibling);
console.log(firstLink.nextSibling.nextSibling.nextSibling);
console.log(firstLink.nextSibling.nextSibling.nextSibling.nextSibling);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling.nextSibling
);

console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling.length
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling.nodeName
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling.nodeType
);
console.log(
  firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
    .nextSibling.nextSibling.nodeValue
);

firstLink.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nodeValue =
  '.';
// Note: we can do it using .textContent also

//
console.log(firstLink.previousSibling);
console.log(firstLink.previousSibling.previousSibling);
console.log(firstLink.previousSibling.previousSibling.childNodes);
console.log(firstLink.previousSibling.previousSibling.childNodes[0]);

// firstLink.previousSibling.previousSibling.childNodes[0].textContent =
// 'Frontend Development';

// alternatively
firstLink.previousSibling.previousSibling.textContent = 'Frontend Development';
