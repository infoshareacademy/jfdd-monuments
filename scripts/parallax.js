/**
 * Created by gosia on 07.01.16.
 */


$(document).ready(function(){

    var poprzedniScrollOkna = 0;
    var elementZTlem = $('.header');

    $(window).scroll(
        function() {
            var aktualnyScrollOkna = $(window).scrollTop();
            var aktualnyYTla = elementZTlem.css('background-position-y').split('px')[0]*1;
            var wektorZmianyTla = 30 ;

            var kierunek = (poprzedniScrollOkna > aktualnyScrollOkna) ? 1 : -1;


            elementZTlem.css('background-position-y', aktualnyYTla - wektorZmianyTla*kierunek);


            poprzedniScrollOkna = aktualnyScrollOkna;
        }
    )

});