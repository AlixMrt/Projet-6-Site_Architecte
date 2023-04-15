const baseUrl = "http://localhost:5678/api/";

// Submit the email and password

const passwordForm = document.querySelector("#form-password");
console.log(passwordForm);

passwordForm.addEventListener("submit", function (e) {
  console.log("hello");
  e.preventDefault();

  const userEmail = document.querySelector("#email").value;
  const userPassword = document.querySelector("#pass").value;

  // I tried to POST with FormData
  // const formData = new FormData();
  // formData.append("email", userEmail);
  // formData.append("password", userPassword);
  // console.log(Array.from(formData));

  async function tryLogin() {
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
      window.location.href = "./index.html";
    } else {
      window.alert("Wrong email or password");
    }
  }

  tryLogin();
});
