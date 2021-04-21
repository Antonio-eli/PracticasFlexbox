function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    let menuToogle = document.querySelector('.toogle');
    let navigation = document.querySelector('.navigation');
    menuToogle.classList.toggle('active');
    navigation.classList.toggle('active');
}