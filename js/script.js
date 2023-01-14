const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
   
  });
