// Change heading text on button click
const heading = document.getElementById("heading");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  heading.textContent = "Hello Universe";
});

// Mouse hover effect
const hoverText = document.getElementById("hover");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "red";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
});

// Input field events
const inputField = document.getElementById("inputField");

inputField.addEventListener("input", () => {
  console.log(inputField.value);
});

inputField.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

inputField.addEventListener("focus", () => {
  inputField.style.backgroundColor = "grey";
});

inputField.addEventListener("blur", () => {
  inputField.style.backgroundColor = "lightgrey";
});

// Dark mode toggle
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter.textContent = ++count;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter.textContent = --count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// Collapsible FAQ
document.getElementById("faqQ").addEventListener("click", () => {
  const answer = document.getElementById("faqA");
  answer.style.display = (answer.style.display === "none") ? "block" : "none";
});

// Tabs
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(c => c.style.display = "none");
    document.getElementById(btn.dataset.tab).style.display = "block";
  });
});

// Form validation
const form = document.getElementById("myForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const passwordValue = passwordField.value.trim();

  // Name
  nameValue === "" 
    ? setError(nameField, "Name cannot be empty") 
    : setSuccess(nameField);

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  !emailRegex.test(emailValue) 
    ? setError(emailField, "Enter a valid email") 
    : setSuccess(emailField);

  // Password
  passwordValue.length < 6
    ? setError(passwordField, "Password must be at least 6 characters")
    : setSuccess(passwordField);
}

// Helper functions
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = "";
  input.classList.add("success");
  input.classList.remove("error");
}
