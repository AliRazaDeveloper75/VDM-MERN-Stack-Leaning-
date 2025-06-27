fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("products");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-description">${product.description}</div>
            <div class="rating">⭐ ${product.rating.rate} (${
        product.rating.count
      } reviews)</div>
          `;

      container.appendChild(card);
    });
  })
  .catch((err) => {
    document.getElementById(
      "products"
    ).innerHTML = `<p>Error loading products.</p>`;
    console.error("Error:", err);
  });
