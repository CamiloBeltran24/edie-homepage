(() => {
  'use strict';

  //HTML References
  const BURGER_MENU = document.querySelector('.js-burger-menu');
  const HEADER = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

    scroll_position >= 80
      ? HEADER.classList.add('active')
      : HEADER.classList.remove('active');
  });

  BURGER_MENU.addEventListener('click', () => {
    const NAVIGATION = document.querySelector('.header-nav');
    NAVIGATION.classList.toggle('active');
    BURGER_MENU.classList.toggle('active');
  });
})();
