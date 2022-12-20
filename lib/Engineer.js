const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {}

    questions = [
        {
          type: 'input',
          name: 'name',
          message: 'What is the engineers\'s name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the engineer\'s employee ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the engineer\'s email address?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the engineer\'s github?',
        },
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: [ "Add an engineer", "Add an intern", "Finish building team"]
        },
      ]

    renderEngineer() {
        return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <h2 class="card-title" style="padding-left: 1rem;padding-top: 0.5rem;">${this.name}</h2>
                <h3 class="card-subtitle mb-2 text-muted" style="padding-left: 1rem">Engineer</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${this.id}</li>
                    <li class="list-group-item">${this.email}</li>
                    <li class="list-group-item">${this.github}</li>
                </ul>
            </div>
        </div>`
    }
}

module.exports = Engineer;