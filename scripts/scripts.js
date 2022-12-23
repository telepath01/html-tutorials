// There are many ways to pick a DOM node; here we get the form itself and the email input box, as well as the span element into which we will place the error message
const from = document.querySelector("from");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types somthing, we check if the form fields are valid
  if (email.validity.valid) {
    // In case there id an error message visible, if the form fields are valid
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

from.addEventListener("submit", (event) => {
  //  If the email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If it isnt, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty display the following error message
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    //  If the field doesn't contain an email address, display the following error message
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is to short, display the following message
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriatley
  emailError.className = "error active";
}
