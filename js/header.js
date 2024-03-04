
const navMenu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-toggle");
const hamburguer = document.querySelector(".fas.fa-bars");

toggle.addEventListener("click", () => {
    hamburguer.classList.toggle("fa-solid");
    hamburguer.classList.toggle("fa-x");

    if (navMenu.classList.contains('nav-menu-visible')) {
        // Si la tiene, reemplazarla por "nav-menu-oculto"
        navMenu.classList.remove('nav-menu-visible');
        navMenu.classList.add('nav-menu-oculto');
    } else {
        // Si no la tiene, reemplazarla por "nav-menu-visible"
        navMenu.classList.remove('nav-menu-oculto');
        navMenu.classList.add('nav-menu-visible');
    }
})  