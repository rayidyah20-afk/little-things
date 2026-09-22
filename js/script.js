// ===============================
// Littlé Things - JavaScript
// ===============================

// ===============================
// NAVBAR MENU
// ===============================

const navbarNav = document.querySelector(".navbar-nav");
const matchaMenu = document.querySelector("#matcha-menu");

matchaMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// ===============================
// TUTUP MENU SAAT KLIK DI LUAR
// ===============================

document.addEventListener("click", function (event) {
  if (!matchaMenu.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});

// ===============================
// TUTUP MENU SAAT KLIK LINK
// ===============================

const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbarNav.classList.remove("active");
  });
});

// ===============================
// SEARCH BUTTON
// ===============================

const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Fitur search Littlé Things belum tersedia ♡");
});

// ===============================
// SHOPPING CART
// ===============================

const shoppingCart = document.querySelector("#shopping-cart");

shoppingCart.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Your cart is still empty ♡");
});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you for contacting Littlé Things ♡");

  contactForm.reset();
});
