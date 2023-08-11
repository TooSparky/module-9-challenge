// Calls in libraries for use
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Writes the questions for the prompt
const questions = () => inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: 'Enter your project title'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a short description about your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter the installation instructions'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter the usage information'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter all the contributors for the credits'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Enter the test instructions'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email'
    },
    {
        name: 'github',
        type: 'input',
        message: 'Enter your github username'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select a license',
        choices: [
            'MIT',
            'GPLv2',
            'apache',
            'GPLv3'
        ]
    }
]);

// Writes README.md file
questions() 
    .then((data) => {
        console.log(data);
        // ERROR, NOT A FUNCTION BELOW
        fs.writeFileSync('README.md', generateMarkdown(data));
    })
    .then(() => {
        console.log('Success! Your README.md file has been written.')
    })
    .catch(err => console.log(err));

// Runs functions on startup
const init = () => questions();
init();




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
