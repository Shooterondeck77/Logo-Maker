const { test } = require("node:test");
const { Circle, Square, Triangle} = require("./shapes")

 describe('Circle',() => {
    test('renders correctly',() => {
        const shape = new Circle();
        const color = ('blue')
       // shape.setcolor(color) 
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="100" width="200" fill="${color}"></circle>`)
});
});

 describe('Square',() => {
    test('renders correctly',() => {
        const shape = new Square();
        const color = ('green')
       // shape.setcolor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="300" width="200" fill="${color}"></rect>`)
});
});

describe('Triangle',() => {
    test('renders correctly',() => {
    const shape = new Triangle();
    const color = ('pink')
   // shape.setcolor(color);
    expect(shape.render()).toEqual(`<polygon height="300" width="200" fill="${color}"></polygon>`)
});
});
``