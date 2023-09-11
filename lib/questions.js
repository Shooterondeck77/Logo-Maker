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
        name: 'textColor',
        message: 'what is the color of the text',
        default: 'black'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'what is the shape of the text',
        choices: ['Circle','Triangle','Square'],
        default: 'triangle'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'what is the shapes color the text',
        default: 'seagreen'
    }

];

module.exports = questions;