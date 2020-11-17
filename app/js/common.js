$(function() {
	$( document ).ready(function() {
		let heroTegline = document.querySelector('.hero-main-tagline')
		let heroTeglineWidth = heroTegline.offsetWidth
		let heroTeglineText = document.querySelector('.hero-main-tagline p')
		let heroTeglineTextHeight = heroTeglineText.offsetHeight
		
		function setTeglineMargin () {
			heroTeglineText.style = `margin-left: -${heroTeglineWidth/2-heroTeglineTextHeight/2}px`
		}

		setTeglineMargin()

		let heroSection = document.querySelector('.hero-section')
		let heroSectionHeight = heroSection.offsetHeight

		function setTeglineTop () {
			heroTegline.style = `top: ${heroSectionHeight/2}px`
		}

		setTeglineTop ()
	})
});
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

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
});