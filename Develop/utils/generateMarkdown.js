// Class Markdown renders all licenses and generates the README.md
class Markdown {

  // Renders the License
  static renderLicenseSection(license) {
    const section = {
      MIT: `MIT License`,
      GPLv2: `GPLv2 License`,
      apache: `Apache License`,
      GPLv3: `GPLv3 License`
    }
    return section[license];
  }

  // Renders the License Link
  static renderLicenseLink(license) {
    const links = {
      MIT: `(https://opensource.org/licenses/MIT)`,
      GPLv2: `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
      apache: `(https://opensource.org/licenses/Apache-2.0)`,
      GPLv3: `(https://www.gnu.org/licenses/gpl-3.0)`
    }
    return links[license];
  }

  // Renders the License Badge
  static renderLicenseBadge(license) {
    const badge = {
      MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,
      GPLv2: `[![License: GPLv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`,
      apache: `[![License: apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`,
      GPLv3: `[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    }
    return badge[license];
  }

  // Generates the README File
  static generateMarkdown(data) {
    return `
  # ${data.title}

  ${this.renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Badges](#Badges)
  - [Questions](#Questions)
  - [Tests](#Tests)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contribution}
  
  ## License
  ${this.renderLicenseSection(data.license)}${this.renderLicenseLink(data.license)}
  
  ## Badges
  ${this.renderLicenseBadge(data.license)}
  
  ## Questions
  ${data.email} - Email me and I will respond as soon as possible.
  
  ${data.github} - https://github.com/${data.github}
  
  ## Tests
  ${data.test}
  `;
  }
}

// Exports Markdown class
module.exports = Markdown;
