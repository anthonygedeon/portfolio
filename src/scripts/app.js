const menuBar = document.querySelector('.home__nav-bar');

function slideOut() {
    const bar = document.querySelector('.home__nav-anime')
    bar.style.left = '0';
}

menuBar.addEventListener('click', slideOut);
menuBar.addEventListener('touchstart', slideOut);