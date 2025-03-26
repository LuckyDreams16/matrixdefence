const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Lägg till eller ta bort klassen "active"
});
<script>
  function toggleInfo() {
    const info = document.getElementById("mer-info");
    const button = document.getElementById("toggle-button");

    if (info.style.display === "none") {
      info.style.display = "block";
      button.textContent = "Visa Mindre";
    } else {
      info.style.display = "none";
      button.textContent = "Läs Mer";
    }
  }
</script>
