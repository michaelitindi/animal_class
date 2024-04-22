const Animal = require("./Animal.js");

class Cow extends Animal {
    constructor(name, age, gender, cowbreed) {
        super(name, age, gender);
        this.cowbreed = cowbreed;
    }
    getCowbreed() {
        return this.cowbreed;
    }
    sound() {
        return "moo";
       // console.log("Moo");
    }
}

export default Cow;
