// require manager js
const Manager = require("./lib/Manager");
// require engineer js
const Engineer = require("./lib/Engineer");
// require intern js
const Intern = require("./lib/Intern");
// require inquirer
const inquirer = require("inquirer");
// require path
const path = require("path");
// require fs for write file
const fs = require("fs");

// 
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// require the htmlRenderer js to add each person's info to respective html
const render = require("./lib/htmlRenderer");
// empty array for team member objects to be pushed
const teamMembers = [];

// Code to use inquirer to gather information about the team members,
// and to create objects for each team member (Note to Self: use the correct classes as blueprints)
const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: [
            "Intern",
            "Engineer",
            "Manager",
        ]
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'What school are you currently attending?',
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
    },
]

const addEmployeeQuestions = [
    {
        type: "confirm",
        name: "addEmployee",
        message: "Who you like to add another employee?",
    },
]

// function to call add another function
const addAnotherEmployee = async function() {
    const addEmployeeAnswers = await inquirer.prompt(addEmployeeQuestions);
    if (addEmployeeAnswers.addEmployee) {
        init();
    }
}

// function that adds employees to array based on type
const init = async () => {
    // uses a try because async function
    try {
        // prompt standard set of employee questions + role
        const employeeAnswers = await inquirer.prompt(employeeQuestions);
        // if the answer of role in the role function is manager, do the following
        if (employeeAnswers.role === "Manager") {
            // create a variable to store the answers to manager questions 
            const managerAnswers = await inquirer.prompt(managerQuestions);
            // create a variable for manager that stores constructor by answers
            const manager = new Manager (employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, managerAnswers.office);
            // push variable to array as an object
            console.log('init manager object', manager)
            teamMembers.push(manager);
            addAnotherEmployee();
        } else if  (employeeAnswers.role === "Engineer") {
            // create a variable to store the answers to engineer questions 
            const engineerAnswers = await inquirer.prompt(engineerQuestions);
            // create a variable for engineer that stores constructor by answers
            const engineer = new Engineer (employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, engineerAnswers.github);
            // push variable to array as an object
            console.log('init engineer object', engineer)
            teamMembers.push(engineer);
            const addEmployee = await inquirer.prompt(addEmployeeQuestions);
            addAnotherEmployee();
        } else { (employeeAnswers.role === "Intern") 
            // create a variable to store the answers to intern questions 
            const internAnswers = await inquirer.prompt(internQuestions);
            // create a variable for intern that stores constructor by answers
            const intern = new Intern (employeeAnswers.name, employeeAnswers.email, employeeAnswers.id, internAnswers.school);
            // push variable to array as an object
            console.log('init intern object', intern)
            teamMembers.push(intern);
            const addEmployee = await inquirer.prompt(addEmployeeQuestions);
            addAnotherEmployee();
        }
        } catch (err) {
            console.log(err)
        }
    };

    init();
