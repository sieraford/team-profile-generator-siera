const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    questions = [
        {
          type: 'input',
          name: 'name',
          message: 'What is the team manager\'s name?',
        },
        {
          type: 'input',
          name: 'id',
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

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;