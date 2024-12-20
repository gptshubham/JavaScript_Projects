const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// // appendChild()
// container.appendChild(h1);

// // cloneNode()
// let h1New = h1.cloneNode();
// console.log(h1New);
// container.appendChild(h1New);
// // h1New.textContent = 'Hello, world';

// // cloneNode(true)
// h1New = h1.cloneNode(true);
// container.appendChild(h1New);
// // lets chain the two methods
// container.appendChild(h1.cloneNode(true));

// playing with card using appendChild() and cloneNode()
/*
container.appendChild(card);
container.appendChild(card.cloneNode());
container.appendChild(card.cloneNode(true));
*/

// Challenge: add 100 cards in container
/*
for (let i = 2; i <= 100; i++) {
  const newCard = card.cloneNode(true);
  newCard.textContent = i;
  container.appendChild(newCard);
}
*/

// // let's append body into container
// container.appendChild(document.body);
// // HierarchyRequestError: Failed to execute 'appendChild' on 'Node': The new child element contains the parent.

// append()
// we can create the cards using append() as well

/*
for (let i = 2; i <= 100; i++) {
  const newCard = card.cloneNode(true);
  newCard.textContent = i;
  container.append(newCard);
}
*/

// append() vs appendChild()

// lets append h1 into container

container.appendChild(h1);

container.append('Hello,');
// container.append('Hello');
// container.append('Hello');
// container.append('Hello');
// container.append('Hello');

// container.appendChild('Hello');
// // TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

// create a text node then can append the same using appendChild

const newTextNode = document.createTextNode(' world!');

container.appendChild(newTextNode);

container.append(h1, ' Hello,', ' world!', ' from ', 'Dom!', 111, true);
