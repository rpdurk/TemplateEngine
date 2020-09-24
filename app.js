const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?.',
    },
    {
        type: "list",
        name: "status",
        message: "What is your role?",
        choices: [
            "Intern",
            "Engineer",
            "Manager",
        ]
    },
];

// prompt user the above questions. These will be incorporated into the README
const prompt = function() {
    // must return the answers from the user, to be utilized in the README
    return inquirer.prompt(questions)
};

// initiate user information and README creation.
const init = async function(){
    // attempt to do the following
    try {
        // wait for the prompt function to be ran
        const userAnswers = await prompt()
        // console.log(userAnswers);
        // utilize the prompt function to create a response including the username
        username = userAnswers.username;
        // console.log(username);
        // create a variable to hold the api call function in -this will return the github data
        const response = await api(username);
        // console.log("inside init index in 84", response);
        // generate readMe by passing in prompt()answers and api response
        const writeReadMe = generateReadMe(userAnswers, response);
        await writeFileAsync("README.MD", writeReadMe);
        console.log("README successfully generated.")
    } catch (err){
        console.log(err)
    }
};

init();