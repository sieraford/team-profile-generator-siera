const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

let manager = new Manager()
let engineer = new Engineer()
let intern = new Intern()

const engineers = []
const interns = []

function renderEngineers() {
    let engineersHTML = ""
    for(i=0; i < engineers.length; i++) {
        engineersHTML +=  engineers[i].renderEngineer()
    }
    return engineersHTML
}

function renderInterns() {
    let internsHTML = ""
    for(i=0; i < interns.length; i++) {
        internsHTML += interns[i].renderIntern()
    }
    return internsHTML
}

const generateHTML = ({}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
    <header class="p-5 mb-4 header bg-dark" style="text-align: center">
        <h1 class="display-4 text-white">My Team</h1>
    </header>
    <div class="container">
        <main>
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <h2 class="card-title" style="padding-left: 1rem;padding-top: 0.5rem;">${manager.name}</h2>
                        <h3 class="card-subtitle mb-2 text-muted" style="padding-left: 1rem">${manager.getRole()}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${manager.id}</li>
                            <li class="list-group-item">${manager.email}</li>
                            <li class="list-group-item">${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                ${renderEngineers()}
                ${renderInterns()}
            </div>
        </main>
    </div>
</body>

</html>`;

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  )
}

function checkMenuSelection(answers){
    if(answers.menu == "Add an engineer") {
        inquirer
        .prompt(engineer.questions)
        .then((answers) => {
           let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
           engineers.push(engineer)
           checkMenuSelection(answers)
           return engineers
        })
    } else if(answers.menu == "Add an intern") {
        inquirer
        .prompt(intern.questions)
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            interns.push(intern)
            checkMenuSelection(answers)
            return interns

        }) 
    } else {
        const htmlPageContent = generateHTML(answers);
        writeToFile('index.html', htmlPageContent)
    }
}
  
// Function to initialize app
function init() {
    inquirer
    .prompt(manager.questions)
    .then((answers) => {
       manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
       checkMenuSelection(answers)
    });
}
  
// Function call to initialize app
init();