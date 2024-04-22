import Animal from "./Animal.js";

class Snake extends Animal {
  constructor(name, age, gender, family) {
    super(name, age, gender);
    this.family = family;
  }
  getFamily() {
    return this.family;
  }
  setFamily(family) {
    this.family = family;
  }
  sound() {
    return "Hiss";
  }
}

export default Snake;