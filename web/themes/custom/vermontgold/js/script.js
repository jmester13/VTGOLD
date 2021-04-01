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

   // Same Height
   var maxHeight = 0;

    $(".views-col").each(function(){
      if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $(".views-col").height(maxHeight);
      

})(jQuery, Drupal);
