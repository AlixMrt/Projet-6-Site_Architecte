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

// Submit the form (2nd Modal)

// Add an event listener on the Submit button of the 2md Modal for a POST Fetch
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

closeModalsIcon2.addEventListener("click", () => {
  modalBg.classList.remove("bg-active");
  modalCreate.classList.remove("modal-active");
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
