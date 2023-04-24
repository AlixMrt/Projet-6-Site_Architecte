import { getData, postWork } from "./fetch_functions.js";
import { addWorksModal } from "./add_works.js";
import { getFormData } from "./form.js";

const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const closeModalsIcon1 = document.querySelector(".close-modal-1");
const closeModalsIcon2 = document.querySelector(".close-modal-2");
const modalUpdate = document.querySelector(".modal--update");
const btnOpenCreateModal = document.querySelector(".btn--open-Create-Modal");
const modalCreate = document.querySelector(".modal--create");

let works = [];
let categories = [];

// // // //
// // // // // Modal #1
// // // //

// Opens the first Modal (update)
modalBtn.addEventListener("click", async () => {
  modalBg.classList.add("bg-active");
  modalUpdate.classList.add("modal-active");

  // If the users clicks outside the modal: it is hidden
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".modal1, .modal2, .modal-btn")) {
      modalBg.classList.remove("bg-active");
      modalCreate.classList.remove("modal-active");
    }
  });

  // Gets Data from the Api (fetch_functions.js)
  try {
    works = await getData("works");
    categories = await getData("categories");
  } catch (e) {
    console.log(`Error : ${e}`);
  }
  // display the works (image, title ...) dynamically on the modal page (add_works.js)
  addWorksModal(works);
});

// // // //
// // // // // Modal #2
// // // //

// The code below :
// 1- displays a preview of the image uploaded
// 2- displays a submit button when an image has been uploaded
// 3- enables form submission

// Targets the image input
const fileInput = document.querySelector("#file-input");

// // Targets the inputs div and the output div
const photoUploadContainer = document.querySelector(".container-photo-upload");
const inputsDiv = document.querySelector(".inputs-div");
const outputDiv = document.querySelector(".output-div");

// Targets the buttons
const disabledBtn = document.querySelector("#fakeBtn");
const submitFormBtn = document.querySelector("#submitForm");

// When an image if uploaded : a preview of the image (outputDiv) is displayed and the form (inputDiv) is hidden
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  let imageElement = "";
  imageElement += ` <output>
  <img src="${URL.createObjectURL(file)}" alt="image">
  </output>`;
  outputDiv.innerHTML = imageElement;

  photoUploadContainer.style.padding = "0 0";
  inputsDiv.style.display = "none";
  outputDiv.style.display = "block";

  // Displays the working submit button once an image has been uploaded
  // Hides the disabledBtn
  submitFormBtn.style.display = "block";
  disabledBtn.style.display = "none";
});

// Adds an event listener on the Submit button of the 2md Modal for a POST Fetch
const submitForm = document.querySelector("#submit-form");

submitForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Gets data from the inputs of the modal and append it to a FormData object called "formData" (form.js)
  // Will also send the data via Fetch POST call (fetch_functions.js)
  getFormData();
});

// // // //
// // // // // Modals Functionnalities (open, close, next, previous)
// // // //

// Adds the close functionality on both modals
closeModalsIcon1.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
  modalUpdate.classList.remove("modal-active");
});

// const modal

//
// document.addEventListener("click", (event) => {
//   if (!event.target.closest(".unique")) {
//     modalBg.classList.remove("bg-active");
//     modalCreate.classList.remove("modal-active");
//   }
// });

closeModalsIcon2.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
  modalCreate.classList.remove("modal-active");

  // Hides the image preview and shows the form again
  photoUploadContainer.style.padding = "0.5em 0";
  inputsDiv.style.display = "block";
  outputDiv.style.display = "none";
  // Resets the value of the title input
  const titleInput = document.querySelector("#titre");
  titleInput.value = "";
});

// Next Modal: opens the 2nd Modal (create) and Closes the 1st (update)
btnOpenCreateModal.addEventListener("click", () => {
  modalUpdate.classList.remove("modal-active");
  modalCreate.classList.add("modal-active");
});

// Previous Modal: goes back to the first Modal (update)
const btnPreviousModal = document.querySelector(".previous-modal");
btnPreviousModal.addEventListener("click", () => {
  modalUpdate.classList.add("modal-active");
  modalCreate.classList.remove("modal-active");
});
