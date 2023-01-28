const promotion = new Swiper('.section-promotion__swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.section-promotion__next',
    prevEl: '.section-promotion__prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const inside = new Swiper('.section-inside__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,

  breakpoints: {

    769: {
      slidesPerView: 1.9,
      spaceBetween: 10
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.section-inside__next',
    prevEl: '.section-inside__prev',
  },



});