var modal = document.querySelector('.modal');

document.querySelector('.promo__btn').onclick = function () {
  modal.style.display = 'block';
};
document.querySelector('.modal__close').onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
