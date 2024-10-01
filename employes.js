// Array to hold employee data
let employees = [];

// Function to add employee
function addEmployee() {
    let name = document.getElementById('employeeName').value;
    let position = document.getElementById('employeePosition').value;
    let age = document.getElementById('employeeAge').value;
    let department = document.getElementById('employeeDepartment').value;

    if (name && position && age && department) {
        let employee = {
            name: name,
            position: position,
            age: age,
            department: department
        };

        // Add employee to array
        employees.push(employee);

        // Update the employee table
        displayEmployees();

        // Clear input fields
        document.getElementById('employeeName').value = '';
        document.getElementById('employeePosition').value = '';
        document.getElementById('employeeAge').value = '';
        document.getElementById('employeeDepartment').value = '';
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to display employees
function displayEmployees() {
    let tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        let row = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.age}</td>
                <td>${employee.department}</td>
                <td><button onclick="removeEmployee(${index})">Remove</button></td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

// Function to remove employee
function removeEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}
