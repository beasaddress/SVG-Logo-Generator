const { Shape, Circle, Triangle, Square } = require('../lib/shapes.js');

describe('Shape', () => {
    test('should render an instance of Shape class with these velues', () => {
        const shape = new Shape('#888','#ppp', 'Hey');
        expect(shape.fill).toBe('#888');
        expect(shape.textColor).toBe('#ppp');
        expect(shape.text).toBe('Hey');
    });
    test('should anchor the text in the center', (), => {
        const shape = new Shape('#888','#ppp', 'Hey');
        expect(shape.anchorText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60%" font-weight="700" fill="#ppp">Hey</text>');
    });
});

