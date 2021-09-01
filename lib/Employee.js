var inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    // Defines new variables.
    this.name = name;
    this.id = id;
    this.email = email;

    let role = "Employee";

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
      return role;
    };
  }
}

const name1 = new Employee("hudson", 1, "hudson@hudson.com");
console.log(name1.getName());
console.log(name1.getId());
console.log(name1.getEmail());
console.log(name1.getRole());

module.exports = Employee;
