const students = [];

function CreateStudent(nameInput, ageInput) {
  return {
    name: nameInput,
    age: ageInput,
  };
}

function Student(nameInput, ageInput) {
  this.name = nameInput;
  this.age = ageInput;
}

const SubmitButton = document.getElementById('submit');

function addNewStudent() {
  const nameInput = document.getElementById('name').value;
  const ageInput = parseInt(document.getElementById('age').value);

  // factory function
  // CreateStudent(nameInput, ageInput);

  // constructor function
  new Student(nameInput, ageInput);

  const validatedData = inputValidate(nameInput, ageInput); // Call the inputValidate function to validate the name and age inputs

  // If the input is valid, add the student to the array
  if (validatedData) {
    students.push(validatedData); // Add the validated student data to the 'students' array
    populateTable(); // Update the HTML table with the new student data
  }
}

// validate function
function inputValidate(nameInput, ageInput) {
  // Check if the name input is empty, has less than 3 characters, or is not a valid name (contains numbers)
  if (!nameInput || nameInput.length < 3 || !isNaN(nameInput)) {
    alert('Please Enter Your Full Name'); // Show an alert to the user indicating that the name input is invalid
    return null; // Return null to indicate that the input is not valid
  }
  // Check if the age input is empty, less than 18, or not a valid number
  if (!ageInput || parseInt(ageInput) < 18 || isNaN(ageInput)) {
    alert('Sorry, You are too young or you entered an invalid age'); // Show an alert to the user indicating that the age input is invalid
    return null; // Return null to indicate that the input is not valid
  }
  // If both inputs are valid, return an object containing the validated name and age
  return { nameInput, ageInput };
}

// Render the table row
function populateTable() {
  const table = document.getElementById('table'); // Get a reference to the HTML table element with ID "table"

  // Clear existing rows by setting the innerHTML of the table to an empty string
  table.innerHTML = '';

  // Loop through each student in the 'students' array and create a table row for each student
  students.forEach(function (student, index) {
    const newRow = document.createElement('tr'); // Create a new table row element

    // Create a cell for the student ID and set its content to the index + 1 (index is 0-based)
    const idCell = document.createElement('td');
    idCell.textContent = index + 1;
    newRow.appendChild(idCell);

    // Create a cell for the student's name and set its content to the validated name input
    const nameCell = document.createElement('td');
    nameCell.textContent = student.nameInput;
    newRow.appendChild(nameCell);

    // Create a cell for the student's age and set its content to the validated age input
    const ageCell = document.createElement('td');
    ageCell.textContent = student.ageInput;
    newRow.appendChild(ageCell);

    // Create a cell for the "Remove" button and add a click event listener to remove the student from the 'students' array and update the table
    const actionCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
      students.splice(index, 1); // Remove the student from the 'students' array at the given index
      populateTable(); // Re-populate the table after removing the student
    });
    actionCell.appendChild(removeButton);
    newRow.appendChild(actionCell);

    // Append the new row to the table
    table.appendChild(newRow);
  });

  // Reset the input fields for name and age after adding a student to the table
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
}

// Add a click event listener to the "Submit" button to call the 'addNewStudent' function when the button is clicked
SubmitButton.addEventListener('click', addNewStudent);
