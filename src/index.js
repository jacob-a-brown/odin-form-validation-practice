import "./style.css";

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email + .error-msg");

emailInput.addEventListener("blur", () =>{
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const input = emailInput.value;
  if (input === ""){
    const msg = "An email address must be provided.";
    emailInput.setCustomValidity(msg);
    emailError.textContent = msg;
  } else if (!emailRegEx.test(input)){
    const msg = "A valid email address must be provided.";
    emailInput.setCustomValidity(msg);
    emailError.textContent = msg;
  } else {
    emailInput.setCustomValidity("");
    emailError.textContent = "";
  }
});

const countryInput = document.querySelector("#country");
const countryError = document.querySelector("#country + .error-msg");

countryInput.addEventListener("blur", () => {
  if (countryInput.value === ""){
    const msg = "A country must be provided.";
    countryInput.setCustomValidity(msg);
    countryError.textContent = msg;
  } else {
    countryInput.setCustomValidity("");
    countryError.textContent = "";
  }
});

const postalCodeInput = document.querySelector("#postal-code");
const postalCodeError = document.querySelector("#postal-code + .error-msg");

postalCodeInput.addEventListener("blur", () => {
  if (postalCodeInput.value === ""){
    const msg = "A postal code must be provided.";
    postalCodeInput.setCustomValidity(msg);
    postalCodeError.textContent = msg;
  } else {
    postalCodeInput.setCustomValidity("");
    postalCodeError.textContent = "";
  }
});

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password + .error-msg");

const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector("#confirm-password + .error-msg");

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value === ""){
    const msg = "A password must be provided.";
    passwordInput.setCustomValidity(msg);
    passwordError.textContent = msg;
  } else {
    passwordInput.setCustomValidity("");
    passwordError.textContent = "";

    if (passwordInput.value !== confirmPasswordInput.value) {
      const msg = "The password and its confirmation do not match.";
      confirmPasswordInput.setCustomValidity(msg);
      confirmPasswordError.textContent = msg;
    }
  }
});

confirmPasswordInput.addEventListener("blur", () => {
  if (confirmPasswordInput.value !== passwordInput.value){
    const msg = "The password and its confirmation do not match.";
    confirmPasswordInput.setCustomValidity(msg);
    confirmPasswordError.textContent = msg;
  } else {
    confirmPasswordInput.setCustomValidity("");
    confirmPasswordError.textContent = "";
  }
});

const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {

  allInputs.forEach((input) => {
    const inputId = input.id;
    const inputError = document.querySelector(`#${inputId} + .error-msg`);
    if (input.value === ""){
      input.setCustomValidity("This field is required.");
      inputError.textContent = "This field is required.";
    } else if (input.checkValidity()) {
      // only make valid if it passes the blur checks
      // otherwise keep the errors and messages so that the form doesn't submit
      input.setCustomValidity("");
      inputError.textContent = "";
    }
  });

  if (!form.checkValidity()){
    event.preventDefault();
    alert("Fix errors before submitting.");
  } else {
    alert("High five!");
  }
});