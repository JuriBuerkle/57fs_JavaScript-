fetch("https://juribuerkle.github.io/my_favorite_Cars/cars.json")
    .then(response => response.json())
    .then(data => {
        const carList = document.getElementById("car-list");
        data.cars.forEach(car => {
            const carItem = document.createElement("div");
            carItem.classList.add("car-item");
            carItem.innerHTML = `
                <h2>${car.brand} ${car.model}</h2>
                <p>Year: ${car.year}</p>
                <p>Interior Color: ${car.color.interior}</p>
                <p>Car Color: ${car.color.car}</p>
                <img src="${car.image}" alt="${car.brand} ${car.model}">
            `;
            carList.appendChild(carItem);
        });
    })
    .catch(error => console.error("Error fetching car data:", error));
