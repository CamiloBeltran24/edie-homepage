(() => {
  'use strict';

  let burgerMenu = document.querySelector('.js-burger-menu');

  burgerMenu.addEventListener('click', () => {
    showNavigation();
  })

  function showNavigation(){
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  }
})();