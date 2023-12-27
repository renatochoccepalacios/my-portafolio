
const navMenu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-toggle");
const hamburguer = document.querySelector(".fas.fa-bars");

toggle.addEventListener("click", () => {
    hamburguer.classList.toggle("fa-solid");
    hamburguer.classList.toggle("fa-x");
    navMenu.classList.toggle("nav-menu-visible"); // cambiamos la clase de nav-menu  a nav-menu-visible

    if (navMenu.classList.contains("nav-menu-visible")) {
        toggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        toggle.setAttribute("aria-label", "Abrir menú");
    }
})  