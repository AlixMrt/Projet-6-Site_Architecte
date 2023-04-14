// const filterProjects = (i) => {
//   fetch(`${baseUrl}works/`)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       data.forEach((project) => {
//         if (project.categoryId === i) {
//           const markup = `<figure><img
//     src="${project.imageUrl}"
//     alt="${project.title}"
//   />
//   <figcaption>${project.title}</figcaption></figure>`;

//           document
//             .querySelector(".gallery")
//             .insertAdjacentHTML("beforeend", markup);
//         }
//         document.querySelector(".gallery").innerHTML = "";
//       });
//     })
//     .catch((error) => console.log("ERROR"));
// };

// async function loadData() {
//   return (await fetch(`${baseUrl}categories`)).json();
// }
// let categories = [];

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     categories = await loadData();
//   } catch (e) {
//     console.log(`Error : ${e}`);
//   }

//   for (let i = 0; i < categories.length; i++) {
//     //   categories.forEach((category) => {

//     const filterList = document.getElementById("filtersList");

//     const filterElement = document.createElement("li");
//     filterElement.innerText = categories[i].name;

//     filterElement.addEventListener("click", filterProjects(i));

//     filterList.appendChild(filterElement);
//     //   });
//   }
// });
