const userName = document.getElementById("register-user-name");
const userEmail = document.getElementById("register-user-email");
const userPassword = document.getElementById("register-user-password");
const btn = document.getElementById("submit-btn");

const registerUrl = "https://geek-store.onrender.com/user/register";

btn.addEventListener("click", () => {
  const userData = {
    name: userName.value,
    password: userPassword.value,
    email: userEmail.value,
  };

  fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
    body: JSON.stringify(userData), // Convert the data to JSON format
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json(); // Parse the response JSON
      } else {
        return response.json(); // You may want to parse error response JSON
      }
    })
    .then((data) => {
      console.log(data);
      if (data.ok) {
        btn.innerText = "Registration successful!";
      } 
    })
    .catch((error) => {
      console.log(error.message);
    });
});