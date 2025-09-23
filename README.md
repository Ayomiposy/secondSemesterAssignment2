# 📦 secondSemesterAssignment2 – Bejamas Product Page

This project is a product listing and cart functionality demo built using HTML, CSS, and Vanilla JavaScript.
It dynamically renders products on the page, allows users to add items to a cart, updates the cart count, and displays a popup notification for each added item.

## ✨ Features

1. Dynamic Product Grid
   Products are stored in a JavaScript array and rendered dynamically into the DOM.

2. Add to Cart Functionality
   Each product includes an Add to Cart button. Clicking it:

   1. Adds the product to the cart array.

   2. Updates the cart count visually in the header.

   3. Displays a popup showing the product name, price, and image.

3. Popup Notification

   1. Auto-disappears after 5 seconds.

   2. Can be manually closed by clicking the CLEAR button.

4. Reusable Event Listeners
   The same addToCart() function works for both static and dynamically rendered products

5. Category & Price Filters (HTML prepared)
   The project includes checkboxes for filtering products by category and price.

## 🛠️ Technologies Used

1. HTML5 – Page structure and semantic layout.

2. CSS3 – Styling, layout, and responsive design.

3. Vanilla JavaScript (ES6) – DOM manipulation, dynamic rendering, and event handling.

## 📂 Project Structure

#📦 secondSemesterAssignment2
┣ 📜 index.html # Main HTML file
┣ 📜 style.css # Styling for layout and popup
┣ 📜 main.js # JS logic for rendering and cart functionality
┗ 📂 images/ # Product and UI images

## 🚀 Setup Instructions

Clone or Download this repository.

Open the project folder in VS Code or any code editor.

Launch index.html in your browser (double-click or use Live Server).

Interact with products — add them to cart and see the popup notifications.
