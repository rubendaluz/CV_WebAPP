document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#CriarConta");

  document.querySelector("#linkCriarConta").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form_hidden");
    createAccountForm.classList.remove("form_hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form_hidden");
    createAccountForm.classList.add("form_hidden");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    // Substitua pela URL do endpoint de login
    const url = "http://localhost:4242/api/user/login";

    const requestBody = { username, password };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data);
        window.location.href = "../index/index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signup();
  });
});
