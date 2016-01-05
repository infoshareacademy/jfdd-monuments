$(document).ready(function() {
    $('.easter__close').click(function() {
        $('.easter').fadeOut(500);
        $('.overlay').fadeOut(500);
        $('.easter span:not(.easter__counters__highscore) em').text('0');
    });

    $('.wywolanie__easter').click(function() {
        $('.easter').fadeIn(500);
        $('.overlay').fadeIn(500);

        var mapWidth = $('.easter__map').width();
        console.log(mapWidth);
        var mapHeight = $('.easter__map').height();
        console.log(mapHeight);
        var routeLimit = mapHeight + mapWidth;
        console.log(routeLimit);
        routeLimit = Math.round(routeLimit);
        $('.easter__counters__limit em').text(routeLimit);
    });

    $( window ).resize(function() {
        if ($('.easter').is(":visible")) {
            var mapWidth = $('.easter__map').width();
            console.log(mapWidth);
            var mapHeight = $('.easter__map').height();
            console.log(mapHeight);
            var routeLimit = mapHeight + mapWidth;
            console.log(routeLimit);
            routeLimit = Math.round(routeLimit);
            $('.easter__counters__limit em').text(routeLimit);
        }
    });

});