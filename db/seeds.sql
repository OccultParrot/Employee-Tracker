-- Seed data was generated by claude.ai

-- Seed data for department table
INSERT INTO department (department_name) VALUES
('Human Resources'),
('Research and Development'),
('Sales and Marketing'),
('Finance and Accounting'),
('Information Technology'),
('Customer Service'),
('Operations'),
('Legal'),
('Executive');

-- Seed data for role table
INSERT INTO role (title, salary, department_id) VALUES
('HR Manager', 85000.00, 1),
('HR Specialist', 55000.00, 1),
('Recruiter', 60000.00, 1),
('R&D Director', 120000.00, 2),
('Senior Researcher', 95000.00, 2),
('Junior Researcher', 65000.00, 2),
('Sales Manager', 90000.00, 3),
('Marketing Specialist', 65000.00, 3),
('Account Executive', 75000.00, 3),
('Finance Director', 115000.00, 4),
('Senior Accountant', 80000.00, 4),
('Financial Analyst', 70000.00, 4),
('IT Director', 125000.00, 5),
('Systems Administrator', 85000.00, 5),
('Software Developer', 90000.00, 5),
('Customer Service Manager', 70000.00, 6),
('Customer Service Rep', 45000.00, 6),
('Operations Manager', 95000.00, 7),
('Logistics Coordinator', 60000.00, 7),
('Legal Counsel', 110000.00, 8),
('Paralegal', 65000.00, 8),
('CEO', 250000.00, 9),
('COO', 220000.00, 9),
('CFO', 220000.00, 9);

-- Seed data for employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Smith', 22, NULL),  -- CEO
('Sarah', 'Johnson', 23, 1),  -- COO
('Michael', 'Williams', 24, 1),  -- CFO
('Emily', 'Brown', 1, 2),  -- HR Manager
('David', 'Jones', 2, 4),  -- HR Specialist
('Jessica', 'Garcia', 3, 4),  -- Recruiter
('Christopher', 'Miller', 4, 2),  -- R&D Director
('Ashley', 'Davis', 5, 7),  -- Senior Researcher
('Matthew', 'Rodriguez', 6, 7),  -- Junior Researcher
('Amanda', 'Martinez', 7, 3),  -- Sales Manager
('Daniel', 'Hernandez', 8, 10),  -- Marketing Specialist
('Jennifer', 'Lopez', 9, 10),  -- Account Executive
('James', 'Gonzalez', 10, 3),  -- Finance Director
('Elizabeth', 'Wilson', 11, 13),  -- Senior Accountant
('Robert', 'Anderson', 12, 13),  -- Financial Analyst
('Patricia', 'Thomas', 13, 2),  -- IT Director
('Joseph', 'Taylor', 14, 16),  -- Systems Administrator
('Linda', 'Moore', 15, 16),  -- Software Developer
('William', 'Jackson', 16, 3),  -- Customer Service Manager
('Barbara', 'Martin', 17, 19),  -- Customer Service Representative
('Richard', 'Lee', 18, 2),  -- Operations Manager
('Susan', 'Perez', 19, 21),  -- Logistics Coordinator
('Charles', 'Thompson', 20, 3),  -- Legal Counsel
('Margaret', 'White', 21, 23),  -- Paralegal
('Thomas', 'Harris', 6, 7),  -- Junior Researcher
('Nancy', 'Clark', 9, 10),  -- Account Executive
('George', 'Lewis', 15, 16),  -- Software Developer
('Karen', 'Robinson', 17, 19),  -- Customer Service Representative
('Edward', 'Walker', 2, 4),  -- HR Specialist
('Lisa', 'Young', 8, 10),  -- Marketing Specialist
('Steven', 'Allen', 14, 16),  -- Systems Administrator
('Donna', 'King', 11, 13),  -- Senior Accountant
('Mark', 'Wright', 5, 7),  -- Senior Researcher
('Sandra', 'Scott', 12, 13),  -- Financial Analyst
('Paul', 'Green', 19, 21),  -- Logistics Coordinator
('Betty', 'Baker', 3, 4),  -- Recruiter
('Donald', 'Nelson', 15, 16),  -- Software Developer
('Dorothy', 'Hill', 17, 19),  -- Customer Service Representative
('Timothy', 'Ramirez', 6, 7),  -- Junior Researcher
('Deborah', 'Campbell', 9, 10),  -- Account Executive
('Jason', 'Mitchell', 14, 16),  -- Systems Administrator
('Helen', 'Roberts', 2, 4),  -- HR Specialist
('Jeffrey', 'Carter', 8, 10),  -- Marketing Specialist
('Carol', 'Phillips', 11, 13);  -- Senior Accountant