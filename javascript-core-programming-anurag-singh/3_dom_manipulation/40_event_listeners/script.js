function sayHi() {
  console.log('Hiii');
}

const cardNumber = document.querySelector('.card').innerText;

function cardClick() {
  alert(`Hello from Card ${cardNumber}`);
  console.log(`Second Hi from Card ${cardNumber}`);
}

// Option 1 of Setting Event Listeners --> html opening tag (not recommended)

// Option 2 of Setting Event Listeners (also not recommended)

/*
// step 1 : select elements using js
// step 2 : use event property to set event listener

const h1 = document.querySelector('h1');
h1.onclick = sayHi;

let card = document.querySelector('.card');
card.ondblclick = cardClick;
// now if we generate n number of cards then a hello will be logged to the console with the card number when double clicked on a specific card. in that case we will use querySelectorAll()

card = document.querySelectorAll('.card');

const container = document.querySelector('.container');
for (let i = 2; i <= 100; i++) {
  const newCard = document.querySelector('.card').cloneNode();
  newCard.innerText = `${i}`;
  container.append(newCard);
}

for (let i = 1; i <= 100; i++) {
  card[i].onclick = cardClick;
}
// Note: well it seems complex
*/

// Option 3 : addEventListener('event', callback) (recommended)

/*

const h1 = document.querySelector('h1');

h1.addEventListener('click', sayHi);

const card = document.querySelector('.card');

card.addEventListener('click', cardClick);

// let's see the magic now
// Program: generating card number popup on click

const container = document.querySelector('.container');

for (let i = 2; i <= 100; i++) {
  const newCard = card.cloneNode();
  newCard.innerText = i;

  newCard.addEventListener('click', () => alert(`Card ${i} says Hi!!!`));
  newCard.addEventListener('click', () =>
    console.log(`Second Hi from Card ${i} !!!`)
  );
  container.append(newCard);
}
// what we have done here is 
// 1. we cloned the existing card 1 
// 2. then we generated 99 more cards with respective numbers as innerText
// 3. then within the same for loop we created click Event Listeners for each cards
// 4. when clicked on any card, browser will generate an alert with that card number. 
// 5. We just did what we couldn't do with option 2
*/

// Program: Generate New Cards when clicked on Card +

/*
// selecting existing card
const cardPlus = document.querySelector('.card');
// selecting the container div
const container = document.querySelector('.container');
// setting up the counter that counts the card number
let counter = 1;
// setting up event listener to create new cards when clicked on Card+
cardPlus.addEventListener('click', () => {
  // generating new card (div.card element)
  newCard = document.createElement('div');
  // setting up the class attribute of new card with 'card' as value
  newCard.className = 'card';
  // counter as content of the div.card element and then incrementing the counter for further use
  newCard.innerText = counter++;
  // appending new card to the container
  container.append(newCard);
});
*/

// Alternatively: using cloneNode: instead of creating a new card, we will clone the existing add-card.
// In that case we will explicitly remove 'add-card' class from the cloned node

// selecting existing card
const cardPlus = document.querySelector('.card');
// selecting the container div
const container = document.querySelector('.container');
// setting up the counter that counts the card number
let counter = 1;
// setting up event listener to create new cards when clicked on Card+
cardPlus.addEventListener('click', () => {
  const newCard = cardPlus.cloneNode();
  newCard.classList.remove('add-card');
  newCard.innerText = counter++;
  container.append(newCard);
});
