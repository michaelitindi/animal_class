import Snake from "../src/Snake.js";

test('Snake sound', () => {
    const snake = new Snake("Lucifer",5,"Female","Python");
    expect(snake.sound()).toBe("Hiss");
});

