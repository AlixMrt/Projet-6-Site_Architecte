const addWorksMain = (works) => {
  works.forEach((work) => {
    const workElement = document.createElement("figure");
    const workImageElement = document.createElement("img");
    workImageElement.src = work.imageUrl;
    workImageElement.alt = work.title;
    const workTitleElement = document.createElement("figcaption");
    workTitleElement.innerText = work.title;
    gallery.appendChild(workElement);
    workElement.appendChild(workImageElement);
    workElement.appendChild(workTitleElement);
  });
};

const addWorksModal = (works) => {
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
};

export { addWorksMain, addWorksModal };
