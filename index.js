const inquirer = require("inquirer")
const fs = require('fs')
// const Employee = require ("./lib/Employee")
// const Engineer = require ("./lib/Engineer")
// const Intern = require ("./lib/Intern")
// const Manager = require ("./lib/Manager")
// const team = []
// const generateHTML = ({role, name, email,idNumber, github, school, officeNum})=>

const generateHTML = ({ name, ID, email, github, school, officeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">ID number ${ID}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
    <li class="list-group-item">email: ${email}</li>
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">school: ${school}</li>
      <li class="list-group-item">office number: ${officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


inquirer.prompt([
    {
        type: 'list',
        name: 'position',
        message: 'What is your position?',
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'ID',
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
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    },

])

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('generate-index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
