import {
  email,
  country,
  zipcode,
  password,
  confirmpass,
  submit,
  form,
} from "./getElem";

function loadListener() {
  form.onload = addListenterToElem();
}

function addListenterToElem() {
  email.addEventListener("focus", checkEmail);
  email.addEventListener("input", checkEmail);
  country.addEventListener("input", checkCountry);
  zipcode.addEventListener("input", checkZipcode);
  password.addEventListener("focus", checkPassword);
  password.addEventListener("input", checkPassword);
  confirmpass.addEventListener("focus", checkConfirmPass);
  confirmpass.addEventListener("input", checkConfirmPass);
  submit.addEventListener("click", checkSubmit);
}

function checkEmail() {
  if (email.validity.valueMissing) {
    email.setCustomValidity("Is a required feild");
  } else {
    email.setCustomValidity("");
    checkPattern();
  }
  email.reportValidity();
}

function checkPattern() {
  let regex = /[A-Za-z0-9]@gmail.com/;
  if (!regex.test(email.value)) {
    email.setCustomValidity("Invalid Email format");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
}
function checkCountry() {}
function checkZipcode() {}
function checkPassword() {
  if (password.validity.valueMissing) {
    password.setCustomValidity("Is a required feild");
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
}

function checkConfirmPass() {
  if (confirmpass.validity.valueMissing) {
    confirmpass.setCustomValidity("Is a required feild");
  } else {
    confirmpass.setCustomValidity("");
    checkIfSame();
  }
  confirmpass.reportValidity();
}

function checkIfSame() {
  if (password.value != confirmpass.value) {
    confirmpass.setCustomValidity("The passwords do not match");
  } else {
    confirmpass.setCustomValidity("");
  }
  confirmpass.reportValidity();
}
function checkSubmit() {}

export { loadListener };
