const PASSWORD = "123";

const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", () => {
  const pass = passwordInput.value;
  if (pass === PASSWORD) {
    window.location.href = "../main/index.html";
  } else {
    errorMessage.textContent = "Falsches Passwort!";
  }
});


function logout() {
 window.location.href = "../main/login.html";
}