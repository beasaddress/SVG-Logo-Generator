//importing packages here
const inquirer = require('inquirer');
const fs = require('fs');

//importing what will be my generator
const generator = require('./utils/generator');

//what will be prompted to user thru CLI
const questions = [
    {
        type: "list",
        message: "What shape do you need? Pick one.",
        choices: [
            "Square",
            "Triangle",
            "Circle"
        ]
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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

function init() {
    //prompting the questions with the init function
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your logo...");

    writeToFile("./examples/SVGLogo.svg", generator({...responses}))
    console.log("Logo created!");
    });
}

init();