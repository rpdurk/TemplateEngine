// Write code to define and export the Employee class
class Employee {
    // constructor and specific results of each
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    // function to return name
    getName() {
        return this.name;
    }

    // function to return id
    getId() {
        return this.id;
    }

    // function to return email
    getEmail() {
        return this.email;
    }

    // function to return role as Employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;