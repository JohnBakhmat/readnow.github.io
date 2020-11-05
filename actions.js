function alertLogin (){
    let l = document.getElementById('InputEmail').value
    let p = document.getElementById('InputPassword').value
    alert("You login:" + l + " Your password:" + p)
}
function alertRegister (){
    firstName = document.getElementById("FirstName").value;
    lastName = document.getElementById("LastName").value;
    email = document.getElementById("InputEmail").value;
    password = document.getElementById("PasswordInput").value;
    password2 = document.getElementById("RepeatPasswordInput").value;
    alert("You entered:\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nE-Mail: " + email + "\nPassword: " + password + "\nRepeatPassword: " + password2)
}