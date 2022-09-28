const inquirer = require("inquirer")
const fs = require('fs')
// const Employee = require ("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const generateHTML =require("./src/generateHTML")

const team = []
// const generateHTML = ({role, name, email,idNumber, github, school, officeNum})=>

// const generateHTML = ({ name, ID, email, github, school, officeNumber }) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">ID number ${ID}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//     <li class="list-group-item">email: ${email}</li>
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">school: ${school}</li>
//       <li class="list-group-item">office number: ${officeNumber}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

function generateEmployee() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Would you like to add a new member?',
            choices: ["Manager", "Engineer", "Intern", "No"]
        },

    ])

        .then((answers) => {

            if (answers.position === "Manager") {
                // let newEmployee = new Engineer(answers.name,answers.id,answers.email, answers.github)
                // team.push(newEmployee)
                console.log(answers)
                generateManager()
            }
            else if (answers.position === "Engineer") {
                console.log(answers)

                generateEngineer()
            }
            else if (answers.position === "Intern") {
                console.log(answers)

                generateIntern()
            }
            else {
                console.log("finished")
                console.log(team)
                generateCards()

            }

            //         fs.writeFile('generate-index.html', htmlPageContent, (err) =>
            //           err ? console.log(err) : console.log('Successfully created index.html!')
            // );
        });
}



function generateManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]).then(response => {
        let manager = new Manager(response.name, response.id, response.email, response.officeNumber)

        team.push(manager)
        // insert add new member function here**
        generateEmployee()
    })
}


function generateEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username',
        },
    ]).then(response => {
        let engineer = new Engineer(response.name, response.id, response.email, response.github)

        team.push(engineer)
        // insert add new member function here**
        generateEmployee()
    })
}

function generateIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you go to?',
        },
    ]).then(response => {
        let intern = new Intern(response.name, response.id, response.email, response.school)

        team.push(intern)
        // insert add new member function here**
        generateEmployee()

    })
}
function generateCards() {
    // const htmlPageContent = generateHTML(answers);
            fs.writeFile('generate-index.html', generateHTML(team), (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
}

generateEmployee();