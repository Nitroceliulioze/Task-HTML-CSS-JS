const profileName = document.getElementById("fname");
const profileSurname = document.getElementById("lname");
const profileEmail = document.getElementById("e-mail");
const resetEmailBtn = document.getElementById("reset-email-btn");
const error = document.getElementById("error");
const firstName = "John";
const lastName = "Newman";
let personEmail = "john.newman@mail.com";


profileName.innerHTML += firstName;
profileSurname.innerHTML += lastName;
profileEmail.innerHTML += personEmail;

resetEmailBtn.addEventListener("click", () => {
    let newPersonEmail = prompt("Type your new email");
    profileEmail.innerHTML = "<strong>Email: </strong>" + newPersonEmail


    let messages = [];
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailFormat.test(newPersonEmail)) {
        return true;
    } else {
        messages.push("Please enter a valid email. Cannot reser the email.")
    }
    if (messages.length > 0) {
        e.preventDefault() //whats e here?
        error.innerText = messages
        profileEmail.innerHTML += personEmail;
    }
    
})

