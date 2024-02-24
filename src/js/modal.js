const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.modal__btn');
const closeBtn = document.querySelector('.modal__close');

btn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.opacity = '1';
    modal.style. pointerEvents = "all"
  })
})

closeBtn.addEventListener('click', () => {
  modal.style.opacity = '0';
  modal.style. pointerEvents = "none"
})


