const { questions } = require('./lib');
const { prompt } = require('inquirer');

prompt(questions).then(ans => {
    console.log(ans);
})
class Svg{
constructor(){
    this.textElement = ''
    this.shapeElement = ''

}
render (){
    return <Svg version ="1.2" xmlns="http://www.w3.org/2000/svg" width= "300" height="200"></Svg> 
}
setTextElement(text,color){
    this.textElement = <text x="150" y="125" font-size="60"></text>
}
setShapeElement(shape){
this.shapeElement = shape.render()
}
}