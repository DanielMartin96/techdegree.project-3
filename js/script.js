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

// email

// need to get email input and compare it to a valid email address

// user must check one checkbox

function activityValidation() {
  const checkboxes = activity.getElementsByTagName("input");
  const activityError = document.createElement("li");
  activityError.setAttribute("div", "activityError");
  activityError.innerHTML = "Please choose at least one activity";
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
