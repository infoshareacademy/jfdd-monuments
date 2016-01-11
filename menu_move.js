$( document ).ready( function() {
    $(window).scroll(function) {
        var doc-top = $(window).scrollTop();
        var div-glowna +$('#nasz-header').offset().top;
        if (doc_top >=div_glowna) {
            $('.menu_gl').removeClass('menu_div');
            $('hover_orange').addClass('menu_div');
        }
    }
}


