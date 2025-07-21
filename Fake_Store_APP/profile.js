async function fetchProfile() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {Authorization: `Bearer ${token}`},
    });

    const user = await res.json();
    console.log(user);
    
}

fetchProfile();