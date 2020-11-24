$(document).ready(function() {
	// heroSection tagline position
    function setTeglineMargin() {
        let heroTegline = document.querySelector('.hero-main-tagline')
        let heroTeglineWidth = heroTegline.offsetWidth
        let heroTeglineText = document.querySelector('.hero-main-tagline p')
        let heroTeglineTextHeight = heroTeglineText.offsetHeight
        let heroSection = document.querySelector('.hero-section')
        let heroSectionHeight = heroSection.offsetHeight

        heroTeglineText.style = `margin-left: -${heroTeglineWidth/2-heroTeglineTextHeight/2}px`;
        heroTegline.style = `top: ${heroSectionHeight/2}px`;
    };

    $(window).resize(function() {
        setTeglineMargin();
    });
    setTeglineMargin();


    //menu-popup
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    //menu-close
    $('.burger').on('click', function() {
    	if (this.classList.contains('active-menu')) {
    		$.magnificPopup.close();
    		$(this).toggleClass('popup-with-move-anim');
    		$(this).toggleClass('active-menu');
    		$('.logo').toggleClass('active-menu');
    	} else {
    		$(this).toggleClass('popup-with-move-anim');
    		$(this).toggleClass('active-menu');
    		$('.logo').toggleClass('active-menu');
    	}    	
    })
    // Zoom-gallery
    $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});	
    let mainSlider = $('.first-carousel');
	mainSlider.owlCarousel({
		items:1,
		loop: true,
		margin:0,
		nav:true,
        mouseDrag: false,
        touchDrag: false,

	});
    let secondSlider = $('.second-carousel');
    secondSlider.owlCarousel({
        items:3,
        loop: true,
        margin:0,
        nav:true,
        mouseDrag: false,
        touchDrag: false,

    });

    $('.carousel-next').click(function() {
        mainSlider.trigger('next.owl.carousel');
        secondSlider.trigger('next.owl.carousel');
    })
        // custom map
    google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                let mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                let mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                let map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }
})
