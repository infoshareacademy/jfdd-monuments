$(document).ready(function() {
    $('.easter__close').click(function() {
        $('.easter').fadeOut(500);
        $('.overlay').fadeOut(500);
        $('.easter span:not(.easter__counters__highscore) em').text('0');
		$('.easter__map').empty();
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
		
		var zabytkiNaMapie = [];
		var zabytekNaMapie = {};
			
		for (var i=0 ; i <10 ; i++) {
			zabytekNaMapie = {};
			zabytekNaMapie.x = Math.round(Math.random() * 90) + 5;
			zabytekNaMapie.y = Math.round(Math.random() * 90) + 5;
			zabytkiNaMapie.push(zabytekNaMapie);
			$('.easter__map').append('<div class="symbol-zabytku" data-number="' + i + '" style="left:' + zabytekNaMapie.x + '%; top:' + zabytekNaMapie.y + '%;"></div>');
		}
		
		/*klikniecie symbol-zabytku*/
		$('.symbol-zabytku').click(function() {
			if (!$(this).hasClass('klikniety')) {
				var monumentsCounter = $('.easter__counters__monuments em');
				var lpZabytku = $(this).attr('data-number');
				
				var odlegloscXY = 0,
					odlegloscNaOsiX,
					odlegloscNaOsiY;
				for (var j=0 ; j<10 ; j++) {
					console.log(j, zabytkiNaMapie[j].kliknietyJako, monumentsCounter.text());
					if (zabytkiNaMapie[j].kliknietyJako == parseInt(monumentsCounter.text()) ) {		
						odlegloscNaOsiX = Math.abs(zabytkiNaMapie[lpZabytku].x - zabytkiNaMapie[j].x) * mapWidth / 100;
						odlegloscNaOsiY = Math.abs(zabytkiNaMapie[lpZabytku].y - zabytkiNaMapie[j].y) * mapHeight / 100;	
						odlegloscXY = Math.sqrt(odlegloscNaOsiX * odlegloscNaOsiX + odlegloscNaOsiY * odlegloscNaOsiY);
						break;
					}
				}
				
				var nowaOdleglosc = Math.round(parseInt($('.easter__counters__route em').text()) + odlegloscXY);
				var limitOdleglosci = parseInt($('.easter__counters__limit em').text());
				console.log(nowaOdleglosc, limitOdleglosci);
				if(nowaOdleglosc <= limitOdleglosci) {
					$('.easter__counters__route em').text(nowaOdleglosc); 										
					$(this).addClass('klikniety');				
					monumentsCounter.text(parseInt(monumentsCounter.text()) + 1);
					zabytkiNaMapie[lpZabytku].kliknietyJako = monumentsCounter.text();
				} else {
					// game over
					$('.easter__map').append('<h2>Obiekt jest za daleko, przegrałeś, na na na na!</h2>');
					$('.symbol-zabytku').off('click');
				}
			}
		});
			
	});

    $( window ).resize(function() {
        if ($('.easter').is(":visible")) {
            var mapWidth = $('.easter__map').width();
            var mapHeight = $('.easter__map').height();
            var routeLimit = mapHeight + mapWidth;
            routeLimit = Math.round(routeLimit);
            $('.easter__counters__limit em').text(routeLimit);
        }
    });
	


			
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	