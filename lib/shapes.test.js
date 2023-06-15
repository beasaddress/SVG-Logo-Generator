const { Shape, Circle, Triangle, Square } = require('../lib/shapes.js');

describe('Shape', () => {
    test('should render an instance of Shape class with these velues', () => {
        const shape = new Shape('#ffdea4','#ffacaa', 'Hey');
        expect(shape.fill).toBe('ffdea4');
        expect(shape.textColor).toBe('#ffacaa');
        expect(shape.text).toBe('Hey');
    });
    test('should anchor the text in the center', () => {
        const shape = new Shape('#ffdea4','#ffacaa', 'Hey');
        expect(shape.anchorText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700" fill="#ffacaa">Hey</text>');
    });
});

describe('Circle', () => {
    //this test is checking if a new instance of the circle class is being created
    test('should create an instance of Circle', () => {
        const circle = new Circle('#ffdea4','#ffacaa', 'Hey');
        expect(circle.fill).toBe('#ffdea4');
        expect(circle.text).toBe('Hey');
        expect(circle.textColor).toBe('#ffacaa');
    });
    //and here we are checking if its rendering properly with the renderCircle function
    test('should render a circle with the given colors, text, and text alignment', () => {
        const circle = new Circle('	#ffdea4','#ffacaa', 'Hey');
        expect(circle.renderCircle()).toBe('<svg height="100" width="100"> <circle cx="50" cy="50" r="40" stroke="#ffdea4" stroke-width="3" fill="#ffdea4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700" fill="#ffacaa">Hey</text></svg>');
    });
});
describe('Triangle', () => {
    //this test is checking if a new instance of the triangle class is being created
    test('should create an instance of Triangle', () => {
        const triangle = new Triangle('#ffdea4','#ffacaa', 'Hey');
        expect(triangle.fill).toBe('#ffdea4');
        expect(triangle.textColor).toBe('#ffacaa');
        expect(triangle.text).toBe('Hey');        
    });
    //and here we are checking if its rendering properly with the rendertriangle function
    test('should render a triangle with the given colors, text, and text alignment', () => {
        const triangle = new Triangle('#ffdea4','#ffacaa', 'Hey');
        expect(triangle.renderTriangle()).toBe('<svg height="210" width="500"><polygon points="200,10 250,190 160,210" style="fill:#ffdea4;stroke:#ffdea4;stroke-width:1" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"fill="#ffacaa">Hey</text> </svg>');
    });
});
describe('Square', () => {
    //this test is checking if a new instance of the square class is being created
    test('should create an instance of square', () => {
        const square = new Square('#ffdea4','#ffacaa', 'Hey');
        expect(square.fill).toBe('#ffdea4');
        expect(square.textColor).toBe('#ffacaa');
        expect(square.text).toBe('Hey');        
    });
    //and here we are checking if its rendering properly with the renderSquare function
    test('should render a square with the given colors, text, and text alignment', () => {
        const square = new Square('#ffdea4','#ffacaa', 'Hey');
        expect(square.renderSquare()).toBe('<svg width="400" height="400"><rect width="300" height="300" style="fill:#ffdea4;stroke-width:3;stroke:#ffdea4" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700"fill="#ffacaa">Hey</text> </svg>');
    });
});

