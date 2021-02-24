let menu = document.querySelector('#menu');
let toogleMenu = document.querySelector('#toogleMenu');

toogleMenu.addEventListener('click', function() {
    menu.classList.toggle('menuOn');
});