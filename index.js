const render = require("./src/page-template.js");
var inquirer = require("inquirer");
var fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [];
const idArray = [];

function writeFile(team) {
  fs.writeFile(outputPath, render(team), "utf-8");
}

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID number?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        },
      },
      //TODO:Checks if the user wants to add another employee
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      team.push(manager);
      console.log(team);
      createTeam();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "memberChoice",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }

      function addEngineer() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the Engineer's name?",
              name: "engineerName",
            },
            {
              type: "input",
              name: "engineerId",
              message: "What is the engineer's ID number?",
              validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return "Please enter a positive number greater than zero.";
              },
            },
            {
              type: "email",
              message: "What is the Engineer's email address?",
              name: "engineerEmail",
            },
            {
              type: "github",
              message: "What is the Engineer's github username?",
              name: "engineerGitHub",
            },
          ])
          .then((answers) => {
            const engineer = new Engineer(
              answers.engineerName,
              answers.engineerId,
              answers.engineerEmail,
              answers.engineerGitHub
            );
            team.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
          });
      }

      function addIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the intern's name?",
              name: "internName",
            },
            {
              type: "input",
              name: "internId",
              message: "What is the intern's ID number?",
              validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return "Please enter a positive number greater than zero.";
              },
            },
            {
              type: "email",
              message: "What is the intern's email address?",
              name: "internEmail",
            },
            {
              type: "github",
              message: "What is the intern's school?",
              name: "internSchool",
            },
          ])
          .then((answers) => {
            const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            team.push(intern);
            idArray.push(answers.internId);
            createTeam();
          });
      }
      function buildTeam() {
        writeFile();
        console.log(team);
      }
    });
}

// const team = [
//   {
//     name: "Hudson",
//     id: 1,
//     email: "hudson@hudson.com",
//     role: "manager",
//   },
//   {
//     name: "Laura",
//     id: 2,
//     email: "laura@laura.com",
//     role: "engineer",
//   },
//   {
//     name: "Copeland",
//     id: 3,
//     email: "copey@copey.com",
//     role: "intern",
//   },
// ];

init();

// console.log(render(team));
