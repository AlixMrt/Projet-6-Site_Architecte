const baseUrl = "http://localhost:5678/api/";

async function loadData(key) {
  return (await fetch(`${baseUrl}${key}`)).json();
}
let works = [];
let categories = [];

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     works = await loadData("works");
//     categories = await loadData("categories");
//   } catch (e) {
//     console.log(`Error : ${e}`);
//   }
//   const gallery = document.getElementById("gallery");
//   works.forEach((work) => {
//     const workElement = document.createElement("figure");
//     const workImageElement = document.createElement("img");
//     workImageElement.src = work.imageUrl;
//     workImageElement.alt = work.title;
//     const workTitleElement = document.createElement("figcaption");
//     workTitleElement.innerText = work.title;
//     gallery.appendChild(workElement);
//     workElement.appendChild(workImageElement);
//     workElement.appendChild(workTitleElement);
//   });

//   // add an eventListener on the only non-dynamical filter ("Tous") so that it displays all the works

//   const firstFilter = document.querySelector("#first-Filter");
//   firstFilter.addEventListener("click", () => {
//     gallery.innerHTML = "";
//     works.forEach((work) => {
//       const workElement = document.createElement("figure");
//       const workImageElement = document.createElement("img");
//       workImageElement.src = work.imageUrl;
//       workImageElement.alt = work.title;
//       const workTitleElement = document.createElement("figcaption");
//       workTitleElement.innerText = work.title;
//       gallery.appendChild(workElement);
//       workElement.appendChild(workImageElement);
//       workElement.appendChild(workTitleElement);
//     });
//   });

//   // add filters dynamically and attach to them individually an eventListener that will filter the Works array

//   for (let i = 0; i < categories.length; i++) {
//     const filterList = document.getElementById("filtersList");
//     const filterElement = document.createElement("li");
//     filterElement.innerText = categories[i].name;
//     filterElement.classList.add("filter");
//     filterElement.addEventListener("click", () => {
//       gallery.innerHTML = "";
//       const filteredWorks = works.filter((work) => {
//         return work.categoryId === i + 1;
//       });
//       filteredWorks.forEach((work) => {
//         const workElement = document.createElement("figure");
//         const workImageElement = document.createElement("img");
//         workImageElement.src = work.imageUrl;
//         workImageElement.alt = work.title;
//         const workTitleElement = document.createElement("figcaption");
//         workTitleElement.innerText = work.title;
//         gallery.appendChild(workElement);
//         workElement.appendChild(workImageElement);
//         workElement.appendChild(workTitleElement);
//       });
//     });
//     filterList.appendChild(filterElement);
//   }
//   const filters = document.querySelectorAll(".filter");
//   let location = 0;
//   for (let i = 0; i < filters.length; i++) {
//     filters[i].addEventListener("click", () => {
//       filters[location].classList.remove("activeFilter");
//       location = i;
//       filters[location].classList.add("activeFilter");
//     });
//   }

//   console.log(works);
// });
