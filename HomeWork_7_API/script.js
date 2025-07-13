fetch("https://juribuerkle.github.io/my_favorite_Cars/") 
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });