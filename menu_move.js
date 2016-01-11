$( document ).ready( function() {
    $(window).scroll(function) {
        var doc-top = $(window).scrollTop();
        var div-glowna = $('#nasz-header').offset().top;
        if (doc_top >= div_glowna) {
            $('.menu_div_header').removeClass('');
            $('.hover_orange').addClass('');
        } else if (doc_top >= $("#features_id")
    }
}


