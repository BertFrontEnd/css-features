const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu-nav');

menuBtn.onclick = function(e) {
  e.preventDefault;
  menuBtn.classList.toggle('menu-btn__active');
  menuBtn.classList.toggle('menu-btn__toggle');
  navMenu.classList.toggle('menu-nav__active');
  console.log(menuBtn);
  console.log(navMenu);
};
