import { editModeStatus } from "./edit_mode.js";
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
    const token = await response.json();
    localStorage.setItem("token", JSON.stringify(token));
    window.location.href = "./index.html";
    editModeStatus();
  } else {
    window.alert("Wrong email or password");
  }
};
// EDIT

// DELETE
// const deleteData = async (work, token) => {
//   try {
//     const response = await fetch(`${baseUrl}works/${work.id}`, {
//       headers: {
//         Accept: "application/json",
//         Authentication: token.token,
//         "X-Custom-Header": "header value",
//       },
//       method: "DELETE",
//     });
//   } catch (error) {
//     console.log(`there was an error : ${error}`);
//   }

//   // if (!response.ok) {
//   //   // get error message from body or default to response status
//   //   const error = response.status;
//   //   return Promise.reject(error);
//   // }
// };

const deleteData = async (work, token) => {
  const response = await fetch(`${baseUrl}works/${work.id}`, {
    method: "DELETE",
    headers: {
      // Authentication: `Bearer ${token}`,
      "x-access-token": `${token.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(work),
  });
  const data = await response.json;
  console.log(data);
  if (!response.ok) {
    const message = `error: ${response.status}`;
    throw new Error(message);
  }
};

// Exports

export { getData, postWork, tryLogin, deleteData };
