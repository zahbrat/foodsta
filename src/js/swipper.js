const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  speed: 1000,
  keyboard: {
    enabled: true,
  },

  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



