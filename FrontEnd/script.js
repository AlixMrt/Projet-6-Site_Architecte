import { getData } from "./fetch_functions.js";
import { addFirstFilter, addFilters } from "./filters.js";
import { addWorksMain } from "./add_works.js";
import { updateEditModeDisplay } from "./edit_mode.js";

document.addEventListener("DOMContentLoaded", async () => {
  //

  updateEditModeDisplay();

  //
  let works = [];
  let categories = [];
  const gallery = document.getElementById("gallery");
  try {
    works = await getData("works");
    categories = await getData("categories");
  } catch (e) {
    console.log(`Error : ${e}`);
  }

  // displays the works (image, title ...) dynamically on the main page (add_works.js)
  addWorksMain(works);

  // adds an eventListener on the only non-dynamical filter ("Tous") so that it displays all the works (filters.js)
  addFirstFilter(works);

  // adds filters dynamically and attach to them individually an eventListener that will filter the Works array (filters.js)
  addFilters(works, categories);

  console.log("hello");
});
