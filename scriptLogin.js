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
const passwordAgain = document.getElementById('password2');


formSignin.addEventListener('submit', (e) => {
    let messages = [];
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == '' || email.value == null) {
        messages.push("Email is required")
    }
    if (emailFormat.test(email.value)) {
        return true
    } else {
        messages.push("Please enter a valid email")
    }

    if (password.value.length <= 8) {
        messages.push("Password must be longer than 8 characters")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElementSignin.innerText = messages.join(". ")
    }

    if (messages.length === 0) {
        window.location.assign("/home.html")
    } 
    
})

formRegister.addEventListener('submit', (e) => {
    let messages = [];
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == '' || email.value == null) {
        messages.push("Email is required")
    }
    if (emailFormat.test(email.value)) {
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
    if (emailFormat.test(emailRegistration.value)) {
        return true
    } else {
        messages.push("Please enter a valid email")
    }

    if (emailAgain.value != emailRegistration.value) {
        messages.push("Emails do not match")
    }

    if (passwordRegistration.value.length <= 8) {
        messages.push("Password must be longer than 8 characters")
    }

    if (passwordAgain.value != passwordRegistration.value) {
        messages.push("Passwords do not match")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElementRegister.innerText = messages.join(". ")
    }

    if (messages.length === 0) {
        window.location.assign("/home.html")
    } 
    
})

const registerBtn = document.getElementById("register-btn");
const remove = document.getElementById("remove");
const registerConteiner = document.getElementById("register-container");

registerBtn.addEventListener("click", () => {
    openRegistration();
})

function openRegistration() {    
    registerConteiner.classList.add("active");
    remove.remove()    
}



// formSignin.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// })

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLocaleLowerCase())
// }

// const validateInputs = () => {
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if(emailValue === '') {
//         setError(email, 'Email is required')

//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address')
//     } else {
//         setSuccess(email)
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required')
//     } else if (passwordValue.length <= 8) {
//         setError(password, 'Password must be at least 8 characters')
//     }else {
//         setSuccess(password)
//     }
// }

