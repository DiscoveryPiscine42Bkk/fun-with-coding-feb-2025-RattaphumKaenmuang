$(document).ready(function() {    
    function changeBalloonCol(balloon) {
        const currentColor = balloon.css('background-color');

        if (currentColor === 'rgb(255, 0, 0)') {
            balloon.css('background-color', 'rgb(0, 255, 0)');
        } else if (currentColor === 'rgb(0, 255, 0)') {
            balloon.css('background-color', 'rgb(0, 0, 255)');
        } else {
            balloon.css('background-color', 'rgb(255, 0, 0)');
        }
    }

    function inflate(balloon) {
        const currentWidth = balloon.css('width');
        const currentHeight = balloon.css('height');

        const newWidth = parseFloat(currentWidth) + 10 + 'px';
        const newHeight = parseFloat(currentHeight) + 10 + 'px';

        balloon.css('width', newWidth);
        balloon.css('height', newHeight);

        if (parseFloat(newWidth) > 420) {
            balloon.css('width', '200px');
            balloon.css('height', '200px');
        }
    }

    function handleClick() {
        const balloon = $('#balloon');
        inflate(balloon);
        changeBalloonCol(balloon);
    }

    function handleLeave() {
        const balloon = $('#balloon');
        const currentWidth = balloon.css('width');
        const currentHeight = balloon.css('height');
        const currentColor = balloon.css('background-color');

        if (parseFloat(currentWidth) > 200) {
            balloon.css('width', parseFloat(currentWidth) - 5 + 'px');
            balloon.css('height', parseFloat(currentHeight) - 5 + 'px');
        }

        if (currentColor === 'rgb(255, 0, 0)') {
            balloon.css('background-color', 'rgb(0, 0, 255)');
        } else if (currentColor === 'rgb(0, 0, 255)') {
            balloon.css('background-color', 'rgb(0, 255, 0)');
        } else {
            balloon.css('background-color', 'rgb(255, 0, 0)');
        }
    }

    $('#balloon').click(handleClick);
    $('#balloon').mouseleave(handleLeave);
});