const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("v-class");
    navMenu.classList.toggle("v-class");
}