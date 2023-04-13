const baseUrl = "http://localhost:5678/api/";

async function loadData() {
  return (await fetch(`${baseUrl}works`)).json();
}
let works = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    works = await loadData();
  } catch (e) {
    console.log(`Error : ${e}`);
  }
  works.forEach((work) => {
    const gallery = document.getElementById("gallery");
    console.log(gallery);

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
