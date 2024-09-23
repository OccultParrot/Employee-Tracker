import "colors";
import { input } from "@inquirer/prompts";
import { QueryResult } from "pg";

import { pool, connectToDb } from "./connection.js";

connectToDb();

/**
 * Holds the data for a department that matches the columns of the department table in the database
 */
class Department {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    if (name.length > 30) {
      throw new Error("Name cannot be over 30 characters.");
    }

    this.id = id;
    this.name = name;
  }
}

/**
 * Holds the data for a role that matches the columns of the role table in the database
 */
class Role {
  id: number;
  title: string;
  salary: number;
  departmentId: number;

  constructor(id: number, title: string, salary: number, departmentId: number) {
    if (title.length > 30) {
      throw new Error("Title cannot be over 30 characters.");
    }

    this.id = id;
    this.title = title;
    this.salary = salary;
    this.departmentId = departmentId;
  }
}

/**
 * Holds the data for a employee that matches the columns of the employee table in the database
 */
// class Employee {
//     id: number;
//     firstName: string;
//     lastName: string;
//     roleId: number;
//     managerId: number | null;

//     constructor(id: number, firstName: string, lastName: string, roleId: number, managerId: number) {
//         if (firstName.length > 30) {
//             throw new Error("First name cannot be over 30 characters.")
//         } else if (lastName.length > 30) {
//             throw new Error("Last name cannot be over 30 characters.")
//         }

//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.roleId = roleId;
//         this.managerId = managerId;
//     }
// }

class DatabaseFunctions {
  constructor() {}

  /**
   *
   * @returns An array of strings holding all the departments in the database
   */
  private async GetDepartments(): Promise<Department[]> {
    return new Promise((resolve, reject) => {
      const outputArray: Department[] = [];
      pool.query(
        "SELECT * FROM department",
        [],
        (err: Error, result: QueryResult) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            result.rows.forEach((row) => {
              const department: Department = new Department(
                row.id,
                row.department_name
              );
              outputArray.push(department);
            });
            resolve(outputArray);
          }
        }
      );
    });
  }

  /**
   *
   * @returns An array of strings holding all the roles in the database
   */
  private async GetRoles(): Promise<Role[]> {
    return new Promise((resolve, reject) => {
      const outputArray: Role[] = [];
      pool.query(
        "SELECT * FROM role",
        [],
        (err: Error, result: QueryResult) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            result.rows.forEach((row) => {
              const role: Role = new Role(
                row.id,
                row.title,
                row.salary,
                row.department_id
              );
              outputArray.push(role);
            });
            resolve(outputArray);
          }
        }
      );
    });
  }

  /**
   *
   * @returns An array of strings holding all the employees in the database
   */
  // private async GetEmployees(): Promise<Employee[]> {
  //     return [];
  // }

  // Prints all departments found in the database in a formatted table
  async ViewAllDepartments() {
    console.clear();
    // The maximum length a string can be in the database "VARCHAR(30)"
    const maxStringLength = 30;

    // The array holding all the departments
    const departmentArray: Department[] = await this.GetDepartments();

    // Printing the table's title centered. it adds spaces that are equal to the maximum string length (plus 5 for the ids length)
    // minus the title so that we have an offset
    // Then we divide that offset by 2 so that the spaces are halfway making the padding to center the title!
    console.log(
      " ".repeat((maxStringLength + 5 - "Departments".length) / 2) +
        "Departments"
    );

    // Printing table column headers.
    console.log(
      "Department Name" +
        " ".repeat(maxStringLength - "Department Name".length) +
        "│ " +
        "ID"
    );
    // The dividing line
    console.log("─".repeat(maxStringLength) + "┼" + "─────");

    departmentArray.forEach((department) => {
      const padding = maxStringLength - department.name.length;
      // Printing each row of the table
      console.log(
        department.name.yellow +
          " ".repeat(padding) +
          "│ " +
          department.id.toString().bold
      );
    });

    // Adding a new line to add a margin of white space around the table
    console.log();
    // Resumes after the user presses enter
    await input({ message: "Press Enter to continue..." });
  }

  // Prints all roles found in the database in a formatted table
  async ViewAllRoles() {
    // The list of departments in the database
    const departments: Department[] = await this.GetDepartments();
    // The list of roles in the database
    const roles: Role[] = await this.GetRoles();
    // The maximum length a string can be in the database "VARCHAR(30)"
    const maxStringLength: number = 30;

    // Printing the table column headers
    console.log(
      "Title" +
        " ".repeat(maxStringLength - "Title".length) +
        "│ " +
        "ID" +
        " ".repeat(2) +
        "│ " +
        "Salary" +
        " ".repeat(maxStringLength / 2 - "Salary".length) +
        "│ " +
        "Department (ID)"
    );

    // Printing the divider
    console.log(
      "─".repeat(maxStringLength) +
        "┼" +
        "─".repeat(5) +
        "┼" +
        "─".repeat(maxStringLength / 2 + 1) +
        "┼" +
        "─".repeat(maxStringLength)
    );

    // Getting the department connected to the roles ID 
    roles.forEach((role) => {
      let departmentInfo: Department = new Department(NaN, "N/A");
      departments.forEach((department) => {
        if (department.id == role.departmentId) {
          departmentInfo = new Department(department.id, department.name);
        }
      });

      // Printing each row!
      console.log(
        role.title.yellow +
          " ".repeat(maxStringLength - role.title.length) +
          "│ " +
          role.id +
          " ".repeat(4 - role.id.toString().length) +
          "│ " +
          role.salary +
          " ".repeat(maxStringLength / 2 - role.salary.toString().length) +
          "│ " +
          departmentInfo.name.yellow,
        "(".gray + departmentInfo.id.toString().gray + ")".gray
      );
    });

    console.log();
    await input({ message: "Press enter to continue" });
  }

  // Prints all employees found in the database in a formatted table
  async ViewAllEmployees() {}

  // Adds a department to the database
  async AddDepartment() {}

  // Adds a role to the database
  async AddRole() {}

  // Adds a employee to the database
  async AddEmployee() {}

  // Updates the role of the employee
  async UpdateEmployeeRole() {}
}

export default new DatabaseFunctions();
