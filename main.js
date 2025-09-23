const cartButton = document.querySelectorAll(".add-to-cart-button");
const cartCount = document.querySelector(".cartCount");
const productGrid = document.querySelector(".product-grid");

// Product List

const products = [
  {
    id: 0,
    name: "Samurai King Resting",
    price: 1000,
    image: "./images/dog.png",
    category: "Pets",
  },

  {
    id: 1,
    name: "Red Bench",
    image: "./images/red-bench.png",
    price: 3.89,
    category: "People",
  },

  {
    id: 2,
    name: "Egg Ballon",
    image: "./images/egg-baloon.png",
    category: "Food",
    price: 93.89,
  },

  {
    id: 3,
    name: "Egg Ballon",
    image: "./images/egg-baloon.png",
    category: "Food",
    price: 93.89,
  },

  {
    id: 4,
    name: "Man",
    image: "./images/Man.png",
    category: "People",
    price: 100,
  },

  {
    id: 5,
    name: "Architecture",
    image: "./images/Architecture.png",
    category: "Landmarks",
    price: 101,
  },
];

// Handle Event Listener on my object
// cartButton.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const productId = e.target.dataset.id;
//     addToCart(productId);
//   });
// });

// Handle add to cart and push to cart
let cart = [];

function addToCart(productId) {
  const product = products.find((p) => p.id === Number(productId));
  if (!product) return;
  cart.push(product);

  //   Call update cart count
  updateCartCount();
  showPopup(product);
}

// show popup everything add to cart button is clicked
function showPopup(product) {
  const popUp = document.createElement("div");
  popUp.classList.add("popup");
  popUp.innerHTML = `
      <div class="popup-content">
        <p><strong>${product.name}</strong><br>$${product.price}</p>
        <img src=${product.image} alt="Product image"/>
      </div>
      <button class="close-popup">CLEAR</button>
    `;

  document.body.appendChild(popUp);

  const timeout = setTimeout(() => popUp.remove(), 5000);

  // close popup
  popUp.querySelector(".close-popup").addEventListener("click", () => {
    popUp.remove();
  });
}

// Update Cart number
function updateCartCount() {
  cartCount.style.padding = "2px 6px";
  cartCount.style.backgroundColor = "black";
  cartCount.textContent = cart.length;
  console.log(cartCount);
}

// Rendering Product
products.forEach((product) => {
  product.id > 0 &&
    (productGrid.innerHTML += `
    <div class="grid">
      <img src=${product.image} />
      <button class="add-to-cart-button" data-id${product.id}>ADD TO CART</button>
      <p>${product.category}</p>
      <p>${product.name}</p>
      <p>${product.price}</p>
    </div>
  `);
});

// Add event liostener to photogrid so that it works anytime

productGrid.addEventListener;
