const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function(e) {
  e.preventDefault;
  menuBtn.classList.toggle("menu-btn_active");
  console.log(menuBtn);
};
