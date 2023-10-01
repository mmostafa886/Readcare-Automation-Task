# QA Practical Task

## Contents
- [Testing Approach](#Testing-Approach)
- [Test Cases](#Test-Cases)
- [Findings](#Findings)
- [Automation Task](#Automation-Task)

## Testing Approach
A full description of the 'Testing Approach' can be found [here](TaskDocumentation/Testing_Approach.pdf) in this pdf document.

## Test Cases
A list of possible high level test cases & a detailed case sample can be found [here](TaskDocumentation/TestCases.pdf) in this pdf document.

## Findings
A list of dingins with all the possible info can be found [here](TaskDocumentation/Findings.pdf) in this pdf document.

## Automation Task

- As described in the shared "QA Parctical Task", it is requested to automate a "Business Requirement" at which (A customer is able to successfully add a product to cart via product details page) that can be accessed trhough the website (https://www.shop-apotheke.com/).
- ‘Cypress’ has been used as a web test automation framework using Javascript to prepare the needed Testcase(s).


### Environment Needs
1.  Node.js
2.  VSCode (IDE)
3.  Cypress
4.  Web browsers (at least one of: Chrome, Firefox, Edge)
5.  And of course Internet connection

### How to Run the scripts
- On your local machine
    1. Clone the repo code to a local folder.
    2. Open the terminal in this folder.
    3. Run the below command to install all the project dependencies: '$ npm install'
    4. The 2 previous steps can be done from inside the VSCode.
    5. Run the command (npx cypress run) to execute the script [This will run the script via 'Electron' browser in Headless mode].

### Notes
1.  There are some comments provided on the script for clarification & highlighting of some points.
2.  The data provided to the test script (it was needed only once for selecting the number of items) can be found under the directory(./cypress/fixtures/productInfo.json) so that the script is data driven which helps in minimizing the need for code maintenance when the test data is chnaged.
3.  A set of possible execution commands (covering different browsers configuratios) are mentioned in the 'package.json' in the "scripts" section where they can called using the command 'npm run <command_name>' (Ex. < npm run AllTests-chrome-Headless > which will run all the tests in chrome-headles mode).
4.  There has been a trial to include all the acceptance criteria in one case but it needs more time (That's why there is a skipped test case in the script).
