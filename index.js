//importing packages here
const inquirer = require('inquirer');
const fs = require('fs');
//importing my classes
const { Circle, Triangle, Square } = require('./lib/shapes.js');

//what will be prompted to user thru CLI
const questions = [
    {
        type: "list",
        message: "What shape do you need? Pick one.",
        name: "shapeChoice",
        choices: [
            'Square',
            'Triangle',
            'Circle'
        ],
        default: "none"

    },
    //here we are prompting for the shapes color by color name of hexideciaml number
    {
        type: "input",
        message: "What color will you shape be? Type color or hexideciaml.",
        name: "shapeColor"
    },
    {
        type: "input",
        message: "Type your logo (No more than 3 letters).",
        name: "text"
    },
];

//creating the SVG with the writeToFile function

//function writeToFile(fileName, data) {
   // return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    //}
//using a switch statement in the init function so that writeToFile is only called based on what shape is in the data from responses
const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            switch (`${data.shape}`) {
                case 'Square':
                    const square = new Square(data.fill, data.text, data.textColor)
                    fs.writeFile('./examples/logo.svg', square.renderSquare(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Logo created");
                        }
                    });
                    break;
                case 'Circle':
                    const circle = new Circle(data.fill, data.text, data.textColor)
                    fs.writeFile('./examples/logo.svg', circle.renderCircle(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Logo created");
                        }
                    });
                    break;
                    case 'Triangle':
                    const triangle = new Triangle(data.fill, data.text, data.textColor)
                    fs.writeFile('./examples/logo.svg', triangle.renderTriangle(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Logo created");
                        }
                    });
                    break;
            }
        });
}

init();