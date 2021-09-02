const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Can initiate Employee object", () => {
    const e = new Engineer("hudson", 9332536, "hudson@hudson.com");
    expect(typeof e).toBe("object");
  });

  test("Can set github username via constructor arguments", () => {
    const github = "hudsonhancock";
    const e = new Engineer(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      github
    );
    expect(e.github).toBe(github);
  });

  test(".getRole() returns 'Engineer'", () => {
    const github = "hudsonhancock";
    const e = new Engineer(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      github
    );
    expect(e.getRole()).toMatch("Engineer");
  });

  test(".getGitHub() returns argument input", () => {
    const github = "hudsonhancock";
    const e = new Engineer(
      "Hudson",
      982345476,
      "hudsonhancock@gmail.com",
      github
    );
    expect(e.getGitHub()).toMatch(github);
  });
});
