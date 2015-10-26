$(document).ready(function() {
	
	$('.js-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.js-mobile-link').click(function (e) {
		e.preventDefault();
		$('body').addClass('menu-opened');
		$('.out').addClass('menu-opened');
		$('.overlay').addClass('is-visible');
		$('.js-menu').addClass('is-active');
		$('.js-close').addClass('is-active');
	});

	$('.js-close').click(function (e) {
		e.preventDefault();
		$(this).removeClass('is-active');
		$('body').removeClass('menu-opened');
		$('.out').removeClass('menu-opened');
		$('.overlay').removeClass('is-visible');
		$('.js-menu').removeClass('is-active');
	});



	// team slider
	$('.js-reviews').slick({
	  infinite: true,
	  dots: true,
	  dotsClass: "reviews__dots",
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: $('.reviews__next'),
	  prevArrow: $('.reviews__prev'),

	  responsive: [
	      {
	        breakpoint: 868,
	        settings: {
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 580,
	        settings: {
	          slidesToShow: 1
	        }
	      }
	    ]
	});
});