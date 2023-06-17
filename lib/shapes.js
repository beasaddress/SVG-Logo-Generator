//creating shape class
class Shape {
    //properties of Shape
    fill;
    text;
    textColor;
    constructor(fill, text, textColor) {
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }
    //putting a function inside the shape class that will make sure the text is centered in the logo using svg code
    anchorText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
        fill="${this.textColor}">${this.text}</text>`;
    }
}

//creating circle class that will extend shape
class Circle extends Shape {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
        
    }
    renderCircle() {
        //using the svg code for circle from w3schools.org to render the circle and adding our anchored text to the center of it
        return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="150" r="80" stroke="${this.fill}" stroke-width="3" fill="${this.fill}" />
        ${super.anchorText()}</svg>`
    }
}

//creating triangle class
class Triangle extends Shape {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderTriangle() {
        return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 10,190 190,190" style="fill:${this.fill};stroke:${this.fill};stroke-width:1" />
        ${super.anchorText()}</svg>`
    }
}

class Square extends Shape {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderSquare(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" style="fill:${this.fill};stroke-width:3;stroke:${this.fill}" />
        ${super.anchorText()} </svg>`
    }
}

module.exports = { Shape, Circle, Triangle, Square }