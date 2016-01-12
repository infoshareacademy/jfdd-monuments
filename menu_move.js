$( document ).ready( function() {
    $(window).scroll(function) {
        var doc_top = $(window).scrollTop() + 10;
        var menu_glowna = $('#nasz-header').offset().top;
        var menu_feat = $('#features_id').offset().top;
        var menu_contact = $('#contact_id').offset.top;
        if (doc_top >= menu_glowna && doc_top <= menu_feat) {
            $('menu_div_header').addClass('hover_orange');
        } else
            $('menu_div_header').removeClass('hover_orange');
        }
        if (menu_glowna <= menu_feat && menu_feat >= menu_contact) {
            $('menu_div_feat').addClass('hover_orange');
        } else
            $('menu_div_feat').removeClass('hover_orange');
        if (menu_contact >= menu_feat) {
            $('menu_div_contact').addClass('hover_orange');
        } else
            $('menu_div_contact').removeClass('hover_orange');
    });



