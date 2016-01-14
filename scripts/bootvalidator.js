/**
 * Created by Gosia on 12/01/16.
 */

/*dopiero  po wypelnieniu calego formularza zostanie wyslany formularz*/
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
        //event.preventDefault();

        if (mouseClick || scroll || keyDown){

        } else{
            return false;
        }

    });

});


