import Dog from "../src/Dog.js";

test('Dog sound', () => {
    const dog = new Dog("Bosco",5,"Female","German");
    expect(dog.sound()).toBe("Woof");
});

