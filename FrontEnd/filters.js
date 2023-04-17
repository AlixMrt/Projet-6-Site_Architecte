const addFirstFilter = (works) => {
  const firstFilter = document.querySelector("#first-Filter");
  firstFilter.addEventListener("click", () => {
    gallery.innerHTML = "";
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
  });
};

const addFilters = (works, categories) => {
  for (let i = 0; i < categories.length; i++) {
    const filterList = document.getElementById("filtersList");
    const filterElement = document.createElement("li");
    filterElement.innerText = categories[i].name;
    filterElement.classList.add("filter");
    filterElement.addEventListener("click", () => {
      gallery.innerHTML = "";
      const filteredWorks = works.filter((work) => {
        return work.categoryId === i + 1;
      });
      filteredWorks.forEach((work) => {
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
    });
    filterList.appendChild(filterElement);
  }
  const filters = document.querySelectorAll(".filter");
  let location = 0;
  for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", () => {
      filters[location].classList.remove("activeFilter");
      location = i;
      filters[location].classList.add("activeFilter");
    });
  }
};

export { addFirstFilter, addFilters };
