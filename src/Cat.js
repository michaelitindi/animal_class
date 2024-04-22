import Animal from "./Animal.js";
class Cat extends Animal{
    constructor(name,age,gender)
    {
        super(name,age,gender)
    }

sound()
{
    console.log("Meow")
}
}

export default Cat