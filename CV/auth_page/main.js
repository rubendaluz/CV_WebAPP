document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#CriarConta");

  // document.querySelector("#linkCriarConta").addEventListener("click", (e) => {
  //   e.preventDefault();
  //   loginForm.classList.add("form_hidden");
  //   createAccountForm.classList.remove("form_hidden");
  // });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form_hidden");
    createAccountForm.classList.add("form_hidden");
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    // Replace with the URL of the login endpoint
    const url = "http://localhost:4242/api/user/login";
    const data = { username, password };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const token = response.token;

        localStorage.setItem("token", token);
        console.log(token);

        // Redirecione para a página com acesso restrito
        window.location.href = "../index/index.html";
      } else {
        console.error("Erro no login:", xhr.status);
      }
    };

    const dataJSON = JSON.stringify(data);
    console.log(dataJSON);
    xhr.send(dataJSON);
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signup();
  });
});
