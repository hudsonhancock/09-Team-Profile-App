const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Can initiate Intern object", () => {
    const e = new Intern(
      "hudson",
      9332536,
      "hudson@hudson.com",
      "Lee University"
    );
    expect(typeof e).toBe("object");
  });

  test("Can set school via constructor arguments", () => {
    const school = "Lee University";
    const e = new Intern(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      school
    );
    expect(e.school).toBe(school);
  });

  test(".getRole() returns 'Intern'", () => {
    const school = "Lee University";
    const e = new Intern(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      school
    );
    expect(e.getRole()).toMatch("Intern");
  });
});
