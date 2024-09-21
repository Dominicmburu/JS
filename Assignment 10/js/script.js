
// store all my products
let productList = [];

async function addProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const product = await response.json();
        productList = product;
        populateProducts();

    } catch {
        console.log('Error fetching products');
    }
}

addProducts()

console.log(productList)

function populateProducts() {
    const productCard = document.getElementById('productCard');
    productCard.innerHTML = ''

    productList.forEach((product) => {
        const eachProduct = document.createElement('div');
        eachProduct.className = 'product-card';

        eachProduct.innerHTML = `
            <img src="${product.imageUrl}" alt="">
            <h2>${product.title}</h2>
            <span>${product.date}</span>
            <p>${product.location}</p>
            <p class="price">Ksh ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to cart</button>
        `;

        productCard.appendChild(eachProduct);

    });
}


let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product in the productList by its ID
    const product = productList.find(item => item.id === productId);
    
    if (!product) {
        console.log('Product not found');
        return;
    }
    
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        // If the product exists, increase its quantity
        existingProduct.quantity++;
    } else {
        // Otherwise, add it to the cart with a quantity of 1
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
}


// Function to delete a product from the cart
function deleteProductFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCartUI();
}

// Function to increase product quantity in the cart
function increaseProductQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        product.quantity++;
        updateCartUI();
    }
}

// Function to reduce product quantity in the cart
function reduceProductQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    
    if (product && product.quantity > 1) {
        product.quantity--;
    } else if (product && product.quantity === 1) {
        deleteProductFromCart(productId); // Remove the product if the quantity is 1 and reduced further
    }
    
    updateCartUI();
}

// Function to edit the product quantity directly
function editProductInCart(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        if (newQuantity > 0) {
            product.quantity = newQuantity;
        } else {
            deleteProductFromCart(productId); // If new quantity is 0, remove the product
        }
        
        updateCartUI();
    }
}

function updateCartUI() {
    const cartContainer = document.querySelector('#cart .cart');
    cartContainer.innerHTML = ''; // Clear previous content

    // If the cart is empty, display a message
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    let totalPrice = 0;

    // Display each product in the cart
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <p class="cart-item-name">${product.title}</p>
            <button onclick="increaseProductQuantity(${product.id})">+</button>
            <button id="count">${product.quantity}</button>
            <button onclick="reduceProductQuantity(${product.id})">-</button>
            <button onclick="deleteProductFromCart(${product.id})">Remove</button>
        `;

        cartContainer.appendChild(cartItem);

        // Calculate the total price
        totalPrice += product.price * product.quantity;
    });

    // Append the total price to the cart
    const totalPriceElement = document.createElement('p');
    totalPriceElement.textContent = `Total Ksh ${totalPrice} /=`;
    cartContainer.appendChild(totalPriceElement);
}

