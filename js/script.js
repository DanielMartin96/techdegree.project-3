const nameField = document.querySelector("#name");
const otherJobContainer = document.querySelector(".otherJobContainer");
const userTitleSelection = document.querySelector("#title");
const selectionOther = "other";
const designDropdown = document.querySelector("#design");
const colorField = document.querySelector("#shirt-colors");
const jsPuns = "js puns";
const heartJs = "heart js";
const jsPunsColors = document.querySelector("#theme-js-puns");

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

function hideJsColors() {
  jsPunsColors.className = "is-hidden";
}

// Script to look at what the customer has chose on the dropdown
designDropdown.addEventListener("change", (e) => {
  let selection = e.target.value;
  if (selection === jsPuns) {
    showColors();
  } else if (selection === heartJs) {
    showColors();
  } else {
    hideColors();
  }
});
