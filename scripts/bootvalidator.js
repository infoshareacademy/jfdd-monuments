/**
 * Created by Gosia on 12/01/16.
 */

/* po wypelnieniu calego formularza zostanie wyslany formularz*/
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

    //debugger;
    $(".contact form").submit(function(event){
        event.preventDefault();
        //debugger;

        if (mouseClick || scroll || keyDown){
alert('dziękuję');

        } else{
            return false;
        }

    });

});


