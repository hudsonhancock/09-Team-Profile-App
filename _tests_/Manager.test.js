const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Can initiate Manager object", () => {
    const e = new Manager("hudson", 9332536, "hudson@hudson.com", 1);
    expect(typeof e).toBe("object");
  });

  test("Can set officeNumber via constructor arguments", () => {
    const officeNumber = 1;
    const e = new Manager(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      officeNumber
    );
    expect(e.officeNumber).toBe(officeNumber);
  });

  test(".getRole() returns 'Manager'", () => {
    const officeNumber = 1;
    const e = new Manager(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      officeNumber
    );
    expect(e.getRole()).toMatch("Manager");
  });

  test(".getOfficeNumber() returns argument input", () => {
    const officeNumber = 1;
    const e = new Manager(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      officeNumber
    );
    expect(e.getOfficeNumber()).toBe(officeNumber);
  });
});