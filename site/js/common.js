$(document).ready(function() {
	$('.archive__table tbody tr').hover(function() {
		$('.archive__table tr').removeClass('is-active');
		$(this).addClass('is-active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
	$('.archive__table tbody tr').click(function(event) {
		window.location = "http://www.yoururl.com";
		return false
	});

	//scrollto
	$('.js-goto').click(function(event) {
		id = $(this).data('goto')
		 $('html, body').animate({
	        scrollTop: $("#"+id).offset().top
	    }, 600);
	});
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
	  slidesToScroll: 3,
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