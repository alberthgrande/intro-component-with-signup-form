const buttonClaim = document.getElementById("button");
const iconError = document.querySelectorAll(".icon-error");
const errorMessage = document.querySelectorAll(".error_message");

buttonClaim.addEventListener("click", function () {
  const inputFirstName = document.getElementById("inputFirstName");
  const inputLastName = document.getElementById("inputLastName");
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  let mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  for (let error_msg = 0; error_msg < errorMessage.length; error_msg++) {
    for (let icon_error = 0; icon_error < iconError.length; icon_error++) {
      if (inputFirstName.value === "") {
        errorMessage[0].style.display = "block";
        iconError[0].style.display = "block";
        inputFirstName.style.borderColor = "hsl(0, 100%, 74%, 0.7)";
        inputFirstName.style.borderWidth = "2px";
        inputFirstName.style.borderStyle = "solid";
      } else {
        errorMessage[0].style.display = "none";
        iconError[0].style.display = "none";
      }

      if (inputLastName.value === "") {
        errorMessage[1].style.display = "block";
        iconError[1].style.display = "block";
        inputLastName.style.borderColor = "hsl(0, 100%, 74%, 0.7)";
        inputLastName.style.borderWidth = "2px";
        inputLastName.style.borderStyle = "solid";
      } else {
        errorMessage[1].style.display = "none";
        iconError[1].style.display = "none";
      }

      if (inputEmail.value === "") {
        iconError[2].style.display = "block";
        errorMessage[2].style.display = "block";
        errorMessage[2].innerHTML = `Email cannot be empty`;
        inputEmail.style.borderColor = "hsl(0, 100%, 74%, 0.7)";
        inputEmail.style.borderWidth = "2px";
        inputEmail.style.borderStyle = "solid";
      } else if (inputEmail.value.match(mailformat)) {
        errorMessage[2].style.display = "block";
        iconError[2].style.display = "block";
        inputEmail.style.borderColor = "hsl(0, 100%, 74%, 0.7)";
        inputEmail.style.borderWidth = "2px";
        inputEmail.style.borderStyle = "solid";
      } else {
        errorMessage[2].style.display = "none";
        iconError[2].style.display = "none";
      }

      if (inputPassword.value === "") {
        errorMessage[3].style.display = "block";
        iconError[3].style.display = "block";
        inputPassword.style.borderColor = "hsl(0, 100%, 74%, 0.7)";
        inputPassword.style.borderWidth = "2px";
        inputPassword.style.borderStyle = "solid";
      } else {
        errorMessage[3].style.display = "none";
        iconError[3].style.display = "none";
      }
    }
  }
});
