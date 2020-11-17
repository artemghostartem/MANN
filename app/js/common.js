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
})