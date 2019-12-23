import {sleep} from './utils.js'

const bottomLine = document.querySelectorAll('line')[1];
const menuBar = document.querySelector('.home__nav-bar');
const bar = document.querySelector('.home__nav-anime');

let barPosition = '-19px';

function collapse() {
    bottomLine.classList.add('bottom-line')

    if (bottomLine.className.baseVal == 'bottom-line') {
        console.log('remove')
        bottomLine.classList.remove('bottom-line')
    }
}

function slideOut() {
    bar.style.left = barPosition;
}

export function reverse() {
    
}

function steps() {
    sleep(100).then(() => {
        collapse()
    })
    .then(() => {
        slideOut()
    });
}

export {steps, menuBar}
