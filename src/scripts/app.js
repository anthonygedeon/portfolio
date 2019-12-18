const nav = document.querySelector('.nav')
const menu = document.querySelector('.nav__menu');

function changeColor() {
    nav.style.backgroundColor = '#121212';
}

menu.addEventListener('click', changeColor);