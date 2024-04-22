import Animal from "./Animal";

class Cow extends Animal{
    constructor(name,age,gender,cowbreed){
        super(name,age,gender);
        this.cowbreed = cowbreed;
    }
    getCowbreed(){
        return this.cowbreed;
    }
    setCowbreed(cowbreed){
        this.cowbreed = cowbreed;
    }
    sound() {
        console.log("Moo")
    }
}