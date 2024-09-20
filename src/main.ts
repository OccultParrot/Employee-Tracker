import { select } from "@inquirer/prompts";

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

let isRunning: boolean = true;

while (isRunning) {
    console.clear();
    // Have the user select an action they want to preform on the system
    const selection = await select({
        message: "'ello world!",
        choices : [
            {
                name: "View All Departments",
                value: 1,
                description: ""
            },
            {
                name: "View All Roles",
                value: 2,
                description: ""
            },
            {
                name: "View All Employees",
                value: 3,
                description: ""
            },
            {
                name: "Add a Department",
                value: 4,
                description: ""
            },
            {
                name: "Add a Role",
                value: 5,
                description: ""
            },
            {
                name: "Add an Employee",
                value: 6,
                description: ""
            },
            {
                name: "Update Employee Role",
                value: 7,
                description: ""
            },
            {
                name: "Exit",
                value: 0,
                description: ""
            },
        ]
    });

    // Depending on what option they choose run the correct function
    switch (selection) {
        case 1:
            // TODO: View All Departments 
            console.log("View All Departments");
            break;
        case 2:
            // TODO: View All Roles
            console.log("View All Roles");
            break;
        case 3:
            // TODO: View All Employees
            console.log("View All Employees");
            break;
        case 4:
            // TODO: Add a Department
            console.log("Add a Department");
            break;
        case 5:
            // TODO: Add a Role
            console.log("Add a Role");
            break;
        case 6:
            // TODO: Add an Employee
            console.log("Add an Employee");
            break;
        case 7:
            // TODO: Update Employee Role
            console.log("Update Employee Role");
            break;
        
        // If they choose "Exit" we want to close the main loop!
        case 0:
            console.log("Exiting Application...");
            isRunning = false;
            break;
        
        // Default response (It shouldn't be possible because its a select prompt lol)
        default:
            console.log("How did you get here??");
            break;
    }
}