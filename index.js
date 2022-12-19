const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, employeeId, email, officeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
    <header class="p-5 mb-4 header bg-light" style="text-align: center">
        <h1 class="display-4">My Team</h1>
    </header>
    <div class="container">
        <main>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card" style="width: 18rem;">
                        <h2 class="card-title" style="padding-left: 1rem;padding-top: 0.5rem;">${name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted" style="padding-left: 1rem">Manager</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${employeeId}</li>
                            <li class="list-group-item">${email}</li>
                            <li class="list-group-item">${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>

</html>`;

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name?',
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the team manager\'s employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
    },
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do next?',
        choices: [ "Add an engineer", "Add an intern", "Finish building team"]
      },
  ]

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  )
}
  
// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
         const htmlPageContent = generateHTML(answers);
         writeToFile('index.html', htmlPageContent)
    });
}
  
// Function call to initialize app
init();