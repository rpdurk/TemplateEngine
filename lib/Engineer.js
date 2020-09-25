// Write code to define and export the Engineer class.  Note: This class should inherit from Employee.
// must require the employee class so it can be inherited
const Employee = require("../lib/Employee");

// extend engineer class to contain github account and updated role
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // function to insert role of engineer
    getRole() {
        return 'Engineer';
    }

    // function to return github username
    getGithub() {
        return this.name;
    }
}

module.exports = Engineer;