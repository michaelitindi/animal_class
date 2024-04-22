import Animal from "./Animal.js";

class Dog extends Animal{
    constructor(name,age,gender,breed){
        super(name,age,gender);
        this.breed = breed;
    }
    getBreed(){
        return this.breed;
    }
    setBreed(breed){
        this.breed = breed;
    }
     sound() {
       return "Woof";
    }

}
export default Dog
