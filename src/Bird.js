import Animal from "./Animal.js";

class Bird extends Animal{
    constructor(name,age,gender,species){
        super(name,age,gender);
        this.species = species;
    }
    getSpecies(){
        return this.species;
    }
    setSpecies(species){
        this.species = species;
    }
    sound() {
        return  "Chirp";
    }
}

export default Bird