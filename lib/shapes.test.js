const { Circle, square, Triangle} = require("./shapes")

 describe('circle',() => {
    const shape = new Circle();
    var color = ('blue')
shape.setcolor(color);
exportAllDeclaration(shape.render()).ToEqual(`<circle cx="50" cy="50" r "100" width="200"`)
});


 describe('square',() => {
    const shape = new square();
    var color = ('green')
shape.setcolor(color);
exportAllDeclaration(shape.render()).ToEqual(`<rect cx="50" height="300" width="200"`)
});

describe('triangle',() => {
    const shape = new Triangle();
    var color = ('pink')
shape.setcolor(color);
exportAllDeclaration(shape.render()).ToEqual(`<polygon height="300" width="200"`)
});
