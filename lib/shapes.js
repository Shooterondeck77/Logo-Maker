class shape{

constructor(){
    this.color=''
}
setColor(color){
    this.color=(color);
    }
}
class Circle extends Shape{
    render(){
            return`<circle cx="50%"  cy="50" r="100" height="300" fill="${this.color}`

    }


}
class Square extends shape{
    render(){
        return`<rect x="50" height="300" width="200"  fill="$(this.color)"/>`
    }
}
class Triangle extends shape{
    render(){
        return`<polygon height="300" width="200" points="0,200 300,200 150,0" fill="$this)/>`

}
};

module.exports = {Circle, Square, Triangle}