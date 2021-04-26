const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Create and set the office contact number", () => {
  const team_val = 9999;
  const emp = new Manager("x", 1, "example@mail.com", team_val);
  expect(emp.officeNumber).toBe(team_val);
});

test("Return the role of Manager", () => {
  const team_val = "Manager";
  const emp = new Manager("x", 1, "example@mail.com", 9999);
  expect(emp.getRole()).toBe(team_val);
});

test("Get the office contact number ", () => {// use getOffice()
  const team_val = 9999;
  const emp = new Manager("x", 1, "example@mail.com", team_val);
  expect(emp.getOfficeNumber()).toBe(team_val);
});