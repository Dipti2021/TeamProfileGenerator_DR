const Intern = require("../lib/Intern");

test("Select the school", () => {
  const team_val = "ABCD";
  const emp = new Intern("x", 1, "example@mail.com", team_val);
expect(emp.school).toBe(team_val);
});

test("Return the role of an intern", () => {
  const team_val = "Intern";
  const emp = new Intern("x", 1, "example@mail.com", "ABCD");
  expect(emp.getRole()).toBe(team_val);
});

test("Get the school name", () => {//Use getSchool() 
  const team_val = "ABCD";
  const emp = new Intern("x", 1, "example@mail.com", team_val);
  expect(emp.getSchool()).toBe(team_val);
});