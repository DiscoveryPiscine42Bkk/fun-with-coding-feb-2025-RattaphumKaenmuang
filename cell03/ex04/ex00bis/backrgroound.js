$(document).ready(function() {
    function getRandomCol() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBGCol() {
        $('body').css('background-color', getRandomCol());
    }

    $('#bg-button').click(function() {
        changeBGCol();
    });
});