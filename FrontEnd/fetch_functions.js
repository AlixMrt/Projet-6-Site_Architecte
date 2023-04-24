import { editModeStatus } from "./edit_mode.js";
const baseUrl = "http://localhost:5678/api/";

// GET
const getData = async (key) => {
  return (await fetch(`${baseUrl}${key}`)).json();
};

// // // //
// // // // // POST Work
// // // //
const postWork = (formData, token) => {
  fetch(`${baseUrl}works`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// // // //
// // // // // POST Log-in
// // // //
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

// // // //
// // // // // DELETE
// // // //
const deleteData = async (work, token) => {
  const response = await fetch(`${baseUrl}works/${work.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token.token}`,
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
