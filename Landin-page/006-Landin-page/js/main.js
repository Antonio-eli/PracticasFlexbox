function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.backgroundColor = color;
}

function MenuToogle() {
    const toogleMenu = document.querySelector('.toogleMenu');
    const navigation = document.querySelector('.navigation');
    toogleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}