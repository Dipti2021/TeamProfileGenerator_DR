//declared all the global variables 
// all the required files in the lib folder
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");   
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

// all the dependencies
const fs = require("fs");
const path = require("path");
const empty_list = [];  
const file_dirname = path.resolve(__dirname, "dist");
const file_path = path.join(file_dirname, "myteam.html");  
const extract_data = require("./lib/renderfile"); 

// begin function and messages to start the code
const begin = () => {
    if (fs.existsSync(file_path)) { // to rewrite an old file
        inquirer.prompt({
            type: "confirm",
            message: "Your 'dist' folder already contains a 'myteam.html' file with specific details in it. Do you want to overwrite it?",
            name: "rewrite"  
        }).then(async (response) => {

            let rewrite = response.rewrite;
            if (await rewrite === true) {// greeting message after you have overwritten the previous code
                console.log("Hello Everyone, Welcome to my Team Profile Generator App. Let's get started with creating your team.")
                add_new()
            } else if (await rewrite === false) {
                console.log("Sorry, your file cannot be overwritten. Please try again")
            }
        })
    } else {
        console.log(" Let's create your team")
        add_new()
    }
};   


// Questions that are common for all the employees
const quest = [           
    {
        type: "input",
        message:"Please enter the name of the employee: ",
        name: "emp_name"
    },
    {
        type: "input",
        name: "emp_email",
        message: "Enter the email for the employee: "
    },
    {
        type: "input",
        name: "emp_id",
        message: "Enter the id number for the employee: "
    },
    {
        type: "list",
        name: "emp_role",
        message: "Choose the type of role that best suits the employee: ",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ]

    // Questions that are only for the manager(s)
    quest_manager = [ 
        {
            type: "input",
            name: "emp_office_cont_number",
            message: "Please enter the manager's office contact number: ",
            validate: emp_office_cont_number => {
                if (emp_office_cont_number) { 
                  return true;
                } else {
                  console.log("You are required to enter a contact number");
                  return false;
                }
              }
        }
    ]

    // Questions that are only for the engineer(s)
    quest_engineer = [ 
        {
            type: "input",
            name: "emp_github",
            message: "Please enter the engineer's Github Username: ",
            validate: emp_github => {
                if (emp_github) {
                  return true;
                } else {
                  console.log("You are required to enter a username");
                  return false;
                }
              }
        }
    ]

    // Questions that are only for the intern(s)
    quest_intern = [

        {
            type: "input",
            name: "school",
            message: "Please enter the name of the school from where the intern has studied.If he/she has still not completed his school then type 'Not Applicable' : ",
            validate: school => {
                if (school) {
                  return true;
                } else {
                  console.log("You are required to enter a school name");
                  return false;
                }
              }
        }
    ]

    // Create a newunction to add new employees
const add_new = async () => {
    await inquirer.prompt(quest)
      .then((response) => {
        let emp_name = response.emp_name;
        let emp_id = response.emp_id;
        let emp_email = response.emp_email;
        let emp_role = response.emp_role;
        let emp_office_cont_number;
        let emp_github;
        let school;

        if (emp_role === "Engineer") {
        inquirer.prompt(quest_engineer).then((response) =>{
            emp_github = response.emp_github;
            let employee = new Engineer(emp_name, emp_id, emp_email, emp_github);
            empty_list.push(employee);
            add_newemployee(empty_list);
            });
        }
        else if (emp_role === "Manager") {
            inquirer.prompt(quest_manager).then((response) =>{
                    emp_office_cont_number = response.emp_office_cont_number;
                    let employee = new Manager(emp_name, emp_id, emp_email, emp_office_cont_number);
                    empty_list.push(employee);
                    add_newemployee(empty_list);
                });
            }
        else if (emp_role === "Intern") {
            inquirer.prompt(quest_intern).then((response) =>{
                    school = response.school;
                    let employee = new Intern(emp_name, emp_id, emp_email, school);
                    empty_list.push(employee);
                    add_newemployee(empty_list);
                });
        }

    });    

};



    // optional
    //function for adding a new employee of any type.It will keep on working till you enter n.
    const add_newemployee = async (array) => {
       await inquirer
        .prompt({
            type: "confirm",
            name: "add_newemployee",
            message: "Would you like to add another employee to your team?"

        }).then(async (response) => {
            var make_new = response.add_newemployee;  
            if (await make_new === true) {
                add_new();
            } else if (await make_new === false) {if (!fs.existsSync(file_dirname)) {fs.mkdirSync(file_dirname)}

           
            
            fs.writeFile(file_path, extract_data(array), (err) => {
                if (err) {return console.log(err);}
                console.log("Congratulations!! Your myteam.html file has been generated with all the details provided by you.Please check your dist folder for more details");
            });

        }
    })
};
    // Function call to initialize app
    begin();
