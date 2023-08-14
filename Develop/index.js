// Calls in libraries & exported pages
const fs = require('fs');
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown.js');

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
        fs.writeFileSync('README.md', Markdown.generateMarkdown(data));
    })
    .then(() => {
        console.log('Success! Your README.md file has been written.')
    })
    .catch(err => console.log(err));

// Runs functions on startup
const init = () => questions();
init();
