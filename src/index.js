import Dog from './Dog.js';
import Cat from './Cat.js';
import Bird from './Bird.js';
import Animal from './Animal.js';
import Cow from './Cow.js';
import Snake from './Snake.js';

// Create instances of each class
const animal = new Animal("Lexie", 8, "Female");
const cow = new Cow("Doreen", 5, "Female", "Heifer");
const dog = new Dog("Rex", 10, "Male", "Labrador");
const bird = new Bird("Bruce", 10, "Male", "Bird");
const cat = new Cat("Luna", 10, "Female");
const snake = new Snake("Asande", 10, "Female", "Cobra");

// Get references to HTML elements
const outputElement = document.getElementById('output');

// Function to append text to the output element
function appendOutput(text) {
  const p = document.createElement('p');
  p.textContent = text;
  outputElement.appendChild(p);
}

// Output results to the HTML document
appendOutput(dog.sound());
appendOutput(bird.sound());
appendOutput(cow.getCowbreed());
appendOutput(animal.getAge());
appendOutput(cat.getName());
appendOutput(snake.getGender());
