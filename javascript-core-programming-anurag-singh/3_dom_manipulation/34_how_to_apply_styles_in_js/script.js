// What seems the most easy way to me to style using JS

/*
const h1 = document.querySelector('h1');

h1.style = 
  'color: darkred; background-color: hotpink; position: fixed; top: 0; left: 0; right: 0; margin: 0; font-size: 3rem';

*/

const firstParagraphStyle = document.querySelector('p').style;

firstParagraphStyle.marginTop = '50px';

// alternatively

const h1Styles = document.querySelector('h1').style;
h1Styles.backgroundColor = 'black';
h1Styles.color = 'white';
h1Styles.position = 'fixed';
h1Styles.top = '0';
h1Styles.left = '0';
h1Styles.right = '0';
h1Styles.padding = '10px';
h1Styles.margin = '0';

// changing the color of all anchor tags

const allAnchorTags = document.querySelectorAll('a');

console.log(allAnchorTags);

for (const anchor of allAnchorTags) {
  /*
  anchor.style.color = 'teal';
  anchor.style.textDecorationLine = 'none';
  anchor.style.fontWeight = '700';
  anchor.style.fontFamily = 'cursive';
  */
  // alternatively: we can code in css style using `` : this is also not the best practice
  /*
  anchor.style = `
    color: red;
    font-size: 18px;
    font-family: cursive;
    font-weight: 700;
    text-decoration-line: none;
  `
  */
  // The Best Practice: create class using js and apply css in the .css file using such class
  // anchor.className = 'green-link';
  // alternative: setAttribute()
  // anchor.setAttribute('class', 'green-link');
  // Best Practice to create classes using js
  // anchor.classList = ['green-link pink-bg-link'];
  anchor.classList = ['pink-bg-link black-bg-link'];
  // we did it for example purpose
  anchor.classList.add('green-link');
  anchor.classList.remove('black-bg-link');
  anchor.classList.toggle('yellow-link');
}
