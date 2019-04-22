const validateForm = () => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let alphanumeric =  /^[a-z0-9]+$/i;
    if (username.length < 4 || alphanumeric.test(username) === false) {
        document.getElementById("usernameError").style.display = "block";
    } else {
        document.getElementById("usernameError").style.display = "none";
    }
    if (emailFormat.test(email) === false) {
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
    if (phone.length < 10 || isNaN(phone) === true) {
        document.getElementById("phoneError").style.display = "block";
    } else {
        document.getElementById("phoneError").style.display = "none";
    }
}

const submitForm = () => {
    let allErrorElements = document.querySelectorAll(".error");
    let errorElem;
    for (let i = 0; i < allErrorElements.length; i++) {
        errorElem = allErrorElements[i];
    }
    if (errorElem.style.display === "none") {
        alert("Your form has been submitted, please check your email for further details");
    }
}
