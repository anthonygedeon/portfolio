const bottomLine = document.querySelectorAll('line')[1];
const menuBar = document.querySelector('.home__nav-bar');
const bar = document.querySelector('.home__nav-anime');

menuBar.addEventListener('click', () => {
    bar.classList.toggle('home__nav--anime');
    bottomLine.classList.toggle('bottom-line');
});
