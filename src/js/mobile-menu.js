const modalBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header-popup__menu');
const closeMenuBtn = document.querySelector('.header-popup__close');


function toggleMenu() {
    mobileMenu.classList.toggle('is-hidden');
}

modalBtn.addEventListener('click', toggleMenu)
closeMenuBtn.addEventListener('click', toggleMenu)
