function validatePassword() {
    var password = document.getElementById("pwd");
    var confirmPassword = document.getElementById("pwd-con");
    var passwordInput = document.getElementById("pwd-input");

    if (password.value != confirmPassword.value) {
        console.log(password.value)
        console.log(confirmPassword.value)

        password.classList.add("error")
        confirmPassword.classList.add("error")

        var passwordMatch = document.createElement("p")

        passwordMatch.textContent = "* Passwords do not match"
        console.log(passwordMatch)
        passwordMatch.style.color = "Red"
        passwordInput.appendChild(passwordMatch);
    }
}

var button = document.getElementById("footer-button")

button.addEventListener("click", validatePassword)