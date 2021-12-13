/* 
Hope Asher
CS 601 Term Project
Demonstrating competency with vanilla JS and DOM manipulation-- no Vue in this file
*/


// Repeatedly referenced HTML elements
const first = document.querySelector("#first"); // first name input
const last = document.querySelector("#last"); // last name input
const email = document.querySelector("#email"); // email input
const message = document.querySelector("#message"); // message textarea
const modal = document.querySelector("#modalScreen"); // modal that pops up on form submission



// EVENT LISTENERS

// check name validity when blurred
first.addEventListener("blur", () => {
    checkName(first);
});

// check name validity when blurred
last.addEventListener("blur", () => {
    checkName(last);
});

// check email validity when blurred
email.addEventListener("blur", () => {
    checkEmail(email);
});

// check message validity when blurred
message.addEventListener("blur", () => {
    checkMessage(message);
})

// when any input is focused, clear the message in the corresponding alert div
const fieldArray = [first, last, email, message];
fieldArray.forEach(field => {
    field.addEventListener("focus", () => {
        clearAlert(field);
    })
});

// when form is submitted: validate inputs, save to localStorage, and show modal
document.querySelector("form").addEventListener("submit", event => {
    // validate using helper functions below
    if (checkName(first) && checkName(last) && checkEmail(email) && checkMessage(message)) {

        // save the form information to localStorage as its own object
        const formData = {
            'first': first.value,
            'last': last.value,
            'email': email.value,
            'message': message.value
        };
        // need to stringify the object so localStorage can hold it
        localStorage.setItem('formData', JSON.stringify(formData));

        // display form submission modal (functions to close the modal are below)
        modal.style.display = "block";

        // retrieve name from parsing localStorage object and insert into modal greeting text
        const nameGreet = JSON.parse(localStorage.getItem("formData")).first;
        document.querySelector("#modalGreeting").innerHTML = `Thanks for your note, 
                ${nameGreet}! I'll get back to you soon.`

        // clear out all the form input values
        fieldArray.forEach(field => {
            field.value = "";
        })

        // stop form submission since it doesn't go anywhere
        event.preventDefault();

    } else {
        // helpful warnings about invalid input are inserted into DOM with helper functions below
        event.preventDefault();
    }
})

// hide modal when user clicks close button
document.querySelector("#closeModal").addEventListener("click", () => {
    modal.style.display = "none";
})

// hide modal when user clicks anywhere OUTSIDE popup box
window.addEventListener("click", event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


// HELPER FUNCTIONS

// helper function to clear alert text, given any corresponding input field as argument
function clearAlert(input) {
    const divID = `#${input.id}-alert`;
    document.querySelector(divID).innerHTML = "";
}

// helper function to check length and characters of a name INPUT field (not string)
function checkName(name) {

    // match regex: two or more instances of only a-z or A-Z (no spaces)
    const regex = /^[a-zA-Z]{2,}$/;
    const valid = regex.test(name.value);

    // return true only if name is two or more sequential letters
    // Elon Musk's kid "X Æ A-12" will fail validation :(
    if (valid) {
        return true;
    } else {
        // get the alert div corresponding to whichever name was passed in and update
        document.querySelector(`#${name.id}-alert`).innerHTML = "name must be 2 or more letters";
        return false;
    }
}

// helper function to check for valid email in INPUT field (not string)
function checkEmail(email) {
    const regex = /^[A-Za-z0-9+_.\-]+@(.+)\.(.+)$/;
    const validMatch = regex.test(email.value);

    if (validMatch) {
        return true;
    } else {
        // update the DOM with alert
        document.querySelector("#email-alert").innerHTML = "please enter a proper email address";
        return false;
    }
}

// helper function to check length of message in TEXTAREA field (not string)
function checkMessage(message) {
    // a message is only valid if it has more than 1 character
    if (message.value.length > 1) {
        return true;
    } else {
        // update the DOM with alert
        document.querySelector("#message-alert").innerHTML = "oops, you forgot to write a message"
        return false;
    }
}