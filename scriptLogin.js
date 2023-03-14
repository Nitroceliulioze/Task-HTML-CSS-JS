const form = document.getElementById("form");
const password = document.getElementById("password");
const email = document.getElementById("email");
const fName = document.getElementById("name");
const surname = document.getElementById("surname");
const errorElement = document.getElementById("error");
const emailRegistration = document.getElementById("email1");
const emailAgain = document.getElementById("email2");
const passwordRegistration = document.getElementById("password1");
const passwordAgain = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    let messages = [];
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value == '' || email.value == null) {
        messages.push("Email is required")
    }
    if (emailFormat.test(email)) {
        return true
    } else {
        messages.push("Please enter a valid email")
    }

    if (password.value.length <= 8) {
        messages.push("Password must be longer than 8 characters")
    }

    if (fName.value == '' || fName.value == null) {
        messages.push("Name is required")
    }
    if (fName.value.length <= 2) {
        messages.push("Password must be longer than 8 characters")
    }

    if (surname.value == '' || surname.value == null) {
        messages.push("Name is required")
    }
    if (surname.value.length <= 2) {
        messages.push("Password must be longer than 8 characters")
    }

    if (emailRegistration.value == '' || emailRegistration.value == null) {
        messages.push("Email is required")
    }
    if (emailFormat.test(emailRegistration)) {
        return true
    } else {
        messages.push("Please enter a valid email")
    }

    if (emailAgain != emailRegistration) {
        messages.push("Emails do not match")
    }

    if (passwordRegistration.value.length <= 8) {
        messages.push("Password must be longer than 8 characters")
    }

    if (passwordAgain != passwordRegistration) {
        messages.push("Passwords do not match")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(". ")
    }
    
})


const registerBtn = document.querySelector("#register-btn");
const remove = document.getElementById("remove")

registerBtn.addEventListener("click", function () {
    registerConteiner.classList.add("active");    
    remove.remove()
});

// // on Submit
// function onSubmit() {
//     emailIsValid();
//     filledInput();
//     validateName();
// }


// //Check if email is valid
// function emailIsValid() {
//     const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
//     const isValidEmail = emailRegex.test(emailInput.value);
//     if (isValidEmail == false) {
//         alert("Email is not valid");
//         return false; 
//     }
//     return true; 
// }

// //check if all fields are filled
// function filledInput() {
//     if (inputText.value == "") { 
//         alert("All inputs must be filled");  	
//         return false; 
//     }  	
//     return true; 
// }

// // Validate name

// function validateName() {
// const nameInputValue = document.getElementById('name').value;
// if (nameInputValue == "")
//     {
//      alert("Name field must be filled out");
//      return false;
//     }
// else if (nameInputValue.length <= 2)
//     {
//         alert("Name must have at least 2 characters");
//         return false;
//     }
// else if (/[^a-zA-Z0-9\-]/.test(nameInputValue))   {
//         alert("Family name can only contain alphanumeric characters and hypehns(-)")
//         return false;
//     }
//     return true;
// }




