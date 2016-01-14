/**
 * Created by Gosia on 12/01/16.
 */

/* formularz nie zostanie wyslany gdy nie wystapi jedna z ponizszych akcji czyli mouseClick, scroll, keyDown,
 * czyli formularz nie zostanie w ogole wyslany  */
$(function() {
    var mouseClick = false;
    var scroll = false;
    var keyDown = false;
    $(window).scroll(function(){

        scroll=true;

    });
    $(window).keydown(function(){

        keyDown=true;

    });
    $(window).click(function(){

        mouseClick=true;

    });
    $(".contact form").submit(function(event){
        event.preventDefault();

        if (mouseClick || scroll || keyDown){

        } else{
            return false;
        }
        });

});

