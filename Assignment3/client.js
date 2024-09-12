document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
  
    // Fetch products from the JSON server
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          // Create a product card
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
  
          // Populate product details
          productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>In Stock:</strong> ${product.stock}</p>
          `;
  
          // Append the product card to the product list
          productList.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  