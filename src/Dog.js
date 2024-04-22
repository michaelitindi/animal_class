import Animal from "./Animal";

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
        console.log("Woof")
    }

}
