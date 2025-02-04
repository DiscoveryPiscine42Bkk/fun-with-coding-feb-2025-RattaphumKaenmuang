function getRandomCol() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function increaseButtonSize() {
    const button = document.querySelector('button');
    const currentFontSize = window.getComputedStyle(button).fontSize;
    const newFontSize = parseFloat(currentFontSize) + 2 + 'px';

    button.style.fontSize = newFontSize;
}

function changeBGCol() {
    document.body.style.backgroundColor = getRandomCol();
}

function buttonFunc() {
    increaseButtonSize();
    changeBGCol();
}