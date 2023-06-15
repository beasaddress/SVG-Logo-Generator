const { Shape, Circle, Triangle, Square } = require('../lib/shapes.js');

describe('Shape', () => {
    test('should render an instance of Shape class with these velues', () => {
        const shape = new Shape('#888','#ppp', 'Hey');
        expect(shape.fill).toBe('#888');
        expect(shape.textColor).toBe('#ppp');
        expect(shape.text).toBe('Hey');
    });
    test('should anchor the text in the center', () => {
        const shape = new Shape('#888','#ppp', 'Hey');
        expect(shape.anchorText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700" fill="#ppp">Hey</text>');
    });
});

describe('Circle', () => {
    //this test is checking if a new instance of the circle class is being created
    test('should create an instance of Circle', () => {
        const circle = new Circle('#888','#ppp', 'Hey');
        expect(circle.fill).toBe('#888');
        expect(circle.text).toBe('Hey');
        expect(circle.textColor).toBe('#ppp');
    });
    //and here we are checking if its rendering properly with the renderCircle function
    test('should render a circle with the given colors, text, and text alignment', () => {
        const circle = new Circle('#888','#ppp', 'Hey');
        expect(circle.renderCircle()).toBe('<svg height="100" width="100"> <circle cx="50" cy="50" r="40" stroke="#888" stroke-width="3" fill="#888"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700" fill="#ppp">Hey</text></svg>');
    });
});
