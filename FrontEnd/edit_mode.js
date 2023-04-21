// Checks with "get" what is the current mode (edit mode or not)
// OR sets with "set" the new current mode (with the ${value} parameter)
const editModeStatus = () => {
  const btnLog = document.querySelector("#btn-login");
  const btnModify = document.querySelector(".modal-btn");
  const editTopBar = document.querySelector(".header__editMode");

  const btnModify2 = document.querySelector("#iconModify2");
  const btnModify3 = document.querySelector("#iconModify3");
  const logLink = document.querySelector(".log-link");

  if (localStorage.hasOwnProperty("token")) {
    console.log("I have a token stored");
    editTopBar.style.display = "flex";
    btnModify.style.display = "inline-block";
    btnModify2.style.display = "flex";
    btnModify3.style.display = "flex";

    // Hide the log-in button
    btnLog.style.display = "none";

    // Create a log-out button

    const btnLogOut = document.createElement("a");
    console.log("newButtonWorking");
    btnLogOut.innerText = "logout";
    btnLogOut.classList.add("hover");
    btnLogOut.addEventListener("click", () => {
      console.log("hello");
      logLink.removeChild(btnLogOut);
      btnLog.style.display = "inline-block";
      localStorage.clear();
      editModeStatus();
    });

    logLink.appendChild(btnLogOut);
  } else {
    console.log("I have no token !!!");
    editTopBar.style.display = "none";

    btnModify.style.display = "none";

    btnModify2.style.display = "none";
    btnModify3.style.display = "none";
  }
};

export { editModeStatus };
