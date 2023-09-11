const { writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const Svg = require("./lib/svg")
const questions = require('./lib/questions')

const createSvg = () => {
    inquirer.prompt(questions).then((ans) => {
        let shape;
        if (ans.shape === "Circle") {
            shape = new Circle()
        } else if (ans.shape === "Square") {
            shape = new Square()
        } else if (ans.shape === "Triangle") {
            shape = new Triangle()
        }
        
        shape.setColor(ans.shapeColor)

        const svg = new Svg();
        svg.setShapeElement(shape);
        svg.setTextElement(ans.text, ans.textColor);

        const svgRender = svg.render();

        return writeFile('logo.svg', svgRender);
    }).then(() => {
        console.log('Generated logo.svg');
    })
}

createSvg()