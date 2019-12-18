const menu = document.querySelector('.navigation__menu');
const menuOut = document.querySelector('.navigation__menu--show');

function noScroll() {
    window.scrollTo(0,0);
}

function renderMenu(menu) {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        window.removeEventListener('scroll', noScroll);

    } else {
        menu.style.display = 'block'
        window.addEventListener('scroll', noScroll);
    }
}

menu.addEventListener('click', () => {
    renderMenu(menuOut);
});

