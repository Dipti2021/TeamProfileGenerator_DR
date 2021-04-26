const Engineer = require("../lib/Engineer");

test("Create the Github account", () => {
  const team_val = "new_user";
  const emp = new Engineer("x", 1, "example@mail.com", team_val);
  expect(emp.github).toBe(team_val);
});

test("Role should return the values for Engineer", () => {
  const team_val = "Engineer";
  const emp = new Engineer("x", 1, "example@mail.com", "new_user");
  expect(emp.getRole()).toBe(team_val);
});

test("Get the github username", () => {
  const team_val = "new_user";
  const emp = new Engineer("x", 1, "example@mail.com", team_val);
  expect(emp.getGithub()).toBe(team_val);
});