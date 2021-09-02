const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Can initiate Employee object", () => {
    const e = new Employee("hudson", 9332536, "hudson@hudson.com");
    expect(typeof e).toBe("object");
  });

  test("Can set name via constructor arguments", () => {
    const name = "Hudson";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("Can set id number via constructor arguments", () => {
    const id = 92348756;
    const e = new Employee("Foo", id);
    expect(e.id).toBe(id);
  });

  test("Can set email number via constructor arguments", () => {
    const email = "foo@foo.com";
    const e = new Employee("Foo", 92348756, email);
    expect(e.email).toBe(email);
  });

  test(".getRole() returns ''", () => {
    const e = new Employee("Hudson", 982345476, "hudsonhancock@gmail.com");
    expect(e.getRole()).toMatch("");
  });

  test(".getName() returns argument input", () => {
    const e = new Employee("Hudson", 982345476, "hudsonhancock@gmail.com");
    expect(e.getName()).toMatch("Hudson");
  });

  test(".getId() returns argument input", () => {
    const e = new Employee("Hudson", 982345476, "hudsonhancock@gmail.com");
    expect(e.getId()).toBe(982345476);
  });

  test(".getEmail() returns argument input", () => {
    const e = new Employee("Hudson", 982345476, "hudsonhancock@gmail.com");
    expect(e.getEmail()).toBe("hudsonhancock@gmail.com");
  });
});
