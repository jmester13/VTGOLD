/*
 * Javascript code for theme
 *
 * Drupal javascript code style standards can be found here: https://www.drupal.org/docs/develop/standards/javascript/javascript-coding-standards
 *
 */

(function ($, Drupal) {
  'use strict';

   // Accordion
   $(".paragraph.paragraph--type--accordion .field.field--name-field-accordion-item.field__items .field__item:first-child .paragraph.paragraph--type--accordion-item").addClass("active");
   $(".paragraph--type--accordion-item").on("click", function() {
     if ($(this).hasClass("active")) {
       $(this).removeClass("active");
       $(this)
         .siblings(".paragraph.paragraph--type--accordion.field.field--name-field-paragraphs")
         .slideUp(200);
       $(".paragraph--type--accordion-item > .field__item i")
         .removeClass("fa-minus")
         .addClass("fa-plus");
     } else {
       $(".paragraph--type--accordion-item > .field__item i")
         .removeClass("fa-minus")
         .addClass("fa-plus");
       $(this)
         .find("i")
         .removeClass("fa-plus")
         .addClass("fa-minus");
       $(".paragraph--type--accordion-item").removeClass("active");
       $(this).addClass("active");
       $(".paragraph.paragraph--type--accordion.field.field--name-field-paragraphs").slideUp(200);
       $(this)
         .siblings(".paragraph.paragraph--type--accordion.field.field--name-field-paragraphs")
         .slideDown(200);
     }
   });

  //  // COA popup
  // $('.coas .field__item').each(function(){
  //   $(this).find('field__item').on('click',function(){
  //     $(this).parents('.field__item').addClass('show');
  //   });
  //   $(this).find('.close').on('click',function(){
  //     $(this).parents('.field__item').removeClass('show');
  //   });
  // });

  var cboxOptions = {
    width: '95%',
    height: '95%',
    maxWidth: '960px',
    maxHeight: '960px',
  }
  
  $('.cbox-link').colorbox(cboxOptions);
  
  $(window).resize(function(){
      $.colorbox.resize({
        width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
        height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
      });
  });

   // Same Height
   (function($) {
    setTimeout(function() { 
   // Select and loop the container element of the elements you want to equalise
    $('.views-row').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.views-col', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.views-col',this).height(highestBox);
                    
    }); 
  }, 400);
  })(jQuery);

})(jQuery, Drupal);
