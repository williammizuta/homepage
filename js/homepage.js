jQuery(document).ready(function($) {
	$('.menu').fixHeader();

	$(window).bind('scroll', function() {
		$('.menu-item').removeClass('active');
		var sectionsAbove = $('.section').map(function(index, element){
			return {
				element: element,
				offset: $(element).offset().top - $(window).scrollTop() - $('.menu').outerHeight()
			};
		}).filter(function(i) {
			return this.offset <= 1;
		});
		if (sectionsAbove.length > 0) {
			var currentSection = sectionsAbove.last()[0].element;
			$('.menu-item a[href$=' + $(currentSection).attr('id') + ']').parent().addClass('active');
		}
	});

	$('.menu-item a').click(function(event) {
		var section = $(this).attr('href')
		$('body').animate({
			scrollTop: $(section).offset().top - $('.menu').outerHeight()
		}, 1200, 'swing');
		event.preventDefault();
	});

	$('.project a').click(function(event) {
		$('.project').removeClass('active');
		$(this).parent().addClass('active');
		event.preventDefault();
	});

});
