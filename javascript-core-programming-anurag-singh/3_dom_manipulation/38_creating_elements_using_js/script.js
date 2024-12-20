// Creating Elements using JavaScript (done in the last session)

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

const container2 = document.createElement('div');
container2.className = 'container';
container2.innerHTML = myHTML;
document.body.append(container2);
