const nameField = document.querySelector("#name");
const emailField = document.getElementById("mail");
const otherJobContainer = document.querySelector(".otherJobContainer");
const userTitleSelection = document.querySelector("#title");
const selectionOther = "other";
const designDropdown = document.querySelector("#design");
const colorField = document.querySelector("#shirt-colors");
const jsPuns = "js puns";
const heartJs = "heart js";
const colors = document.querySelector("#color");

// Window event listener to focus on name and hide the other occupation box
window.addEventListener("load", (event) => {
  nameField.focus();
  hideOtherJob();
  hideColors();
});

// Script to figure out whether 'other' has been selected
userTitleSelection.addEventListener("change", (e) => {
  let selection = e.target.value;
  if (selection === selectionOther) {
    showOtherJob();
  } else {
    hideOtherJob();
  }
});

// Functions
function hideOtherJob() {
  otherJobContainer.className = "is-hidden";
}

function showOtherJob() {
  otherJobContainer.className = "";
}

function hideColors() {
  colorField.className = "is-hidden";
}

function showColors() {
  colorField.className = "";
}

function hideSelectTheme() {
  designDropdown.getElementsByTagName("option")[0].style.display = "none";
}

// These function styles the relevant options accordinly
function showJsColors() {
  colors.getElementsByTagName("option")[0].style.display = "inline";
  colors.getElementsByTagName("option")[1].style.display = "inline";
  colors.getElementsByTagName("option")[2].style.display = "inline";
  colors.getElementsByTagName("option")[3].style.display = "none";
  colors.getElementsByTagName("option")[4].style.display = "none";
  colors.getElementsByTagName("option")[5].style.display = "none";
  colors.getElementsByTagName("option")[0].setAttribute("selected", "selected");
  colors
    .getElementsByTagName("option")[3]
    .removeAttribute("selected", "selected");
}
function showHeartJsColors() {
  colors.getElementsByTagName("option")[0].style.display = "none";
  colors.getElementsByTagName("option")[1].style.display = "none";
  colors.getElementsByTagName("option")[2].style.display = "none";
  colors.getElementsByTagName("option")[3].style.display = "inline";
  colors.getElementsByTagName("option")[4].style.display = "inline";
  colors.getElementsByTagName("option")[5].style.display = "inline";
  colors.getElementsByTagName("option")[3].setAttribute("selected", "selected");
  colors
    .getElementsByTagName("option")[0]
    .removeAttribute("selected", "selected");
}

// Script to look at what the customer has chose on the dropdown. Also added a function that takes away the select theme option in the design dropdown
designDropdown.addEventListener("change", (e) => {
  let selection = e.target.value;
  if (selection === jsPuns) {
    showColors();
    showJsColors();
    hideSelectTheme();
  } else if (selection === heartJs) {
    showColors();
    showHeartJsColors();
    hideSelectTheme();
  } else {
    hideColors();
  }
});

// Activity Section

const activity = document.querySelector(".activities");
let initialCost = 0;

activity.addEventListener("change", (e) => {
  const inputClicked = e.target;
  const nameOfClicked = inputClicked.name;
  const dateAndTime = inputClicked.getAttribute("data-day-and-time");
  const listItems = activity.getElementsByTagName("input");
  for (i = 0; i < listItems.length; i++) {
    const currentActivityTime = listItems[i].getAttribute("data-day-and-time");
    const currentActivityName = listItems[i].getAttribute("name");
    if (
      currentActivityTime === dateAndTime && // checks whether the current input date and time is the same as other inputs
      currentActivityName !== nameOfClicked // checks whether the current input name is not the same as the other inputs
    ) {
      if (inputClicked.checked) {
        listItems[i].disabled = true; // disables the rest of the neccessary checkboxes
      } else {
        listItems[i].disabled = false; // enables the rest of the neccessary checkboxes
      }
    }
  }
});

let total = document.createElement("h3");
activity.appendChild(total);

activity.addEventListener("change", (e) => {
  const inputClicked = e.target;
  const dataCost = inputClicked.getAttribute("data-cost");
  let totalCost = 0;
  if (e.target.checked) {
    initialCost += +dataCost;
    totalCost += initialCost;
    total.innerHTML = `Total: $${totalCost}`;
    return totalCost;
  } else {
    initialCost -= +dataCost;
    totalCost += initialCost;
    total.innerHTML = `Total: $${totalCost}`;
    return totalCost;
  }
});

// Payment Section

const paymentOptions = document.getElementById("payment"); // getting the payment options
const selectPayment = (paymentOptions[0].style.display = "none"); // hiding the select payment option
const creditCard = paymentOptions[1].setAttribute("selected", "selected"); // making credit card the deault option
const payPalOption = paymentOptions[2];
const bitcoinOption = paymentOptions[3];
const creditCardNumberDiv = document.getElementById("credit-card"); // getting the credit card details to hide
const payPal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

paymentOptions.addEventListener("change", (e) => {
  const creditCard = document.getElementById("payment")[1]; // getting the credit card option
  if (creditCard.selected) {
    creditCardNumberDiv.style.display = "block"; // showing details
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  } else if (payPalOption.selected) {
    creditCardNumberDiv.style.display = "none"; // hiding details}
    bitcoin.style.display = "none";
    payPal.style.display = "block";
  } else {
    creditCardNumberDiv.style.display = "none"; // hiding details}
    payPal.style.display = "none";
    bitcoin.style.display = "block";
  }
});

