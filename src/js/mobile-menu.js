const popupBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header-popup__menu');
const closePopupBtn = document.querySelector('.header-popup__close');


function toggleMenu() {
    mobileMenu.classList.toggle('is-hidden');
}

popupBtn.addEventListener('click', toggleMenu)
closePopupBtn.addEventListener('click', toggleMenu)
