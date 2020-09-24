// Write code to define and export the Intern class.  Note: This class should inherit from Employee.
// must require the employee class so it can be inherited
const Intern = require("../lib/Employee");

// extend engineer class to contain school and updated role
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // function to return School name
    getSchool() {
        return this.school;
    }

    // function to insert role of intern vs employee
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;