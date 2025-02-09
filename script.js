const phone = document.getElementById("phone");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

phone.addEventListener("input", (event) => {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Please input a phone number 1234567890")
    } else {
        phone.setCustomValidity("")
    }
})

firstName.addEventListener("input", (event) => {
    if (firstName.validity.patternMismatch) {
        firstName.setCustomValidity("Please input letter only")
    } else {
        firstName.setCustomValidity("")
    }
})

lastName.addEventListener("input", (event) => {
    if (lastName.validity.patternMismatch) {
        lastName.setCustomValidity("Please input letter only")
    } else {
        lastName.setCustomValidity("")
    }
})

email.addEventListener("input", (event) => {
    if (!email.willValidate) {
        email.setCustomValidity("Please input a correct Email!")
    } else {
        email.setCustomValidity("")
    }
})

confirmPassword.addEventListener("input", (event) => {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Please make sure both field are the same!")
        password.setCustomValidity("Please make sure both field are the same!")
    } else {
        confirmPassword.setCustomValidity("")
        password.setCustomValidity("")
    }

})
