const nameField = document.querySelector("#name");
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
const total = document.createElement("h3");
activity.appendChild(total);

activity.addEventListener("change", (e) => {
  const inputClicked = e.target;
  const nameOfClicked = inputClicked.name;
  const dataCost = inputClicked.getAttribute("data-cost");
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
  if (e.target.checked) {
    initialCost += +dataCost;
    let totalCost = "Total Cost: $";
    totalCost += initialCost;
    return totalCost;
  } else {
    initialCost -= +dataCost;
    let totalCost = "Total Cost: $";
    totalCost += initialCost;
    return totalCost;
  }
});

// Payment Section

const paymentOptions = document.getElementById("payment"); // getting the payment options
const selectPayment = (paymentOptions[0].style.display = "none"); // hiding the select payment option
const creditCard = paymentOptions[1].setAttribute("selected", "selected"); // making credit card the deault option
const creditCardNumberDiv = document.getElementById("credit-card"); // getting the credit card details to hide

paymentOptions.addEventListener("change", (e) => {
  const creditCard = document.getElementById("payment")[1]; // getting the credit card option
  if (creditCard.selected) {
    creditCardNumberDiv.style.display = "block"; // showing details
  } else {
    creditCardNumberDiv.style.display = "none"; // hiding details
  }
});

// Form validation

// Name validation

function nameValidation(name) {
  const nameError = document.createElement("div");
  nameError.innerHTML = "Name field cannot be empty";
  nameError.setAttribute("id", "nameError");
  if (name.value.length == 0) {
    nameField.parentNode.insertBefore(nameError, nameField.nextSibling);
    return false;
  } else {
    // need to remove the div
    nameError.parentNode.removeChild(nameError);
    return true;
  }
}

window.addEventListener("load", (e) => {
  nameValidation(nameField);
});

nameField.addEventListener("change", (e) => {
  nameValidation(nameField);
});
