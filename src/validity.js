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
  country.addEventListener("focus", checkCountry);
  country.addEventListener("input", checkCountry);
  zipcode.addEventListener("focus", checkZipcode);
  zipcode.addEventListener("input", checkZipcode);
  password.addEventListener("focus", checkPassword);
  password.addEventListener("input", checkPassword);
  confirmpass.addEventListener("focus", checkConfirmPass);
  confirmpass.addEventListener("input", checkConfirmPass);
  form.addEventListener("submit", checkAll.bind(null, Event));
}
function checkAll(Event) {
  if (
    email.validity.valid &&
    country.validity.valid &&
    zipcode.validity.valid &&
    password.validity.valid &&
    confirmpass.validity.valid
  ) {
    let body = document.querySelector(".submit");
    form.style.visibility = "hidden";
    let temp = document.createElement("div");
    temp.textContent = "Congratulations";
    body.appendChild(temp);
    Event.preventDefault();
  }
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
function checkCountry() {
  if (country.validity.valueMissing) {
    country.setCustomValidity("Is a required feild");
  } else {
    country.setCustomValidity("");
  }
  country.reportValidity();
}
function checkZipcode() {
  if (zipcode.validity.valueMissing) {
    zipcode.setCustomValidity("Is a required feild");
  } else {
    zipcode.setCustomValidity("");
    checkType();
  }
  zipcode.reportValidity();
}
function checkType() {
  if (zipcode.validity.typeMismatch) {
    zipcode.setCustomValidity("Please enter only numbers");
  } else {
    zipcode.setCustomValidity("");
  }
  zipcode.reportValidity();
}
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

export { loadListener };
