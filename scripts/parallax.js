/**
 * Created by gosia on 07.01.16.
 */


$(document).ready(function(){
    var elementZTlem = $('.header');
    $(window).on("load scroll",
        function() {
            var aktualnyScrollOkna = $(window).scrollTop();
            var wektorZmianyTla = aktualnyScrollOkna *0.6 ;

            elementZTlem.css('background-position-y', wektorZmianyTla - 200);

        }
    )

});

