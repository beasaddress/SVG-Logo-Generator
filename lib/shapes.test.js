const { Shape, Circle, Triangle, Square } = require('../lib/shapes.js');
//making sure the properties of new instances are in the same order as original class
describe('Shape', () => {
    test('should render an instance of Shape class with these velues', () => {
        const shape = new Shape('#ffdea4', 'Hey', '#ffacaa');
        expect(shape.fill).toBe('#ffdea4');
        expect(shape.text).toBe('Hey');
        expect(shape.textColor).toBe('#ffacaa');
    });
    test('should anchor the text in the center', () => {
        const shape = new Shape('#ffdea4','Hey','#ffacaa');
        expect(shape.anchorText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700" fill="#ffacaa">Hey</text>');
    });
});

describe('Circle', () => {
    //this test is checking if a new instance of the circle class is being created
    test('should create an instance of Circle', () => {
        const circle = new Circle('#ffdea4','Hey','#ffacaa');
        expect(circle.fill).toBe('#ffdea4'); 
        expect(circle.text).toBe('Hey');   
        expect(circle.textColor).toBe('#ffacaa');
        
    });
    //and here we are checking if its rendering properly with the renderCircle function
    test('should render a circle with the given colors, text, and text alignment', () => {
        const circle = new Circle('	#ffdea4', 'Hey', '#ffacaa');
        expect(circle.renderCircle()).toBe('<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="150" r="80" stroke="#ffdea4" stroke-width="3"fill="#ffdea4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"fill="#ffacaa">Hey</text></svg>');
    });
});
describe('Triangle', () => {
    //this test is checking if a new instance of the triangle class is being created
    test('should create an instance of Triangle', () => {
        const triangle = new Triangle('#ffdea4','Hey','#ffacaa');
        expect(triangle.fill).toBe('#ffdea4');
        expect(triangle.text).toBe('Hey'); 
        expect(triangle.textColor).toBe('#ffacaa');
               
    });
    //and here we are checking if its rendering properly with the rendertriangle function
    test('should render a triangle with the given colors, text, and text alignment', () => {
        const triangle = new Triangle('#ffdea4','Hey','#ffacaa');
        expect(triangle.renderTriangle()).toBe('<svg height="210" width="500"><polygon points="100,10 10,190 190,190" style="fill:#ffdea4;stroke:#ffdea4;stroke-width:1" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"fill="#ffacaa">Hey</text> </svg>');
    });
});
describe('Square', () => {
    //this test is checking if a new instance of the square class is being created
    test('should create an instance of square', () => {
        const square = new Square('#ffdea4','Hey','#ffacaa');
        expect(square.fill).toBe('#ffdea4');
        expect(square.text).toBe('Hey');
        expect(square.textColor).toBe('#ffacaa');
                
    });
    //and here we are checking if its rendering properly with the renderSquare function
    test('should render a square with the given colors, text, and text alignment', () => {
        const square = new Square('#ffdea4','Hey','#ffacaa');
        expect(square.renderSquare()).toBe('<svg width="400" height="400"><rect width="300" height="300" style="fill:#ffdea4;stroke-width:3;stroke:#ffdea4" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"fill="#ffacaa">Hey</text> </svg>');
    });
});

