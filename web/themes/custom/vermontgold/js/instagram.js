(function ($, Drupal) {
    'use strict';
    jQuery(function($) {
        $(document).ready(function () {
        
            var feed = new Instafeed({
                accessToken: 'IGQVJXdGpZAY3dINE8wZAm9MVFpUMkNQbDU4NklPZA3M5djNhek1OQzFmdzNyVmRBM1VfU3dubHAybHlLS1Y2V05TYXNLd09QZA1E5elpFTDVNekZAPcnVIY0NZATklMZAGQ1bHZAialN5ZADJxejBvOGlIdF9CTwZDZD',
                limit: 7,
                template: '<li><a href="{{link}}" target="_blank"><img title="{{caption}}" src="{{image}}" /></a></li>',
              });
              feed.run();

            var feed = new Instafeed({
                accessToken: 'your-token'
              });
              feed.run();


        // Custom Block Slider
        $('.instagram_gallery').slick({
            infinite: true,
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows:false,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });

        // Block Classes Applied to Paragraphs
        setTimeout(function(){
            $('.block-label-instagram-block').closest('.paragraph.paragraph--type--block ').addClass('block-label-instagram-block');
        }, 300);

     });
});
})(jQuery, Drupal);

// jQuery(document).ready(function($){
//     setTimeout(function(){
//         $('.instagram_gallery').slick({
//             infinite: true,
//             lazyLoad: 'ondemand',
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             arrows:false
//         });
//     });
// });