import Dog from './Dog.js';
import Cat from './Cat.js';
import Bird from './Bird.js';
import Animal from './Animal.js';
import Cow from './Cow.js';
import Snake from './Snake.js';

const animal = new Animal("Lexie", 8, "Female");
const cow = new Cow("Doreen", 5, "Female", "Heifer");
const dog = new Dog("Rex", 10, "Male", "Labrador");
const bird = new Bird("Bruce", 10, "Male", "Bird");
const cat = new Cat("Luna", 10, "Female");
const snake = new Snake("Asande", 10, "Female", "Cobra");

console.log(cow.sound());
console.log(dog.sound());
console.log(bird.sound());
console.log(cow.getCowbreed());
console.log(animal.getAge());
console.log(cat.getName());
console.log(snake.getGender());
