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
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"
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
        return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="${this.fill}" stroke-width="3" fill="${this.fill}" />
      ${super.anchorText()}</svg>`
    }
}

//creating triangle class
class Triangle extends Shape {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderTriangle() {
        return `<svg height="210" width="500">
        <polygon points="200,10 250,190 160,210" style="fill:${this.fill};stroke:${this.fill};stroke-width:1" />
        ${super.anchorText()} </svg>`
    }
}

class Square extends Shape {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderSquare(){
        return `<svg width="400" height="400">
        <rect width="300" height="300" style="fill:${this.fill};stroke-width:3;stroke:${this.fill}" />
        ${super.anchorText()} </svg>`
    }
}

module.exports = { Shape, Circle, Triangle, Square }