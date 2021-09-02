const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";

    this.getGitHub = () => {
      return github;
    };

    this.getRole = () => {
      return this.role;
    };
  }
}

module.exports = Engineer;
