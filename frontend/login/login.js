const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    errorMessage.textContent = "Email oder Passwort falsch!";
    return;
  }

  const result = await response.json();
  localStorage.setItem("email", result.email);
  window.location.href = "../main/index.html";
});


function logout() {
 window.location.href = "../main/login.html";
}