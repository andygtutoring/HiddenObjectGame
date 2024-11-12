// hiddenObject.js
// List of items to find with their coordinates and image URLs
const items = [
  { name: 'Bench', image: 'images/bench.png' },
  { name: 'Flower', image: 'images/flower.png' },
  { name: 'Fire Hydrant', image: 'images/hydrant.png' },
  { name: 'Mushroom', image: 'images/mushroom.png' },
  { name: 'Sun', image: 'images/sun.png' },
];

// Function to generate random percentage
function randomPercent(min, max) {
  return `${Math.random() * (max - min) + min}%`;
}

// Initialize score
let score = 0;

// Get DOM elements
const wordList = document.getElementById('word-list');
const landscape = document.querySelector('.landscape');
const scoreDisplay = document.getElementById('score');

// Populate word list
items.forEach((item) => {
  const listItem = document.createElement('LI');
  listItem.textContent = item.name;
  wordList.appendChild(listItem);

  // Create hidden object image with randomized position
  const objectImage = document.createElement('IMG');
  objectImage.src = item.image;
  objectImage.classList.add('hidden-object');
  objectImage.style.top = randomPercent(20, 60);
  objectImage.style.left = randomPercent(20, 60);
  objectImage.addEventListener('click', () => findItem(item.name), { once: true });
  landscape.appendChild(objectImage);
});

// Function to handle item click
function findItem(itemName) {
  // Update score
  score++;
  scoreDisplay.textContent = score;

  // Show found object
  const foundObject = landscape.querySelector(`img[src="${items.find((item) => item.name === itemName).image}"]`);
  foundObject.classList.add('found');

  // Remove item from word list
  const itemElement = wordList.querySelector(`li:nth-child(${items.indexOf(items.find((item) => item.name === itemName)) + 1})`);
  itemElement.style.textDecoration = 'line-through';
}
