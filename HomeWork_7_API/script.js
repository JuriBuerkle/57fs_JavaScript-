fetch("https://juribuerkle.github.io/my_favorite_Cars/autos.json") 
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
