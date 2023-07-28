// const submitButton = document.getElementById('submit');
// const registrationForm = document.getElementById('registrationForm');
// const errList = document.getElementById('err-list');
// const errContainer = document.querySelector('.err');

// registrationForm.addEventListener('submit', function (event) {
//   errContainer.style.display = 'none';
//   validateInputs(event);
//   setInterval(function () {
//     errList.innerHTML = '';
//     errContainer.style.display = 'none';
//   }, 3000);
// });

// registrationForm.addEventListener('reset', function (event) {
//   errList.innerHTML = '';
//   errContainer.style.display = 'none';
// });

// function validateName(name) {
//   const nameRegex = /^[A-Za-z\s]{3,50}$/;
//   return nameRegex.test(name);
// }

// function validateEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// }

// function validatePassword(password) {
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
//   return passwordRegex.test(password);
// }

// function validateInputs(event) {
//   event.preventDefault();
//   errList.innerHTML = '';
//   errContainer.style.display = 'none';

//   const nameInput = document.getElementById('name').value;
//   const emailInput = document.getElementById('email').value;
//   const passwordInput = document.getElementById('password').value;

//   let isValid = true;

//   if (!validateName(nameInput)) {
//     errList.innerHTML += `<li>Please Enter A Valid Name</li>`;
//     isValid = false;
//   }

//   if (!validateEmail(emailInput)) {
//     errList.innerHTML += `<li>Please Enter A Valid Email</li>`;
//     isValid = false;
//   }

//   if (!validatePassword(passwordInput)) {
//     errList.innerHTML += `<li>Please Enter A Valid Password</li>`;
//     isValid = false;
//   }

//   if (isValid) {
//     registrationForm.submit();
//   } else {
//     errContainer.style.display = 'block';
//   }
// }
// // store elements in variables
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const form = document.getElementById('registrationForm');

// // regexp pattern
// const nameRegex = /^[A-Za-z\s]{3,50}$/;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

// // validation function
// function validateInputs(input, regexpPattern) {
//   if (!input.value || !regexpPattern.test(input.value)) {
//     return `<li>Please enter a valid ${input.id}</li>`;
//   }
// }

// // create alerts
// function createAlerts() {
//   const nameAlert = validateInputs(nameInput, nameRegex);
//   const emailAlert = validateInputs(emailInput, emailRegex);
//   const passwordAlert = validateInputs(passwordInput, passwordRegex);
//   return [nameAlert, emailAlert, passwordAlert];
// }

// // show alert
// function showAlerts() {
//   const alerts = createAlerts();
//   const errorList = document.getElementById('err-list');
//   const alertsContainer = document.querySelector('.err');
//   errorList.innerHTML = ''; // Clear the error list before adding new alerts
//   alerts.forEach((alert) => {
//     errorList.innerHTML += alert;
//   });
//   setTimeout(() => {
//     alertsContainer.style.display = 'flex';
//   }, 5000);
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   showAlerts();
// });

const submitButton = document.getElementById('submit');
const registrationForm = document.getElementById('registrationForm');
const errList = document.getElementById('err-list');
const errContainer = document.querySelector('.err');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameRegex = /^[A-Za-z\s]{3,50}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

function validateInputs() {
  errList.innerHTML = '';
  errContainer.style.display = 'none';

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;

  let isValid = true;

  if (!nameRegex.test(nameValue)) {
    errList.innerHTML += `<li>Please enter a valid name</li>`;
    isValid = false;
  }

  if (!emailRegex.test(emailValue)) {
    errList.innerHTML += `<li>Please enter a valid email</li>`;
    isValid = false;
  }

  if (!passwordRegex.test(passwordValue)) {
    errList.innerHTML += `<li>Please enter a valid password</li>`;
    isValid = false;
  }

  if (!isValid) {
    errContainer.style.display = 'block';
  }

  return isValid;
}

registrationForm.addEventListener('submit', function (event) {
  if (!validateInputs()) {
    event.preventDefault();
    setInterval(function () {
      errList.innerHTML = '';
      errContainer.style.display = 'none';
    }, 3000);
  }
});

registrationForm.addEventListener('reset', function () {
  errList.innerHTML = '';
  errContainer.style.display = 'none';
});
