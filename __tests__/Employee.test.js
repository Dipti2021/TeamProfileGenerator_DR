const Employee = require("../lib/Employee");

test(" Take a class definition and create an object ", () => {
  const emp = new Employee(); expect(typeof(emp)).toBe("object");
});
// set the values for name id and email
test("Set the name", () => {
  const name = "DR";
  const emp= new Employee(name); expect(emp.name).toBe(name);
});

test("Set the id", () => {
  const team_val = 9999;
  const emp = new Employee("x", team_val); expect(emp.id).toBe(team_val);
});

test("Set the email", () => {
  const team_val = "example@mail.com";
  const emp = new Employee("x", 1, team_val); expect(emp.email).toBe(team_val);
});

// get the values for name id and email
test("Get the name", () => {// get the name from getName function
  const team_val = "DR";
  const emp = new Employee(team_val);
  expect(emp.getName()).toBe(team_val);
});

test("Get the id", () => {// use getid()
  const team_val = 9999;
  const emp = new Employee("x", team_val); expect(emp.getId()).toBe(team_val);
});

test("Get the email", () => { // from getEmail()
  const team_val = "example@mail.com";
  const emp = new Employee("x", 1, team_val);expect(emp.getEmail()).toBe(team_val);
});

test("the role, that returns the employee", () => {
  const team_val = "Employee";
  const emp = new Employee("DR", 1, "example@mail.com");
  expect(emp.getRole()).toBe(team_val);
});