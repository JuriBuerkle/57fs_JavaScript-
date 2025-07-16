const brandEl = document.getElementById("brand");
const imageEl = document.getElementById("car-image");
const modelEl = document.getElementById("model");
const yearEl = document.getElementById("year");
const colorEl = document.getElementById("color");
const priceEl = document.getElementById("price");

fetch("https://juribuerkle.github.io/JSON_S/cars.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
    const cars = data.cars;
    if (cars && cars.length > 0) {
      const car = cars[0]; 

      const { brand, image, model, year, color, price, currency } = car;

      brandEl.textContent += brand;
      modelEl.textContent += model;
      yearEl.textContent += year;
      colorEl.textContent += color.car;
      priceEl.textContent += price + " " + currency;

      imageEl.src = image;
      imageEl.alt = `${brand} ${model}`;
    } else {
      console.warn("No cars found in the JSON data.");
    }
  })
  .catch((error) => {
    console.error("Error fetching or parsing car data:", error);
  });
