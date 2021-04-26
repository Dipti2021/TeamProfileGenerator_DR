const Employee = require('./Employee');

class Manager extends Employee {
	constructor(id, name, email, emp_office_cont_number) {
		super(id, name, email);
		this.emp_office_cont_number = emp_office_cont_number;
	}
	getOfficeNumber() {return this.emp_office_cont_number;}
	getRole() {return 'Manager';}

}

module.exports = Manager;