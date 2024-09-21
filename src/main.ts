// Importing the select prompt
import { select } from "@inquirer/prompts";
import 'colors'; 

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

async function Start() {
    let isRunning: boolean = true;

    // The main loop. When isRunning is set to false then we exit
    while (isRunning) {
        // Display title
        console.log("Err... The title will be here in the future lol");

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
                    name: "Exit".red,
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
                // By setting isRunning to false, the next time the main loop tries to run it will see that isRunning is false and just pass
                isRunning = false;
                break;
            
            // Default response (It shouldn't be possible because its a select prompt lol)
            default:
                console.log("How did you get here??");
                break;
        }

        // Clears previous response
        console.clear();
    }

    // I didn't know regions were a thing is VSCode, cool!! I use them a lot with CLion and InteliJ to help block out sections of code
    //#region exit logic
    
    // Do all exit logic here
    console.log("Exiting...");

    //#endregion

    // When the main loop ends and all exit logic is finished, return
    return;
}

// Run the application!
Start();