const loginForm = document.getElementById("login-form");
const messageEl =document.getElementById("message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const credentials = {
    email: event.target.email.value,
    password: event.target.password.value,
  };
  //console.log(credentials);
});

async function fetchLogin(credentials) {
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const err = await res.json();
        const { message } = err;
        messageEl.textContent = message;
        messageEl.style.color = "red";
        
      } else {
        const tokenObj = await res.json();
      console.log(tokenObj);
      const { access_token } = tokenObj;
      localStorage.setItem("accessToken", access_token);
      window.location.href = "/Lesson_8_await/Profile";
    }
  }
  
  fetchLogin(credentials);