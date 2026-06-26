const title = document.getElementById("title")
const nameField = document.getElementById("Name_field")
const signin = document.getElementById("signinBtn")
const signup = document.getElementById("signupBtn")

signup.onclick = function() {
    title.innerHTML = "Sign Up"
    nameField.style.display = "block"
}
signin.onclick = function() {
    title.innerHTML = "Login"
    nameField.style.display = "none"
}


