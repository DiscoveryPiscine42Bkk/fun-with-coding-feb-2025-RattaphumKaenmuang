function changeBalloonCol(balloon) {
    const currentColor = window.getComputedStyle(balloon).backgroundColor;

    if (currentColor === 'rgb(255, 0, 0)') {
        balloon.style.backgroundColor = 'rgb(0, 255, 0)';
    } else if (currentColor === 'rgb(0, 255, 0)') {
        balloon.style.backgroundColor = 'rgb(0, 0, 255)';
    } else {
        balloon.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}

function inflate(balloon) {
    const currentWidth = window.getComputedStyle(balloon).width;
    const currentHeight = window.getComputedStyle(balloon).height;

    const newWidth = parseFloat(currentWidth) + 10 + 'px';
    const newHeight = parseFloat(currentHeight) + 10 + 'px';

    balloon.style.width = newWidth;
    balloon.style.height = newHeight;

    if (newWidth > '420px') {
        balloon.style.width = '200px';
        balloon.style.height = '200px';
    }
}

function handleClick() {
    const balloon = document.getElementById('balloon');
    inflate(balloon);
    changeBalloonCol(balloon);
}

function handleLeave() {
    const balloon = document.getElementById('balloon');
    currentWidth = window.getComputedStyle(balloon).width;
    currentHeight = window.getComputedStyle(balloon).height;
    currentColor = window.getComputedStyle(balloon).backgroundColor;

    if (currentWidth > '200px') {
        balloon.style.width = parseFloat(currentWidth) - 10 + 'px';
        balloon.style.height = parseFloat(currentHeight) - 10 + 'px';
    }

    if (currentColor === 'rgb(255, 0, 0)') {
        balloon.style.backgroundColor = 'rgb(0, 0, 255)';
    } else if (currentColor === 'rgb(0, 0, 255)') {
        balloon.style.backgroundColor = 'rgb(0, 255, 0)';
    } else {
        balloon.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}