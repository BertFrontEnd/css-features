const menuBtn = document.querySelector('.menu-btn');
const menuBlock = document.querySelector('.menu-block');
const myMenu = document.querySelector('.menu');

menuBtn.onclick = function(e) {
  e.preventDefault();
  menuBtn.classList.toggle('menu-btn_active');
  menuBlock.classList.toggle('menu-block_toggle');
  myMenu.classList.toggle('menu_active');
  console.log(menuBtn);
  console.log(myMenu);
};
