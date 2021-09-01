var inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => console.log(name);


    this.getId = () => console.log(name);

    this.getEmail = () => console.log(name);

    this.getRole = () => {
      
    };
  }
}

const name1 = new Employee("hudson", 1, "hudson@hudson.com");
console.log(name1);

name1.getName();

module.exports = Employee;
