// =====================================
// Littlé Things.
// JavaScript
// =====================================

// =====================================
// NAVBAR
// =====================================

const navbarNav = document.querySelector(".navbar-nav");

const matchaMenu = document.querySelector("#matcha-menu");

if (matchaMenu) {
  matchaMenu.addEventListener("click", function (event) {
    event.preventDefault();

    navbarNav.classList.toggle("active");
  });
}

document.addEventListener("click", function (event) {
  if (
    matchaMenu &&
    navbarNav &&
    !matchaMenu.contains(event.target) &&
    !navbarNav.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbarNav.classList.remove("active");
  });
});

// =====================================
// SEARCH
// =====================================

const searchButton = document.querySelector("#search");

if (searchButton) {
  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Fitur search Littlé Things belum tersedia ♡");
  });
}

// =====================================
// CART
// =====================================

let cart = [];

const cartButton = document.querySelector("#shopping-cart");

const cartSidebar = document.querySelector("#cart-sidebar");

const closeCart = document.querySelector("#close-cart");

const cartItems = document.querySelector("#cart-items");

const totalPrice = document.querySelector("#total-price");

const checkoutButton = document.querySelector("#checkout-btn");

// =====================================
// OPEN CART
// =====================================

cartButton.addEventListener("click", function (event) {
  event.preventDefault();

  cartSidebar.classList.add("active");
});

// =====================================
// CLOSE CART
// =====================================

closeCart.addEventListener("click", function () {
  cartSidebar.classList.remove("active");
});

// =====================================
// ADD CART
// =====================================

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const name = button.dataset.name;

    const price = Number(button.dataset.price);

    const image = button.dataset.image;

    const existingItem = cart.find(function (item) {
      return item.name === name;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        name: name,

        price: price,

        image: image,

        quantity: 1,
      });
    }

    updateCart();

    // buka cart

    cartSidebar.classList.add("active");
  });
});

// =====================================
// UPDATE CART
// =====================================

function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `

            <p class="empty-cart">

                Your cart is empty ♡

            </p>

        `;

    totalPrice.textContent = "Rp 0";

    updateCartCount();

    return;
  }

  let total = 0;

  cart.forEach(function (item, index) {
    const itemTotal = item.price * item.quantity;

    total += itemTotal;

    const cartItem = document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>


                    <p>
                        Rp ${item.price.toLocaleString("id-ID")}
                    </p>


                    <div
                        class="cart-item-control"
                    >

                        <button
                            class="minus-btn"
                            data-index="${index}"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            class="plus-btn"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>

                </div>


                <div
                    class="cart-item-total"
                >

                    <div>
                        Rp ${itemTotal.toLocaleString("id-ID")}
                    </div>


                    <button
                        class="remove-cart"
                        data-index="${index}"
                    >
                        ×
                    </button>

                </div>

            `;

    cartItems.appendChild(cartItem);
  });

  totalPrice.textContent = "Rp " + total.toLocaleString("id-ID");

  updateCartCount();

  // =================================
  // PLUS
  // =================================

  document.querySelectorAll(".plus-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(button.dataset.index);

      cart[index].quantity++;

      updateCart();
    });
  });

  // =================================
  // MINUS
  // =================================

  document.querySelectorAll(".minus-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(button.dataset.index);

      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }

      updateCart();
    });
  });

  // =================================
  // REMOVE
  // =================================

  document.querySelectorAll(".remove-cart").forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(button.dataset.index);

      cart.splice(index, 1);

      updateCart();
    });
  });
}

// =====================================
// CART COUNT
// =====================================

function updateCartCount() {
  let count = 0;

  cart.forEach(function (item) {
    count += item.quantity;
  });

  let badge = document.querySelector(".cart-count");

  if (!badge) {
    badge = document.createElement("span");

    badge.classList.add("cart-count");

    cartButton.appendChild(badge);
  }

  badge.textContent = count;

  if (count === 0) {
    badge.style.display = "none";
  } else {
    badge.style.display = "flex";
  }
}

// =====================================
// CHECKOUT
// =====================================

checkoutButton.addEventListener("click", function () {
  // cart kosong

  if (cart.length === 0) {
    alert("Your cart is empty ♡");

    return;
  }

  // customer

  const name = document.querySelector("#customer-name").value.trim();

  const email = document.querySelector("#customer-email").value.trim();

  const phone = document.querySelector("#customer-phone").value.trim();

  // validasi

  if (name === "" || email === "" || phone === "") {
    alert("Please complete your customer details ♡");

    return;
  }

  // hitung total

  let total = 0;

  cart.forEach(function (item) {
    total += item.price * item.quantity;
  });

  // buat detail order

  let orderDetails = "";

  cart.forEach(function (item) {
    orderDetails += item.name + " x " + item.quantity + "\n";
  });

  // tampilkan pesan

  alert(
    "Thank you, " +
      name +
      "! ♡\n\n" +
      "Your order:\n" +
      orderDetails +
      "\nTotal: Rp " +
      total.toLocaleString("id-ID"),
  );

  // kosongkan cart

  cart = [];

  updateCart();

  // kosongkan form

  document.querySelector("#customer-name").value = "";

  document.querySelector("#customer-email").value = "";

  document.querySelector("#customer-phone").value = "";
});

// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.querySelector(".contact form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you for contacting Littlé Things ♡");

    contactForm.reset();
  });
}

// =====================================
// START
// =====================================

updateCart();
