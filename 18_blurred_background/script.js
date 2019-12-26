const block = document.querySelector('.block');

block.onmousedown = function(e) {
  let shiftX = e.pageX - getCoords(block).left;
  let shiftY = e.pageY - getCoords(block).top;

  moveAt(e);

  function moveAt(e) {
    block.style.left = e.pageX - shiftX + 'px';
    block.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  block.onmouseup = function() {
    document.onmousemove = null;
    block.onmouseup = null;
  };

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
    };
  }
};
