var inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    // Defines new variables.
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "";

    // Methods attached to Employee.
    this.getName = () => {
      return name;
    };

    this.getId = () => {
      return id;
    };

    this.getEmail = () => {
      return email;
    };

    this.getRole = () => {
      return this.role;
    };
  }
}

module.exports = Employee;
