const registerForm = document.getElementById("register-form");
const messageEl = document.getElementById("message");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
  const newUser = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    avatar: event.target.avatar.value,
  };

  console.log(newUser);
  
});

async function fetchRegister(newUser) {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    messageEl.textContent = "Супер"
  } else {
    messageEl.textContent = "Мимо"
  }
}
