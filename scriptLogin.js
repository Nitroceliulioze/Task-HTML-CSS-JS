const formSignin = document.getElementById("form-signin");
const formRegister = document.getElementById("form-register");
const password = document.getElementById("password");
const email = document.getElementById("email");
const fName = document.getElementById("name");
const surname = document.getElementById("surname");
const errorElementSignin = document.getElementById("error-signin");
const errorElementRegister = document.getElementById("error-register");
const emailRegistration = document.getElementById("email1");
const emailAgain = document.getElementById("email2");
const passwordRegistration = document.getElementById("password1");
const passwordAgain = document.getElementById("password2");

formSignin.addEventListener("submit", (e) => {
  let messages = [];
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "" || email.value == null) {
    messages.push("Email is required");
  }
  if (emailFormat.test(email.value)) {
    return true;
  } else {
    messages.push("Please enter a valid email");
  }

  if (password.value.length <= 8) {
    messages.push("Password must be longer than 8 characters");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElementSignin.innerText = messages.join(". ");
  }
});

formRegister.addEventListener("submit", (e) => {
  let messages = [];
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value == "" || email.value == null) {
    messages.push("Email is required");
  }
  if (emailFormat.test(email.value)) {
    return true;
  } else {
    messages.push("Please enter a valid email");
  }

  if (password.value.length <= 8) {
    messages.push("Password must be longer than 8 characters");
  }

  if (fName.value == "" || fName.value == null) {
    messages.push("Name is required");
  }
  if (fName.value.length <= 2) {
    messages.push("Password must be longer than 8 characters");
  }

  if (surname.value == "" || surname.value == null) {
    messages.push("Name is required");
  }
  if (surname.value.length <= 2) {
    messages.push("Password must be longer than 8 characters");
  }

  if (emailRegistration.value == "" || emailRegistration.value == null) {
    messages.push("Email is required");
  }
  if (emailFormat.test(emailRegistration.value)) {
    return true;
  } else {
    messages.push("Please enter a valid email");
  }

  if (emailAgain.value != emailRegistration.value) {
    messages.push("Emails do not match");
  }

  if (passwordRegistration.value.length <= 8) {
    messages.push("Password must be longer than 8 characters");
  }

  if (passwordAgain.value != passwordRegistration.value) {
    messages.push("Passwords do not match");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElementRegister.innerText = messages.join(". ");
  }
});

const registerBtn = document.getElementById("register-btn");
const remove = document.getElementById("remove");
const registerConteiner = document.getElementById("register-container");

registerBtn.addEventListener("click", () => {
  openRegistration();
});

function openRegistration() {
  registerConteiner.classList.add("active");
  remove.remove();
}