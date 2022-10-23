function validatePassword() {
    var password = document.getElementById("pwd").textContent;
    var confirmPassword = document.getElementById("pwd-con").textContent;

    console.log(password);
    console.log(confirmPassword);
    /* if (password != confirmPassword) {
        console.log(password)
        console.log(confirmPassword)

        const passwordMatch = document.createElement("p")

        passwordMatch.value = "* Passwords do not match"
        console.log(passwordMatch)
        /* passwordMatch.style.color = "Red" */
        /* password.appendChild(passwordMatch);
    } */
}

var button = document.getElementById("footer-button")

button.addEventListener("click", validatePassword)