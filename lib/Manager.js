// Write code to define and export the Manager class. Note: This class should inherit from Employee.
// must require the employee class so it can be inherited
const Intern = require("../lib/Employee");

// extend engineer class to contain office number and updated role
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // function to return office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // function to insert role of manager vs employee
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;