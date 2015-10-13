head.ready(function() {
	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

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
});

