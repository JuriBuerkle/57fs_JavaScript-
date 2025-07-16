const brandEl = document.getElementById("brand");
const imageEl = document.getElementById("image");
const modelEl = document.getElementById("model");
const yearEl = document.getElementById("year");
const colorEl = document.getElementById("color");

console.log(brandEl);


fetch(" https://juribuerkle.github.io/JSON_S/cars.json")
  .then((response) => response.json())
  .then((carsObj) => {
    //console.log(carsObj);

   const {brand, image, model, year, color, price, currency} = carsObj;
   brandEl.textContent += brand;

   modelEl.textContent += model;
   yearEl.textContent += year;
   colorEl.textContent += color;
   priceEl.textContent += price + " " + currency;

  });
