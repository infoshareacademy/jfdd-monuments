$(document).ready(function() {
    $('.easter__close').click(function() {
        $('.easter').fadeOut(500);
        $('.overlay').fadeOut(500);
        $('.easter span:not(.easter__counters__highscore) em').text('0');
		$('.easter__map').empty();
    });

    $('.wywolanie__easteregg').click(function() {
        $('.easter').fadeIn(500);
        $('.overlay').fadeIn(500);

		var ciastko = document.cookie.match('rekordWGrze\=([0-9]+)');
		if(ciastko) {
			$('.easter__counters__highscore em').text(ciastko[1]);
		}
		
        var mapWidth = $('.easter__map').width();
        var mapHeight = $('.easter__map').height();
        var routeLimit = mapHeight + mapWidth;
        routeLimit = Math.round(routeLimit);
        $('.easter__counters__limit em').text(routeLimit);
		
		var x, y;
		for (var i=0 ; i <15 ; i++) {
			x = Math.round(Math.random() * 90) + 5;
			y = Math.round(Math.random() * 90) + 5;
			$('.easter__map').append('<div class="symbol-zabytku" data-x="' + x + '" data-y="' + y + '" data-number="' + i + '" style="left:' + x + '%; top:' + y + '%;"></div>');
		}
		
		/*klikniecie symbol-zabytku*/
		$('.symbol-zabytku').click(function() {
			if (!$(this).hasClass('klikniety')) {
				var monumentsCounter = $('.easter__counters__monuments em');				
				var odlegloscXY = 0;
				var poprzednioKlikniety = $('.symbol-zabytku[data-klikniety-jako="' + monumentsCounter.text() + '"]');
				
				if(poprzednioKlikniety.length) {
					var odlegloscNaOsiX = Math.abs($(this).attr('data-x') - poprzednioKlikniety.attr('data-x')) * mapWidth / 100;
					var odlegloscNaOsiY = Math.abs($(this).attr('data-y') - poprzednioKlikniety.attr('data-y')) * mapHeight / 100;	
					odlegloscXY = Math.sqrt(odlegloscNaOsiX * odlegloscNaOsiX + odlegloscNaOsiY * odlegloscNaOsiY);
				}
				
				var nowaOdleglosc = Math.round(parseInt($('.easter__counters__route em').text()) + odlegloscXY);
				var limitOdle glosci = parseInt($('.easter__counters__limit em').text());
				
				if(nowaOdleglosc <= limitOdleglosci) {
					$('.easter__counters__route em').text(nowaOdleglosc); 										
					monumentsCounter.text(parseInt(monumentsCounter.text()) + 1);
					$(this).addClass('klikniety').attr('data-klikniety-jako', monumentsCounter.text());
				} else {
					// game over
					$('.easter__map').append('<div class="easter__gameover">GAME OVER!<br>Wyczerpałeś swój limit! </div>');
					$('.symbol-zabytku').off('click');
					if (parseInt($('.easter__counters__monuments em').text() )> parseInt($('.easter__counters__highscore em').text() )) {
						$('.easter__counters__highscore em').text($('.easter__counters__monuments em').text());
						
						// cookie odn.ustanowienia rekordu
						document.cookie = 'rekordWGrze=' + $('.easter__counters__highscore em').text();
        			}
				}
			}
		});
			
	});

    $( window ).resize(function() {
        if ($('.easter').is(":visible")) {
			// przeliczanie limitu odległości
            var mapWidth = $('.easter__map').width();
            var mapHeight = $('.easter__map').height();
            var routeLimit = mapHeight + mapWidth;
			routeLimit = Math.round(routeLimit);
            $('.easter__counters__limit em').text(routeLimit);

			// przeliczanie łącznej odległości
			var totalRouteAfterResize = 0;
			var zabytekPoczatkowy,
				zabytekKoncowy;
			var odlegloscNaOsiX,
				odlegloscNaOsiY,
				odlegloscXY;
			for (var i=1 ; i <15 ; i++) {
				zabytekPoczatkowy = $('.symbol-zabytku[data-klikniety-jako="' + i +'"]');
				zabytekKoncowy = $('.symbol-zabytku[data-klikniety-jako="' + (i + 1) + '"]');
				if(zabytekPoczatkowy.length && zabytekKoncowy.length) {
					odlegloscNaOsiX = Math.abs(zabytekPoczatkowy.attr('data-x') - zabytekKoncowy.attr('data-x')) * mapWidth / 100;
					odlegloscNaOsiY = Math.abs(zabytekPoczatkowy.attr('data-y') - zabytekKoncowy.attr('data-y')) * mapHeight / 100;	
					odlegloscXY = Math.sqrt(odlegloscNaOsiX * odlegloscNaOsiX + odlegloscNaOsiY * odlegloscNaOsiY);
					totalRouteAfterResize = totalRouteAfterResize + odlegloscXY;
				} else {
					break;
				}
			
			}
			$('.easter__counters__route em').text(Math.round(totalRouteAfterResize));
        }
    });
			
});