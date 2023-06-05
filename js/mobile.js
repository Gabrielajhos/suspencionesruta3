var menu = document.getElementById('navegacion_principal');
var altura = menu.offsetTop;
window.addEventListener('scroll', function () {
  'use strict';
  if (window.pageYOffset > altura) {
    menu.classList.add('.menu-fixed');
  } else {
    menu.classList.remove('.menu-fixed');
  }
});
