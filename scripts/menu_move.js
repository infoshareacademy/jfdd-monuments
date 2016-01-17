/**
 * Created by Lukasz on 2016-01-17.
 */

$(document).ready(function () {
    $(window).on('load scroll', function () {
        var doc_top = $(window).scrollTop() + 10,
            menu_glowna = $('#nasz_header').offset().top,
            menu_feat = $('#features_id').offset().top,
            menu_add_feat = $('#feat_add_id').offset().top,
            menu_contact = $('#contact_id').offset().top;


        if (doc_top < menu_feat) {
            $('.menu_div_header').addClass('hover_js');
        } else {
            $('.menu_div_header').removeClass('hover_js');
        }


        if (doc_top >= menu_feat && doc_top <= menu_add_feat) {
            $('.menu_div_feat').addClass('hover_js');
        } else {
            $('.menu_div_feat').removeClass('hover_js');
        }

        if (doc_top >= menu_add_feat && doc_top <= menu_contact) {
            $('.menu_div_add_feat').addClass('hover_js');
        } else {
            $('.menu_div_add_feat').removeClass('hover_js');
        }

        if (
            doc_top >= menu_contact ||
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        ) {
            //$('menu_div_add_feat').removeClass('hover_js');
            $('menu_div_feat').removeClass('hover_js');
            $('.menu_div_contact').addClass('hover_js');
        } else {
            $('.menu_div_contact').removeClass('hover_js');
        }
    });
});