window.addEventListener("load", (e) => {
  payPal.style.display = "none";
  bitcoin.style.display = "none";
});

// Form validation
// Name validation
// looks at the length of the name field. If its 0 then an error is shown

const nameError = document.createElement("h3");
nameError.innerHTML = "Please provide a valid name";
nameError.style.color = "Red";
nameField.parentNode.insertBefore(nameError, nameField.nextSibling);
nameError.style.display = "none";

function nameValidation(name) {
  if (name.value.length == 0) {
    name.style.border = "5px red solid";
    nameError.style.display = "block";
  } else {
    name.style.border = "5px green solid";
    nameError.style.display = "none";
  }
}

nameField.addEventListener("keyup", (e) => {
  nameValidation(nameField);
});

// email
// very similar to the other validation functions. Tests the email field against the reg ex

const emailError = document.createElement("h3");
emailError.innerHTML = "Please provide a valid email address";
emailError.style.color = "red";
emailField.parentNode.insertBefore(emailError, emailField.nextSibling);
emailError.style.display = "none";

function emailValidation(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail.value
    )
  ) {
    mail.style.border = "5px green solid";
    emailError.style.display = "none";
    return true;
  }
  mail.style.border = "5px red solid";
  emailError.style.display = "block";
  return false;
}

emailField.addEventListener("keyup", (e) => {
  emailValidation(emailField);
});

// user must check one checkbox
// this looks at how many checkboxes are checked. If none are checked then an error is shown

function activityValidation() {
  const checkboxes = activity.getElementsByTagName("input");
  const activityError = document.createElement("li");
  activityError.setAttribute("div", "activityError");
  activityError.innerHTML = "Please choose at least one activity";
  activityError.style.color = "red";
  if (
    checkboxes[0].checked ||
    checkboxes[1].checked ||
    checkboxes[2].checked ||
    checkboxes[3].checked ||
    checkboxes[4].checked ||
    checkboxes[5].checked ||
    checkboxes[6].checked
  ) {
    console.log("One is checked");
  } else {
    activity.appendChild(activityError);
  }
}

// credit card validation
// the next three functions are very similar. Looking back now I could maybe use a function to validate each field as a lot of the code looks the same

const creditCardNumber = document.getElementById("cc-num");
const ccError = document.createElement("h3");
ccError.innerHTML = "Please provide a valid CC number";
ccError.style.color = "red";
creditCardNumber.parentNode.insertBefore(ccError, creditCardNumber.nextSibling);
ccError.style.display = "none";

function validateCC(ccNumber) {
  var regex = new RegExp("^[0-9]{13,16}$");
  if (!regex.test(ccNumber.value)) {
    ccNumber.style.border = "5px red solid";
    ccError.style.display = "block";
    return false;
  } else {
    ccNumber.style.border = "5px green solid";
    ccError.style.display = "none";
    true;
  }
}

creditCardNumber.addEventListener("keyup", (e) => {
  validateCC(creditCardNumber);
});

// zip code validation

const zipCode = document.getElementById("zip");
const zipError = document.createElement("h3");
zipError.innerHTML = "Please provide a valid ZIP number";
zipError.style.color = "red";
zipCode.parentNode.insertBefore(zipError, zipCode.nextSibling);
zipError.style.display = "none";

function validateZip(zipNumber) {
  var regex = new RegExp("^[0-9]{5}$");
  if (!regex.test(zipNumber.value)) {
    zipNumber.style.border = "5px red solid";
    zipError.style.display = "block";
    return false;
  } else {
    zipNumber.style.border = "5px green solid";
    zipError.style.display = "none";
    true;
  }
}

zipCode.addEventListener("keyup", (e) => {
  validateZip(zipCode);
});

// cvv validation

const cvvCode = document.getElementById("cvv");
const cvvError = document.createElement("h3");
cvvError.innerHTML = "Please provide a valid ZIP number";
cvvError.style.color = "red";
cvvCode.parentNode.insertBefore(cvvError, cvvCode.nextSibling);
cvvError.style.display = "none";

function validateCvv(cvvNumber) {
  var regex = new RegExp("^[0-9]{3}$");
  if (!regex.test(cvvNumber.value)) {
    cvvNumber.style.border = "5px red solid";
    cvvError.style.display = "block";
    return false;
  } else {
    cvvNumber.style.border = "5px green solid";
    cvvError.style.display = "none";
    true;
  }
}

cvvCode.addEventListener("keyup", (e) => {
  validateCvv(cvvCode);
});

//form submission
// this runs all the validation functions

const paymentValue = document.getElementById("payment").value;

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!nameValidation(nameField)) {
    e.preventDefault();
  }

  if (!emailValidation(emailField)) {
    e.preventDefault();
  }

  if (!activityValidation()) {
    e.preventDefault();
  }
  if (paymentValue == "credit card") {
    if (!validateCC(creditCardNumber)) {
      e.preventDefault();
    }

    if (!validateCvv(cvvCode)) {
      e.preventDefault();
    }

    if (!validateZip(zipCode)) {
      e.preventDefault();
    }
  }
});

document.querySelector("form").reset();
