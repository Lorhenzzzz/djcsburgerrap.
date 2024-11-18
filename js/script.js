document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const cartIcon = document.getElementById("cart-icon");
  const cartItemsDisplay = document.getElementById("cart-items-display");
  const placeOrderButton = document.getElementById("place-order-button");
  const orderForm = document.getElementById("order-form");
  
  let cartItems = [];

  // Add to cart button event listener
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const itemName = button.dataset.name;
      const itemPrice = parseFloat(button.dataset.price);
      
      cartItems.push({ name: itemName, price: itemPrice });
      updateCartDisplay();
    });
  });

  // Cart icon click event listener
  cartIcon.addEventListener("click", function() {
    toggleCartDisplay();
  });

  // Place order button click event listener
  placeOrderButton.addEventListener("click", function() {
    if (validateForm()) {
      placeOrder();
    } else {
      alert("Please fill out all fields in the form before placing the order.");
    }
  });

  // Order form submit event listener
  orderForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      placeOrderButton.disabled = false;
    } else {
      placeOrderButton.disabled = true;
    }
  });

  // Update cart display
  function updateCartDisplay() {
    cartItemsDisplay.innerHTML = "";
    cartItems.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsDisplay.appendChild(itemElement);
    });
  }

  // Toggle cart display
  function toggleCartDisplay() {
    cartItemsDisplay.classList.toggle("show");
  }

  // Place order function
  function placeOrder() {
    alert("Your order has been placed!");
    cartItems = [];
    updateCartDisplay();
    resetForm();
  }

  // Validate form function
  function validateForm() {
    const nameInput = orderForm.elements["name"];
    const numberInput = orderForm.elements["number"];
    const guestsInput = orderForm.elements["guests"];
    const tableInput = orderForm.elements["table"];
    
    return nameInput.value.trim() !== "" && 
           numberInput.value.trim() !== "" && 
           guestsInput.value.trim() !== "" &&
           tableInput.value.trim() !== "";
  }

  // Reset form function
  function resetForm() {
    orderForm.reset();
  }

  let menu = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.header .flex .navbar');

  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  menu.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
});
