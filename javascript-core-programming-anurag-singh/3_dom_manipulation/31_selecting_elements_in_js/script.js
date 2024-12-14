// updating css roadmap image using JS

const imagesURL = [
  'https://cdn.pixabay.com/photo/2023/04/27/14/27/butterfly-7954767_640.jpg',
  'https://cdn.pixabay.com/photo/2022/08/22/12/42/bird-7403593_640.jpg',
  'https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg',
];
// Selecting HTML Elements using JavaScript

/*

// selecting the image element (not recommended to do it this way)
const cssImage = document.body.children[4].children[2].children[4];

// changing image using src attribute
cssImage.src =
  'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg';

// Recommended Alternatives :
// 1. getElementsByTagName()

const allImages = document.getElementsByTagName('img');
console.log(allImages);

// alternatively we can use document.images()
const allImages2 = document.images;

allImages[0].src = imagesURL[0];

allImages2[2].src = imagesURL[2];

const h1 = document.getElementsByTagName('h1');
console.log(h1);

h1[0].innerText = 'Hello, DOM!';

// 2. getElementsByClassName()
const cssRoadmap = document.getElementsByClassName('css-roadmap');
console.log(cssRoadmap);

cssRoadmap[0].src = 'https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_640.jpg';

// 3. getElementById
const cssRoadmapImage = document.getElementById('css_roadmap');
console.log(cssRoadmapImage);

cssRoadmapImage.src = imagesURL[1];

// 4. querySelector() --> mostly used
const jsRoadmapImage = document.querySelector('#js-roadmap');
console.log(jsRoadmapImage);

const cssRoadmapImage1 = document.querySelector('.css-roadmap');
console.log(cssRoadmapImage1);

const allImages3 = document.querySelector('img');
console.log(allImages3);

const jsRoadmapImage1 = document.querySelector('[alt="javascript roadmap"]');
console.log(jsRoadmapImage1);

const cssRoadmapImage2 = document.querySelector('body>ul>li>img');
console.log(cssRoadmapImage2);

// 5. querySelectorAll()
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

const allImages4 = document.querySelectorAll('img');
console.log(allImages4);

const allH2s = document.querySelectorAll('h2');
console.log(allH2s);

*/

// changing all the images using JS

// const allImages = document.images;
// this one can be iterated over using normal for loop, but not using forEach()
// therefore we won't be using it

// const allImages = document.querySelectorAll('img');
// console.log(allImages);
/*

allImages[0].src = imagesURL[0]
allImages[1].src = imagesURL[1]
allImages[2].src = imagesURL[2]

*/

// changing all images using for loop

/*

for (let i = 0; i < allImages.length; i++) {
  allImages[i].src = imagesURL[i];
  }
  
*/

// changing all images using forEach

/*

allImages.forEach((image, i) => {
  image.src = imagesURL[i];
});

*/

// Querying specific elements

/*

const ul = document.querySelector('ul');
console.log(ul);

const cssImage1 = ul.querySelector('img');
console.log(cssImage1);

const ol = ul.querySelector('ol');
console.log(ol);

const li_ol = ol.querySelectorAll('li');
console.log(li_ol);

const li_ul = ul.querySelectorAll('ul>li');
console.log(li_ul);

*/
