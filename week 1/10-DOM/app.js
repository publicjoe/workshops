console.log("Hello Word!");

const body = document.querySelector("body");
console.log(body);

const h1 = document.querySelector("h1");
console.log(h1);

h1.textContent = "Hello Warhammer!"

// Alternate Image() constructor can be found at https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
const img = document.createElement("img");
img.src = src="https://images.seeklogo.com/logo-png/43/1/warhammer-logo-png_seeklogo-438364.png";
img.width = 100;
img.height = 100;
document.body.appendChild(img);

// Remove the h1 tag
h1.remove();

// Resources used for the following code
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// https://www.w3schools.com/js/js_htmldom_css.asp - shows how to style an item

// Add a list
let ul = document.createElement("ul");
// In order to add an item to the list, we need to give it an id
ul.setAttribute("id", "myUL");
// Now add it to the document
document.body.appendChild(ul);

// Create a list item
let li = document.createElement("li");
// Create something to add to the li object
const text = document.createTextNode("Space Marines are overrated");
// Now add it to the list item
li.appendChild(text);
document.getElementById("myUL").appendChild(li);

// Now lets add a new OL list, with many li objects
let ol = document.createElement("ol");

// Declare the text for three items
const liItems = ['Orks', 'Eldar', 'Dwarfs'];

// Iterate over the list and add it to the ordered list
liItems.forEach(itemText => {
  const li = document.createElement('li');
  const textNode = document.createTextNode(itemText);
  // lets style the list item to get rid of the number
  li.style.listStyle = "none";
  li.style.color = "red";
  li.appendChild(textNode);
  ol.appendChild(li);
});

// add the ordered list to the webpage
document.body.appendChild(ol);
