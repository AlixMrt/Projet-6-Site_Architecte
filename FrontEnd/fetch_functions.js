import { editModeStatus, updateEditModeDisplay } from "./edit_mode.js";
const baseUrl = "http://localhost:5678/api/";

// GET
const getData = async (key) => {
  return (await fetch(`${baseUrl}${key}`)).json();
};

// // // //
// // // // // POST
// // // //
const postWork = async (formData) => {
  fetch(`${baseUrl}works`, {
    headers: { Authentication: `Bearer {${token}}` },
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// I tried to POST with FormData but it's not working yet
// const formData = new FormData();
// formData.append("email", userEmail);
// formData.append("password", userPassword);
// console.log(Array.from(formData));
const tryLogin = async function (userEmail, userPassword) {
  console.log("hello");
  const response = await fetch(`${baseUrl}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  if (response.status === 200) {
    const token = response.json();
    localStorage.setItem("token", token);

    editModeStatus("set", "hide");
    window.location.href = "./index.html";
  } else {
    window.alert("Wrong email or password");
  }
};
// EDIT

// DELETE

// Exports

export { getData, postWork, tryLogin };
