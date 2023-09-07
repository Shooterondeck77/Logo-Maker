const { questions } = require('./lib');
const { prompt } = require('inquirer');
const {Circle,Square,Triangle} = require("./lib/shapes");

prompt(questions).then(ans => {
    console.log(ans);
})
class Svg{
constructor(){
    this.textElement = ''
    this.shapeElement = ''

}
render (){
    return 
}
setTextElement(text,color){
    this.textElement = text.render()
}
setShapeElement(shape){
this.shapeElement = shape.render()
}
}