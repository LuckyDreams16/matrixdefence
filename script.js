document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active"); // Visar/döljer menyn
            console.log("Hamburgarmenyn klickad!"); // ✅ Kolla om detta syns i konsolen
        });
    } else {
        console.error("Element saknas! Kontrollera HTML.");
    }
});
