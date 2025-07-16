const carShowroom = document.getElementById("car-showroom");
const carList = document.getElementById("car-list");
const carImage = document.getElementById("car-image");

fetch(" https://juribuerkle.github.io/JSON_S/cars.json")
  .then((response) => response.json())
  .then((carsObj) => {
    console.log(carsObj);

    const car = carsObj[0];
    const { brand, model, year, color, image } = carsObj;
    carShowroom.textContent = `${brand} ${model} (${year}) - ${color}`;
    const li = document.createElement("li");
    carImage.src = image;
    carImage.style.width = "300px";
    li.textContent = `${brand} ${model} (${year}) - ${color}`;
    carList.appendChild(li);
  });
carShowroom();
carList();
carImage();