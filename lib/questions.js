const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What are the letter of your logo (1-3 letters)?',
        default: 'ABC',
        validate: text => text.length < 3 || 'Three letter or less!!!'
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
        message: 'what is the shapeof the text',
        choices: ['circle','triagle','square'],
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