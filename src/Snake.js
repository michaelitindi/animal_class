import Animal from "./Animal";

class Snake extends Animal{
    constructor(name,age,gender,family){
        super(name,age,gender);
        this.family = family;
    }
    getFamily(){
        return this.family;
    }
    setFamily(family){
        this.family = family;
    }
    sound() {
        console.log("Hiss")
    }
}

export default Snake