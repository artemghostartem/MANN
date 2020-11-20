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
})
