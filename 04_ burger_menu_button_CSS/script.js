const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function(e) {
  e.preventDefault;
  menuBtn.classList.toggle("menu-btn_active");
  menuBtn.classList.toggle("menu-btn_toggle");
  console.log(menuBtn);
};
