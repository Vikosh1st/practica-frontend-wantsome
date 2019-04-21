const validateForm = () => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    if (username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else {
        document.getElementById("usernameError").style.display = "none";
    }
    if (email === "") {
        document.getElementById("emailError").style.display = "block";
    } else {
        document.getElementById("emailError").style.display = "none";
    }
    if (firstname === "") {
        document.getElementById("firstnameError").style.display = "block";
    } else {
        document.getElementById("firstnameError").style.display = "none";
    }
    if (lastname === "") {
        document.getElementById("lastnameError").style.display = "block";
    } else {
        document.getElementById("lastnameError").style.display = "none";
    }
    if (phone === "") {
        document.getElementById("phoneError").style.display = "block";
    } else {
        document.getElementById("phoneError").style.display = "none";
        alert("The form has been submitted, please check your email for further details");
    }
}