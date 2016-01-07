/**
 * Created by Gosia on 07/01/16.
 */

// timer sluzacy do obliczania czasu do uruchomienia kolejnej animacji.
var timer;
// $(document).ready oznacza poczekanie az caly dokument sie zaladuje.
$(document).ready(function () {
    // to bedziemy wykonywac co kilka sekund.
    var animuj = function () {
        // znajdz slaj ktory jest teraz widoczny
        var biezacy =  $('.galeriaMusea div:visible');

        // potem znajdz nastepny slajd (1 do 6, potem powrot na 1szy)
        var nastepny = biezacy.next();
        if (nastepny.length === 0) {
            nastepny = $('.galeriaMusea div:first');
        }
        // ukryj widoczny
        biezacy.fadeOut(1500);
        // pokaz nastepny
        nastepny.fadeIn(1500);
        // fadeIn i fadeOut wykonuja sie asynchronicznie, czyli nie czeka sie na ich zakonczenie tylko wykonywanie programu leci dalej.
        // ustawiamy timer dla funkcji animuj co 4s (4000ms).
        timer = setTimeout(animuj, 4000);
    };
    // 1sze uruchomienie animacji po 4s.
    timer = setTimeout(animuj, 4000);
});