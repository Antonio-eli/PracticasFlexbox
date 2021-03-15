const btn_search = document.querySelector(".btnBuscar");
const txt_search = document.querySelector(".txtBuscar");

// Variables de menu responsive e icono hamburguer
const btn_menu = document.querySelector(".btnmenu");
const menu = document.querySelector(".nav");

const linea1 = document.querySelector(".l1");
const linea2 = document.querySelector(".l2");
const linea3 = document.querySelector(".l3");

// Efectos del input search
btn_search.onmouseover = function() {
    txt_search.style.transform = "scaleX(1)";
}
btn_search.onclick = function() {
    txt_search.style.transform = "scaleX(0)";
}

//Efectos del menu responsive y menu hamburguer
btn_menu.onclick = function() {
    menu.classList.toggle("mostrar");
    linea1.classList.toggle("rotatel1");
    linea2.classList.toggle("scalel2");
    linea3.classList.toggle("rotatel3");
}