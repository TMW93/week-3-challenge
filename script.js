// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let collect = true;
  //array to store employees
  let employeeData = [];

  while(collect) {
    let employee =  {
      firstName: "",
      lastName: "",
      salary: 0
    }
    //collect the 3 datasets
    let firstNameInput = prompt("Enter first name:");
    let lastNameInput = prompt("Enter last name:");
    let salaryInput = prompt("Enter salary:");
    //store datasets
    employee.firstName = firstNameInput;
    employee.lastName = lastNameInput;
    employee.salary = salaryInput;
    employeeData.push(employee);
    //asks if user wants to continue will break loop if user presses "cancel"
    collect = confirm("Do you want to add another employee?");
  }
  // console.log(employeeData);
  return employeeData;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary;

  //Loops through whole salary array and gives the total sum
  for(let i = 0; i < employeesArray.length; i++) {
    //removing the '$' symbol from the input
    let noSymbol = employeesArray[i].salary.substring(1);
    //Two ways to convert the salary string to an integer
    // let convertedSalary = parseInt(employeesArray[i].salary);
    let convertedSalary = +noSymbol;
    totalSalary = totalSalary + convertedSalary;
  }

  averageSalary = totalSalary / employeesArray.length;
  //Limiting decimal points to 2 places for better visibility
  averageSalary = averageSalary.toFixed(2);

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Gets a random number within 0 - length of array
  let randElement = Math.floor(Math.random() * employeesArray.length);
  let randEmployeeFirstName = employeesArray[randElement].firstName;
  let randEmployeeLastName = employeesArray[randElement].lastName;

  //Combines the first name and last together as one string
  let randEmployee = randEmployeeFirstName.concat(" ", randEmployeeLastName);

  return randEmployee;
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  let averageSalary = displayAverageSalary(employees);
  console.log(`The average employee salary between our ${employees.length} employee(s) is ${averageSalary}.`);

  console.log('==============================');

  let randEmployee = getRandomEmployee(employees);
  console.log(`Congratulations to ${randEmployee}, our random drawing winner!`);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
