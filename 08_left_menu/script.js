const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');

menuBtn.onclick = function(e) {
  e.preventDefault();
  menu.classList.toggle('menu--active');
  content.classList.toggle('content--active');
  console.log(menu);
  console.log(content);
};
