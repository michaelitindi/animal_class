class Animal {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
}

module.exports = Animal;
