const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const closeModalsIcon1 = document.querySelector(".close-modal-1");
const closeModalsIcon2 = document.querySelector(".close-modal-2");

const modalUpdate = document.querySelector(".modal--update");
const btnOpenCreateModal = document.querySelector(".btn--open-Create-Modal");

const modalCreate = document.querySelector(".modal--create");

console.log(modalBtn);
// Opens the first Modal (update)
modalBtn.addEventListener("click", async () => {
  modalBg.classList.add("bg-active");
  modalUpdate.classList.add("modal-active");

  // Calls the Api and loads the photos within the Modal-gallery element
  try {
    works = await loadData("works");
    categories = await loadData("categories");
  } catch (e) {
    console.log(`Error : ${e}`);
  }

  const modalGallery = document.querySelector(".modal__gallery");
  modalGallery.innerHTML = "";
  works.forEach((work) => {
    console.log(work.id);
    const modalFigureElement = document.createElement("figure");
    const modalImageElement = document.createElement("img");
    modalImageElement.src = work.imageUrl;

    const modalIconElement = document.createElement("i");
    modalIconElement.classList = "fa-solid fa-trash-can";
    modalIconElement.addEventListener("click", () => {
      console.log("hello");
      console.log(`${baseUrl}works/${work.id}`);
      fetch(`${baseUrl}works/${work.id}`, {
        method: "DELETE",
      }).then((response) => response.json());
    });
    const modalFigcaptionElement = document.createElement("figcaption");
    modalFigcaptionElement.innerText = "éditer";

    modalGallery.appendChild(modalFigureElement);
    modalFigureElement.appendChild(modalImageElement);
    modalFigureElement.appendChild(modalIconElement);
    modalFigureElement.appendChild(modalFigcaptionElement);
  });
});

// Adds the close functionnality on both modals
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

// Submit the form (2nd Modal)

const submitForm = document.querySelector("#submit-form");

console.log(submitForm);
submitForm.addEventListener("submit", function (e) {
  console.log("hello");
  e.preventDefault();
  const imageFile = document.querySelector("#file-input").files[0];
  const titreFile = document.querySelector("#titre").value;
  const categorieFile = document.querySelector("#categorie").value;

  const FormData = new FormData();
  FormData.append("image-File", imageFile);
  FormData.append("titre-File", titreFile);
  FormData.append("categorie-File", categorieFile);

  fetch(`${baseUrl}works`, {
    method: "POST",
    body: FormData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
