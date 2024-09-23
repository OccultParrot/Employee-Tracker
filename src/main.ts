// Importing the select prompt

import { select } from "@inquirer/prompts";

import DatabaseFunctions from "./db_functions.js";

/* Main Menu Options:
 - View All Departments
 - View All Roles
 - View All Employees
 - Add a Department
 - Add a Role
 - Add an Employee
 - Update Employee Role
 - Exit
*/

async function Run() {

  // Display title
  console.log("Err... The title will be here in the future lol");

  // Have the user select an action they want to preform on the system
  const selection = await select({
    message: "'ello world!",
    choices: [
      {
        name: "View All Departments",
        value: 1,
        description: "",
      },
      {
        name: "View All Roles",
        value: 2,
        description: "",
      },
      {
        name: "View All Employees",
        value: 3,
        description: "",
      },
      {
        name: "Add a Department",
        value: 4,
        description: "",
      },
      {
        name: "Add a Role",
        value: 5,
        description: "",
      },
      {
        name: "Add an Employee",
        value: 6,
        description: "",
      },
      {
        name: "Update Employee Role",
        value: 7,
        description: "",
      },
      {
        name: "Exit".red,
        value: 0,
        description: "",
      },
    ],
  });

  // Depending on what option they choose run the correct function
  switch (selection) {
    case 1:
      await DatabaseFunctions.ViewAllDepartments();
      break;
    case 2:
      await DatabaseFunctions.ViewAllRoles();
      break;
    case 3:
      await DatabaseFunctions.ViewAllEmployees();
      break;
    case 4:
      await DatabaseFunctions.AddDepartment();
      break;
    case 5:
      await DatabaseFunctions.AddRole();
      break;
    case 6:
      await DatabaseFunctions.AddEmployee();
      break;
    case 7:
      await DatabaseFunctions.UpdateEmployeeRole();
      break;

    case 0:
      console.log("Exiting...");
      process.exit(0);

    // Default response (It shouldn't be possible because its a select prompt lol)
    default:
      console.log("How did you get here??");
      break;
  }
  // Clearing the console to remove last printed data
  
  console.clear();
}

// Run the application!
while (true)
  await Run();
