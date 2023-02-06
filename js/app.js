const buttonClaim = document.getElementById("button");
const iconError = document.querySelectorAll(".icon-error");
const errorMessage = document.querySelectorAll(".error_message");

buttonClaim.addEventListener("click", function () {
  const inputFirstName = document.getElementById("inputFirstName");
  const inputLastName = document.getElementById("inputLastName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  for (let error_msg = 0; error_msg < errorMessage.length; error_msg++) {
    for (let icon_error = 0; icon_error < iconError.length; icon_error++) {
      // input fristname
      if (inputFirstName.value === "") {
        errorMessage[0].style.display = "block";
        iconError[0].style.display = "block";
        inputFirstName.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputFirstName.style.borderWidth = "2px";
        inputFirstName.style.borderStyle = "solid";
      } else {
        errorMessage[0].style.display = "none";
        iconError[0].style.display = "none";
        inputFirstName.style.borderColor = "hsla(154, 59%, 51%,0.7)";
        inputFirstName.style.borderWidth = "2px";
        inputFirstName.style.borderStyle = "solid";
      }

      // input lastname
      if (inputLastName.value === "") {
        errorMessage[1].style.display = "block";
        iconError[1].style.display = "block";
        inputLastName.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputLastName.style.borderWidth = "2px";
        inputLastName.style.borderStyle = "solid";
      } else {
        errorMessage[1].style.display = "none";
        iconError[1].style.display = "none";
        inputLastName.style.borderColor = "hsla(154, 59%, 51%,0.7)";
        inputLastName.style.borderWidth = "2px";
        inputLastName.style.borderStyle = "solid";
      }

      // input email
      if (inputEmail.value === "") {
        iconError[2].style.display = "block";
        errorMessage[2].style.display = "block";
        errorMessage[2].innerHTML = `Email cannot be empty`;
        inputEmail.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputEmail.style.borderWidth = "2px";
        inputEmail.style.borderStyle = "solid";
      } else if (inputEmail.value.match(mailformat)) {
        iconError[2].style.display = "none";
        errorMessage[2].style.display = "none";
        inputEmail.style.borderColor = "hsla(154, 59%, 51%,0.7)";
        inputEmail.style.borderWidth = "2px";
        inputEmail.style.borderStyle = "solid";
      } else {
        iconError[2].style.display = "block";
        errorMessage[2].style.display = "block";
        errorMessage[2].innerHTML = `You have entered an invalid email address!`;
        inputEmail.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputEmail.style.borderWidth = "2px";
        inputEmail.style.borderStyle = "solid";
      }

      // input password
      if (inputPassword.value === "") {
        errorMessage[3].style.display = "block";
        iconError[3].style.display = "block";
        inputPassword.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputPassword.style.borderWidth = "2px";
        inputPassword.style.borderStyle = "solid";
      } else if (inputPassword.value.length < 6) {
        iconError[3].style.display = "block";
        errorMessage[3].style.display = "block";
        errorMessage[3].innerHTML = `Password cannot be less than 6 charaters!`;
        inputPassword.style.borderColor = "hsla(0, 100%, 74%, 0.7)";
        inputPassword.style.borderWidth = "2px";
        inputPassword.style.borderStyle = "solid";
      } else {
        errorMessage[3].style.display = "none";
        iconError[3].style.display = "none";
        inputPassword.style.borderColor = "hsla(154, 59%, 51%,0.7)";
        inputPassword.style.borderWidth = "2px";
        inputPassword.style.borderStyle = "solid";
      }
    }
  }
});
