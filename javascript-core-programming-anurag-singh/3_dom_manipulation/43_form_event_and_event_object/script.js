const usernameInput = document.querySelector('#username');
const paragraph = document.querySelector('#paragraph');
const form = document.querySelector('form');

// usernameInput.addEventListener('click', () => console.log('Input clicked!'));

// usernameInput.addEventListener('dblclick', () =>
//   console.log('Input double clicked!')
// );

// input Event

/*
let userInput;

usernameInput.addEventListener('input', (e) => {
  paragraph.innerText = e.target.value;
  userInput = e.target.value;
});
*/

// change Event

/*
usernameInput.addEventListener('change', (e) => {
  paragraph.innerText = e.target.value;
  console.log(e.target.value);
});
*/

// focus Event

/*
usernameInput.addEventListener('focus', (e) => {
  paragraph.innerText = e.target.value;
  console.log(e);
});
*/

// blur Event

/*
usernameInput.addEventListener('blur', (e) => {
  paragraph.innerText = e.target.value;
  console.log(e.type);
  console.log(e.target.value);
});
*/

// submit Event

/*
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e);
  const formData = new FormData(form);
  // console.log(formData);

  console.log(formData.entries());
  for (const p of formData.entries()) {
    console.log(p);
  }
});
*/

// click Event

/*
form.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target);
  console.log(e.currentTarget);
  // console.log('Form Clicked...');
});
*/

const a = {};
console.log(a);

const b = {
  name: 'HTML',
};
console.log(a);
const c = {
  name: 'CSS',
};
console.log(a);
a[b] = {
  name: 'JS',
};

console.log(a[b]);
console.log(a);

a[c] = {
  name: 'React',
};

console.log(a[b]);
console.log(a[c]);
console.log(a);
