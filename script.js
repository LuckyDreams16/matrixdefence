// Hämta hamburgarikonen och menyn
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Lyssna på klick på hamburgarikonen
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Scriptet körs!"); // 🔍 Kolla om detta syns i konsolen

    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            console.log("Menyknapp klickad!"); // 🔍 Se om klick fungerar
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Element saknas! Kontrollera HTML.");
    }
});
