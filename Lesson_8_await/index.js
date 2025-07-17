const productsList = document.getElementById("products-list")

async function fetchProduct() {  // объявления асинхронной функции
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    // fetch- вернёт PROMIS 
    // await- раскроет 
    const products = await res.json();
    console.log(products);
    
    products.forEach((product) => {
        const {title, description, images } = product;
        const productCard = document.createElement("li");
        productCard.classList.add("product-card");
        const titleEl = document.createElement("h2");
        const descriptionEl = document.createElement("p");
        const img = document.createElement("img");

        titleEl.textContent = title;
        descriptionEl.textContent = description;
        img.src = images[0];
        img.referrerPolicy = "no-referrer";

        productCard.append(titleEl, img, descriptionEl);
        productsList.appendChild(productCard);

    });
}

fetchProduct();

// CRUD - Create Read