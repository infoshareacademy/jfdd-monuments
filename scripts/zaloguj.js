$(document).ready(function() {
    $('.zaloguj__close').click(function () {
        $('.zaloguj').fadeOut(500);
        $('.zaloguj__background').fadeOut(500);


    });


    //wywołanie zaloguj
    $('.zaloguj__wywolanie').click(function () {
        $('.zaloguj').fadeIn(500);
        $('.zaloguj__background').fadeIn(500);

    })

});