$(document).ready(function () {
    $(window).on('load scroll', function () {
        var doc_top = $(window).scrollTop() + 10,
            menu_glowna = $('#nasz_header').offset().top,
            menu_feat = $('#features_id').offset().top,
            menu_contact = $('#contact_id').offset.top;
        if (doc_top >= menu_glowna && doc_top <= menu_feat) {
            $('.menu_div_header').addClass('hover_orange');
        } else {
            $('.menu_div_header').removeClass('hover_orange');
        }
        if (doc_top <= menu_glowna && doc_top >= menu_feat) {
            $('.menu_div_feat').addClass('hover_orange');
        } else {
            $('.menu_div_feat').removeClass('hover_orange');
        }
        if (doc_top <= menu_feat && doc_top <= menu_contact) {
        $('.menu_div_contact').addClass('hover_orange');
        } else {
            $('.menu_div_contact').removeClass('hover_orange');
        }
    });
});



