const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  else if(MIT) {
    return `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if(GPLv2) {
    return `(https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
  }
  else if(apache) {
    return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if(GPLv3) {
    return `(https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  else if(MIT) {
    return `(https://opensource.org/licenses/MIT)`;
  }
  else if(GPLv2) {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  else if(apache) {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  }
  else if(GPLv3) {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  else if(MIT) {
    return `[![License: MIT]]`;
  }
  else if(GPLv2) {
    return `[![License: GPL v2]]`;
  }
  else if(apache) {
    return `[![License]]`;
  }
  else if(GPLv3) {
    return `[![License: GPL v3]]`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Constibution)
- [Credits](#Credits)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.contribution}

## Questions
${data.email} - Email me and I will respond as soon as possible.

${data.github} - https://github.com/${data.github}

## Tests
${data.test}
`;
}

module.exports = generateMarkdown;
