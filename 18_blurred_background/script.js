const block = document.querySelector('.block');

block.onmousedown = function(e) {
  window.addEventListener('mousemove', function() {
    block.style.left = e.pageX + 'px';
    block.style.top = e.pageY + 'px';
    console.log(block);
  });
};
