/**
 * Created by Lukasz on 2016-01-17.
 */

//hover - podświetla linki wzg położenia strony

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
            $('.menu_div_add_feat').removeClass('hover_js');
            $('.menu_div_contact').addClass('hover_js');
        } else {
            $('.menu_div_contact').removeClass('hover_js');
        }
    });
});

//płynnie przewija str po kliku w menu

$(document).ready(function () {
    $('.menu_div_header, .menu_div_feat, .menu_div_add_feat, .menu_div_contact').click(function () {

        var body = $('html, body'); // ten element jest wymagany do działania tego efektu
        var targetElementQuery = $(this).find('a').attr('href'); //wyciąga konkretne id potrzebne do porównań
        var $targetElement = $(targetElementQuery); //tworzy obiekt jQuery do którego chcemy przesunąć ekran
        body.stop().animate({scrollTop: $targetElement.offset().top}, '1000', 'swing', function () {
        //animate zmienia w sposób ciągły wartości atrybutów w obiekcie, który animuje stara się doprowadzić te wartości
        //do takich wartości, które podajemy w obiekcie będącym pierwszym parametrem
        })
    });

});