import Bird from "../src/Bird.js";

describe("Bird", () => {
  // Test case for constructor
  test("constructor sets properties correctly", () => {
    const bird = new Bird("Bluey", 3, "Male", "Parrot");

    expect(bird.getName()).toBe("Bluey");
    expect(bird.getAge()).toBe(3);
    expect(bird.getGender()).toBe("Male");
    expect(bird.getSpecies()).toBe("Parrot");
  });

  // Test case for getSpecies method
  test("getSpecies method returns correct species", () => {
    const bird = new Bird("Bluey", 3, "Male", "Parrot");

    expect(bird.getSpecies()).toBe("Parrot");
  });

  // Test case for setSpecies method
  test("setSpecies method sets species correctly", () => {
    const bird = new Bird("Bluey", 3, "Male", "Parrot");

    bird.setSpecies("Sparrow");

    expect(bird.getSpecies()).toBe("Sparrow");
  });

  // Test case for sound method
  test("sound method returns correct sound", () => {
    const bird = new Bird("Bluey", 3, "Male", "Parrot");

    expect(bird.sound()).toBe("Chirp");
  });
});
