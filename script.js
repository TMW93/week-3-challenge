// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let collect = true;
  //array to store employees
  let employeeData = {
    firstName: [],
    lastName: [],
    salary: []
  }

  while(collect) {
    //collect the 3 datasets
    let nameFirst = prompt("Enter first name:");
    let nameLast = prompt("Enter last name:");
    let yearlySalary = prompt("Enter salary:");
    //store datasets
    employeeData.firstName.push(nameFirst);
    employeeData.lastName.push(nameLast);
    employeeData.salary.push(yearlySalary);
    //asks if user wants to continue will break loop if user presses "cancel"
    collect = confirm("Do you want to add another employee?");
    console.log(collect);
    if(!collect) {
      break;
    }
  }

  console.table(employeeData);
  return employeeData;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  let averageSalary;

  //Loops through whole salary array and gives the total sum
  for(let i = 0; i < employeesArray.length; i++) {
    totalSalary = totalSalary + employeesArray[i];
  }

  averageSalary = totalSalary / employeesArray.length;

  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  //Gets a random number within 0 - length of array
  let randElement = Math.floor(Math.random() * employeesArray.length);
  let randEmployee = employeesArray[randElement];

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

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

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
