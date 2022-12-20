const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }

    questions = [
        {
          type: 'input',
          name: 'name',
          message: 'What is the intern\'s name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the intern\'s employee ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the intern\'s email address?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the intern\'s school?',
        },
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: [ "Add an engineer", "Add an intern", "Finish building team"]
        },
      ]

    renderIntern() {
        return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <h2 class="card-title" style="padding-left: 1rem;padding-top: 0.5rem;">${this.name}</h2>
                <h3 class="card-subtitle mb-2 text-muted" style="padding-left: 1rem">Intern</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.id}</li>
                    <li class="list-group-item">${this.email}</li>
                    <li class="list-group-item">${this.school}</li>
                </ul>
            </div>
        </div>`
    }
}

module.exports = Intern;