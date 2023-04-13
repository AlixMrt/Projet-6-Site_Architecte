const baseUrl = "http://localhost:5678/api/";

async function loadData() {
  return (await fetch(`${baseUrl}works`)).json();
}
let works = [];
console.log(works);
document.addEventListener("DOMContentLoaded", async () => {
  try {
    works = await loadData();
  } catch (e) {
    console.log(`Error : ${e}`);
  }
  return works;
});

console.log(works);

// async;
// const response = await fetch(`${baseUrl}works`).response.json();
// // const works = await response.json();

// console.log(baseUrl);
// console.log(response);
// console.log(works);
