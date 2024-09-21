import 'colors';
import { input, search, confirm } from '@inquirer/prompts';

import { pool, connectToDb } from './connection.js'

connectToDb();

/**
 * Holds the data for a department that matches the columns of the department table in the database
 */
class Department {
    id: number;
    name: string;

    constructor(id:number, name:string) {
        if (name.length > 30) {
            throw new Error("Name cannot be over 30 characters.")
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
            throw new Error("Title cannot be over 30 characters.")
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
class Employee {
    id: number;
    firstName: string;
    lastName: string;
    roleId: number;
    managerId: number | null;

    constructor(id: number, firstName: string, lastName: string, roleId: number, managerId: number) {
        if (firstName.length > 30) {
            throw new Error("First name cannot be over 30 characters.")
        } else if (lastName.length > 30) {
            throw new Error("Last name cannot be over 30 characters.")
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }
}


class DatabaseFunctions {
    constructor() {}

    /**
     * 
     * @returns An arroy of strings holding all the departments in the database
     */
    private async GetDepartments(): Promise<Department[]> {
        return [];
    }

    /**
     * 
     * @returns An arroy of strings holding all the roles in the database
     */
    private async GetRoles(): Promise<Role[]> {
        return [];
    }

    /**
     * 
     * @returns An arroy of strings holding all the employees in the database
     */
    private async GetEmployees(): Promise<Employee[]> {
        return [];
    }

    // Prints all departments found in the database in a formated table
    async ViewAllDepartments(): Promise<void> {
    
    }
    
    // Prints all roles found in the database in a formated table
    async ViewAllRoles(): Promise<void> {
        
    }
    
    // Prints all employees found in the database in a formated table
    async ViewAllEmployees(): Promise<void> {
        
    }
    
    // Adds a department to the database
    async AddDepartment(): Promise<void> {
        
    }
    
    // Adds a role to the database
    async AddRole(): Promise<void> {
        
    }
    
    // Adds a employee to the database
    async AddEmployee(): Promise<void> {
        
    }
    
    // Updates the role of the employee
    async UpdateEmployeeRole(): Promise<void> {
        
    }
}

export default new DatabaseFunctions();