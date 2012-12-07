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
});
