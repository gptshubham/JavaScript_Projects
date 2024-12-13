// console.log(document);

// console.log(document.children);

// console.log(document.children.children); // undefined

// console.dir(document);

function cat() {
  document.body.children[0].children[5].src =
    'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg';
}

// cat()
// call cat function and see the magic

const myParagraph = document.body.children[0].children[6];
console.log(myParagraph.innerText);

myParagraph.innerText =
  'Used DOM Manipulation and changed the original lorem ipsum text';

console.log(myParagraph.innerText);
