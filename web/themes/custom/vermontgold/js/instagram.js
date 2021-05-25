(function ($, Drupal) {
    'use strict';
    jQuery(function($) {
        $(document).ready(function () {
        
            var feed = new Instafeed({
                accessToken: 'IGQVJXbmdndVU0N1Q4QUNpSkJRdW5fNU9vdWlqMFkwSXNnN2ppYU5GY0huOHlmQnhPZAWF1RmN4QjRFSUlCbnU5Tm9VX1VDSXFLQThhUy1pUHlycWJkc1YzUVdqMENqLTZADd0RraFNCNkJ3RWVwVXVBaAZDZD',
                limit: 7,
                template: '<li><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a></li>',
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