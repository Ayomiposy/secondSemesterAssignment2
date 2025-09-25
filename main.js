const cartButton = document.querySelectorAll(".add-to-cart-button");
const cartCount = document.querySelector(".cartCount");
const productGrid = document.querySelector(".product-grid");
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const pageNum = document.querySelectorAll(".num");
const nextPage = document.querySelector(".arrow-right");
const backPage = document.querySelector(".arrow-left");
const mobileFilter = document.querySelector(".mobile-filter");


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
    range: "$20 - $100",
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
    price: 100.0,
  },

  {
    id: 5,
    name: "Architecture",
    image: "./images/Architecture.png",
    category: "Landmarks",
    price: 101.0,
  },

  {
    id: 6,
    name: "Architecture",
    image: "./images/Architecture.png",
    category: "Landmarks",
    price: 101.0,
  },
];

// Handle Event Listener on my object
cartButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productId = e.target.dataset.id;
    addToCart(productId);
  });
});

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
function renderProduct(filteredProduct = products) {
  // clear the first rendering before filtering.
  productGrid.innerHTML = "";

  filteredProduct.forEach((product) => {
    product.id > 0 &&
      (productGrid.innerHTML += `
    <div class="grid">
      <img src=${product.image} />
      <button class="add-to-cart-button" data-id=${
        product.id
      }>ADD TO CART</button>
      <p>${product.category}</p>
      <p class="product-grid-name">${product.name}</p>
      <p class="product-grid-price">$${parseFloat(product.price).toFixed(2)}</p>
    </div>
  `);
  });
}

renderProduct();

// Add event liostener to photogrid so that it works anytime
productGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart-button")) {
    const productId = e.target.dataset.id;
    addToCart(productId);
  }
});

// Handle Checkbox changes
checkBoxes.forEach((checkbox) =>
  checkbox.addEventListener("change", filteredProduct)
);

function filteredProduct() {
  const selected = Array.from(checkBoxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selected.length === 0) {
    renderProduct(products);
  } else {
    const filtered = products.filter((product) =>
      selected.includes(product.category)
    );
    renderProduct(filtered);
  }
}


// Handle pagination


function activePage(page) {
  pageNum.forEach((p, index) => {
    if(index + 1 === page) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
}

let currentPage = 1;

// Handle clicked page number 
pageNum.forEach((page, index) => {
  page.addEventListener("click", () => {
    currentPage = index + 1
    activePage(currentPage);
  })
})

// Handle Next Page
nextPage.addEventListener("click", () => {
  if(currentPage < pageNum.length) {
    currentPage++
  }
  activePage(currentPage)
})

// Handle Back Page
backPage.addEventListener("click", () => {
  if(currentPage > 1) {
    currentPage--;
    activePage(currentPage);
  }
})

// Handle Mobile menu
const filterMenu = document.querySelector("aside").innerHTML;
console.log(filterMenu);

function mobileMenu () {
  const menu = document.createElement("div")
  menu.classList.add("Mobile-filter-menu")
  menu.innerHTML = ` 
  ${filterMenu}
  <div>
  <button class="close-menu">CLOSE</button>
  <button class="save-menu">SAVE</button>
  </div>`

  document.body.appendChild(menu);

  // close Menu
  menu.querySelector(".close-menu").addEventListener("click", () => {
    menu.remove();
  })
}