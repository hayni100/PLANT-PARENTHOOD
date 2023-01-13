
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message-success",
    "form__message-error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

// setFormMessage(loginForm, "success", "You're logged in!");

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input-error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input-error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      createAccountForm.classList.remove("form-hidden");
    });

//   document.querySelector("#linkLogin").addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm.classList.remove("form-hidden");
//     createAccountForm.classList.add("form-hidden");
//   });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
console.log("LOGMEIN");
    // Perform Fetch login

    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email: "kim@gmail.com", password: "password" }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/projects");
    } else {
      alert(response.statusText);
    }

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id == "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
