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

   $('.header .main-menu .region-navigation .menu--main div.view-mode-mobile-only').closest('li.menu-item').addClass('view-mode-mobile-only');

   // Third level drop down
       $(".menu-dropdown-1 .menu.menu-level-2 .menu-item.menu-item--expanded").click(function(){
           $(this).toggleClass("clicked");
       });
   
       $(".menu-dropdown-1 .menu.menu-level-2 .menu-item.menu-item--expanded.clicked").click(function(){
           $(this).removeClass("clicked");
       });
   
       // Mobile
       // Hide Menu
       $('.header .main-menu .region-navigation .menu--main ul.menu').addClass('hide');
       
       // Show search on click
       $('.header .main-menu .mobile .hamburger-menu .bar').on('click', function() {
           $('form#search-block-form').toggleClass('visible');
       });
       
       // Menu Show
       $('.hamburger-menu').on('click', function() {
       $('.bar').toggleClass('animate');
           var mobileNav = $('.header .main-menu .region-navigation .menu--main ul.menu');
           mobileNav.toggleClass('hide show');
       });
     
  // Quick Tabs
  function prependSelect() {
      $.each($('.quicktabs_wrapper'), function(i) {
          var selectId = 'select_quicktab_' + i;
          var qtId = '#' + $(this).attr('id');
        $(qtId).prepend('<p id="' + selectId + '" class="select-prepend">Window width ' + $(window).width() + '</p>');
          $('#' + selectId).bind("click", function() {
              $(qtId + ' ul').toggle();
          }); 
      });
  }

  function removeSelect() {
      $('.select-prepend').remove();
      $('.quicktabs_tabs').show();
  }    

  if($(window).width() < 980) {
      prependSelect();
  }

  $(window).resize(function() {
      if($(window).width() < 980 && !$('.select-prepend').length) {
          prependSelect();
      }
      if($(window).width() >= 980) {
          removeSelect();
      }
  });
  /*
  $('.select-prepend').click(function(){
      alert("clicked");
      var parentId = '#' + $(this).parent().attr('id');
      $(parentId + ' ul').toggle();        
  });
  */
  $('a.qt_tab').click(function(e){
      $(this).closest('.select-prepend').text($(this).text());
      $(this).closest('.quicktabs_tabs').hide(); 
      $(this).addClass('current');
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
