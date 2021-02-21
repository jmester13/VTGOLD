(function ($) {

	/*
	** accordions functionality
	*/

	$('.paragraph--type--accordion-item').each(function(){

		// hide body by default
		$(this).find('.field--name-field-accordion-body').hide();
		$(this).find('.field--name-field-accordion-body').attr('aria-hidden','true');
		$(this).find('.field--name-field-accordion-title').attr('aria-expanded','false');

		// slide toggle body on click of title
		$(this).find('.field--name-field-accordion-title').on('click',function(){
			$(this).parents('.paragraph--type--accordion-item').toggleClass('active');
			$(this).parents('.paragraph--type--accordion-item').find('.field--name-field-accordion-body').slideToggle('slow');

			if ( $(this).parents('.paragraph--type--accordion-item').hasClass('active') ) {
				$(this).attr('aria-expanded','true');
				$(this).parents('.paragraph--type--accordion-item').find('.field--name-field-accordion-body').attr('aria-hidden','false');
			} else {
				$(this).attr('aria-expanded','false');
				$(this).parents('.paragraph--type--accordion-item').find('.field--name-field-accordion-body').attr('aria-hidden','true');
			}

		});

	});

	// set first accordion to be open by default
	$('.field--name-field-accordion-items>.field__item:first-child .paragraph--type--accordion-item').addClass('active');
	$('.field--name-field-accordion-items>.field__item:first-child .paragraph--type--accordion-item .field--name-field-accordion-body').css('display','block');

})(jQuery);