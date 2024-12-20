const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
h1.style.color = 'coral';
const container = document.querySelector('.container');

// Program: add 100 images to the container using dom manipulation

// selecting the first image element
// const firstImage = document.querySelector('img');

// cloning the first image element
// const newImage = firstImage.cloneNode(true);

/*
console.log(newImage.attributes.src.nodeValue.at(-5));
for (let i = 2; i <= 100; i++) {
  const newImage = firstImage.cloneNode();
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.append(newImage);
}
*/

// in the last example, we had first image, we cloned it and used it to generate the rest of the 99 image by changing the src attribute's value dynamically using string literals

// let's say we don't even have the first image, how are we going to generate 100 images now =====> document.createElement()

// Alternative 1: generating image and paragraph element and appending then both to the container div

for (i = 1; i <= 100; i++) {
  const box = document.createElement('div');
  box.className = 'box';

  // creating image element
  const img = document.createElement('img');

  // adding source to image element
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  // now let's number each image

  // creating paragraph element
  const paragraph = document.createElement('p');

  // content of paragraph
  paragraph.textContent = i;

  // appending image and paragraph into box
  box.append(img, paragraph);

  // appending box into container
  container.append(box);

  // alternatively: using string literals only and no createElement()
  // Not considered as the Best Practice (not recommended)

  /*
  const myHTML = `<img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
      />
      <p>${i}</p>
  `;
  box.innerHTML = myHTML;
  container.append(box);
  */
}

// Approach 2: generating a gigantic string using string literal

let myHTML = ``;
for (let i = 101; i <= 200; i++) {
  myHTML += `<div class="box">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png"
              />
              <p>${i}</p>
            </div>
  `;
}

let container2 = document.createElement('div');
container2.className = 'container';
container2.innerHTML = myHTML;
document.body.append(container2);

// Deleting Elements using JavaScript

// remove() --> modern (preferred)
const elementToDelete = document.querySelector('body > div > div:nth-child(3)');
elementToDelete.remove();

// removeChild() --> legacy
const elementToDelete1 = document.querySelector(
  'body > div > div:nth-child(4)'
);
const parent = document.querySelector('.container');
parent.removeChild(elementToDelete1);

// alternatively
const elementToDelete2 = document.querySelector(
  'body > div > div:nth-child(1)'
);

elementToDelete2.parentElement.removeChild(elementToDelete2);

container2.remove();

console.log(container2);
// even after deleting , container2 still exists ==> not very memory efficient

// we can append it again
document.body.append(container2);

// so what we need to do is to set container2 to null after removing it from body
// obviously it can only be done of we have declared container2 variable using let

container2.remove();
container2 = null;

console.log(container2);
