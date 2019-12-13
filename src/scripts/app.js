const menu = document.querySelector('.navigation__menu');
const menuOut = document.querySelector('.navigation__menu--show');

function renderMenu(menu) {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

menu.addEventListener('click', () => {
    renderMenu(menuOut);
});

