// Hämta hamburgarikonen och menyn
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Lyssna på klick på hamburgarikonen
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
