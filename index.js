const fs = require('fs');
const { prompt } = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');


class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
        return `
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${this.textElement}
            ${this.shapeElement}
          </svg>
        `;
      }
    
      setTextElement(text, color) {
        this.textElement = `<text x="50" y="50" fill="${color}">${text}</text>`;
      }
    
      setShapeElement(shape) {
        this.shapeElement = shape.render();
      }
    }
    
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'What are the letter of your logo (1-3 letters)?',
            default: 'ABC',
            validate: text => text.length < 4 || 'Three letter or less!!!'
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'what is the color of the text',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'what is the shape of the text',
            choices: ['Circle','Triagle','Square'],
            default: 'triangle'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'what is the shapes color the text',
            default: 'seagreen'
        }
    
    ];
    
    prompt(questions).then((ans) => {
      const svg = new Svg();
      svg.setTextElement(ans.text, ans.textColor);
    
      const shape = new Circle(); // or new Square() or new Triangle()
      svg.setShapeElement(shape);
    
      const svgString = svg.render();

      fs.writeFileSync('logo.svg', svgString, 'utf-8');
      console.log('Generated logo.svg');
    
    });