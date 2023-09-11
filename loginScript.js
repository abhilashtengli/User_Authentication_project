const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
const userRole = document.getElementById("user-role");
const btn = document.getElementById("login-btn");

const logindata = {
  email: userEmail.value,
  role: userRole.value,
  password: userPassword.value,
};

const loginUrl = "https://geek-store.onrender.com/user/login";

btn.addEventListener("click", () => {
  fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify(loginData),
  }).then((response) => {
    if (!response.ok) {
      btn.innerText = "Login Failed";
    } else {
      btn.innerText = "Login Successful";
    }
  });
});
