const baseUrl = "http://localhost:5678/api/";

import { tryLogin } from "./fetch_functions.js";

// Submit the email and password

const passwordForm = document.querySelector("#form-password");
console.log(passwordForm);

passwordForm.addEventListener("submit", function (e) {
  console.log("hello");
  e.preventDefault();

  const userEmail = document.querySelector("#email").value;
  const userPassword = document.querySelector("#pass").value;

  // Fetch POST request (fetch_functions.js) gives access to index.html (edit mode) + a token
  tryLogin(userEmail, userPassword);
});
