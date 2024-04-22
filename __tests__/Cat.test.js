import Cat from "../src/Cat.js";

test('Cat sound', () => {
    const cat = new Cat("Taylor",15,"Male");
    expect(cat.sound()).toBe("Meow");
});

