import Cow from "../src/Cow.js";

test('Cow sound', () => {
    const cow = new Cow("Doreen",5,"Female","Heifer");
    expect(cow.sound()).toBe("Moo");
});

